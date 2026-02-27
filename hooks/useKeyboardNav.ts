// hooks/useKeyboardNav.ts
import { useEffect } from "react";

interface UseKeyboardNavOptions {
  zoomOut: () => void;
  onSearchToggle: () => void;
  /** Pass `true` while the search dialog is open so Escape is reserved for it */
  searchOpen: boolean;
}

export function useKeyboardNav({
  zoomOut,
  onSearchToggle,
  searchOpen,
}: UseKeyboardNavOptions): void {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isSearchShortcut = e.key === "k" && (e.metaKey || e.ctrlKey);
      const isZoomOut =
        (e.key === "Escape" || e.key === "Backspace") && !searchOpen;

      if (isSearchShortcut) {
        e.preventDefault();
        onSearchToggle();
        return;
      }

      if (isZoomOut) {
        e.preventDefault();
        zoomOut();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOut, onSearchToggle, searchOpen]);
}
