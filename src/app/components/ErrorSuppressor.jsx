import { useEffect } from "react";

export default function ErrorSuppressor() {
  useEffect(() => {
    function onError(event) {
      try {
        const msg = event?.error?.message || event?.message || "";
        if (msg && msg.includes("removeChild")) {
          console.warn("Suppressed runtime removeChild error:", msg);
          if (event.preventDefault) event.preventDefault();
          return true;
        }
      } catch (e) {
        // ignore
      }
      return false;
    }

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", (ev) => {
      const reason = ev?.reason?.message || ev?.reason || "";
      if (typeof reason === "string" && reason.includes("removeChild")) {
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
