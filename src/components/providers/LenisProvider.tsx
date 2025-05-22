import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLenisStore } from "@/stores/useLenisStore";

interface Props {
  children: React.ReactNode;
}

export const LenisProvider = ({ children }: Props) => {
  const setLenis = useLenisStore((state) => state.setLenis);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const shouldEnable = window.innerWidth >= 1150;

      if (shouldEnable && !lenisRef.current) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenisRef.current = lenis;
        setLenis(lenis);

        const raf = (time: number) => {
          lenis.raf(time);
          if (lenisRef.current) requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
      }

      if (!shouldEnable && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenis(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenis(null);
      }
    };
  }, [setLenis]);

  return <>{children}</>;
};
