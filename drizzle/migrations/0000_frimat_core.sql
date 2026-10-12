create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users see own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create table public.repair_tickets (
  id uuid primary key default gen_random_uuid(),
  ticket_number text not null unique default ('FT-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  user_id uuid not null,
  service text not null,
  device text,
  issue text not null,
  customer_name text not null,
  phone text not null,
  address text,
  preferred_date date,
  status text not null default 'received',
  technician_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.repair_tickets to authenticated;
grant all on public.repair_tickets to service_role;
alter table public.repair_tickets enable row level security;
create policy "Customers view own tickets" on public.repair_tickets for select to authenticated using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
create policy "Customers create own tickets" on public.repair_tickets for insert to authenticated with check (user_id = auth.uid() and status = 'received');
create policy "Admins update tickets" on public.repair_tickets for update to authenticated using (public.has_role(auth.uid(),'admin'));

create or replace function public.touch_updated_at() returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end $$;
create trigger repair_tickets_touch before update on public.repair_tickets for each row execute function public.touch_updated_at();

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  service text,
  rating int not null,
  message text not null,
  image_path text,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);
grant select, insert on public.testimonials to anon, authenticated;
grant update, delete on public.testimonials to authenticated;
grant all on public.testimonials to service_role;
alter table public.testimonials enable row level security;
create policy "Public reads approved" on public.testimonials for select to anon, authenticated using (approved = true or public.has_role(auth.uid(),'admin'));
create policy "Anyone submits" on public.testimonials for insert to anon, authenticated with check (approved = false and rating between 1 and 5 and length(message) between 1 and 1000 and length(name) between 1 and 100);
create policy "Admins moderate" on public.testimonials for update to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins delete" on public.testimonials for delete to authenticated using (public.has_role(auth.uid(),'admin'));

create table public.mpesa_payments (
  id uuid primary key default gen_random_uuid(),
  phone text not null,
  amount int not null,
  account_reference text not null,
  description text,
  checkout_request_id text unique,
  merchant_request_id text,
  status text not null default 'pending',
  result_desc text,
  mpesa_receipt text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant all on public.mpesa_payments to service_role;
alter table public.mpesa_payments enable row level security;
create trigger mpesa_touch before update on public.mpesa_payments for each row execute function public.touch_updated_at();

create policy "Read review photos" on storage.objects for select to anon, authenticated using (bucket_id = 'testimonials');
create policy "Upload review photos" on storage.objects for insert to anon, authenticated with check (bucket_id = 'testimonials');