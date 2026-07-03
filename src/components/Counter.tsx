import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Counter({ from = 0, to, duration = 2, suffix = "+" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.ceil(val));
        }
      });
      return controls.stop;
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{value}{suffix}</span>;
}
