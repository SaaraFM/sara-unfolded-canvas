import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      <button
        aria-label="Fechar"
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/90 text-foreground flex items-center justify-center hover:scale-105 transition-transform"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-hover"
      />
    </div>
  );
}
