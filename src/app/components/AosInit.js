"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-quart",
      once: false, // allow animations to happen more than once
      mirror: true, // animate elements also when scrolling past in the opposite direction
    });
  }, []);

  return null;
}
