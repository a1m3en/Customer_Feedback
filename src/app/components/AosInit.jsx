import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-quart",
      once: false,
      mirror: true,
    });

    // Ensure AOS calculates positions after images/resources load and on resize
    const refresh = () => AOS.refresh();
    // call once to ensure animations are picked up
    refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}
