import { useEffect, useRef } from "react";
import { Printer } from "lucide-react";
import gsap from "gsap";

interface AnimatedPrinterIconProps {
  className?: string;
}

const AnimatedPrinterIcon = ({ className }: AnimatedPrinterIconProps) => {
  const printerRef = useRef<HTMLDivElement>(null);
  const scannerLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (printerRef.current) {
      // Printer icon animation
      gsap.fromTo(
        printerRef.current,
        {
          y: 0,
          rotation: 0,
        },
        {
          y: -10,
          rotation: -5,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }

    if (scannerLightRef.current) {
      // Scanner light animation
      gsap.fromTo(
        scannerLightRef.current,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: "100%",
          opacity: 1,
          duration: 2,
          repeat: -1,
          ease: "linear",
          repeatDelay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div className="relative">
      <div ref={printerRef}>
        <Printer className={className} />
      </div>
      {/* Scanner light effect */}
      <div
        ref={scannerLightRef}
        className="absolute top-1/2 left-0 w-1 h-full bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-0"
        style={{ transform: "translateY(-50%)" }}
      />
    </div>
  );
};

export default AnimatedPrinterIcon;
