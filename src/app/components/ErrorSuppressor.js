"use client";

import { useEffect } from "react";

export default function ErrorSuppressor() {
  useEffect(() => {
    function onError(event) {
      try {
        const msg = event?.error?.message || event?.message || "";
        if (msg && msg.includes("removeChild")) {
          // swallow this specific noisy runtime error (often from HMR/style reload internals)
          // prevent the default dev overlay or uncaught exception behavior
          // eslint-disable-next-line no-console
          console.warn("Suppressed runtime removeChild error:", msg);
          if (event.preventDefault) event.preventDefault();
          return true;
        }
      } catch (e) {
        // ignore
      }
      return false;
    }

    // window.onerror
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", (ev) => {
      const reason = ev?.reason?.message || ev?.reason || "";
      if (typeof reason === "string" && reason.includes("removeChild")) {
        // eslint-disable-next-line no-console
        console.warn("Suppressed unhandledrejection removeChild:", reason);
        ev.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
