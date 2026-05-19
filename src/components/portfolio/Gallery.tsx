import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface Item {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  items: Item[];
  columns?: string;
}

export function Gallery({ items, columns = "grid-cols-2 md:grid-cols-3" }: GalleryProps) {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      <div className={`grid gap-4 sm:gap-5 ${columns}`}>
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(item)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-card hover:shadow-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {item.caption && (
              <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-left text-xs sm:text-sm font-medium text-background opacity-0 group-hover:opacity-100 transition-opacity">
                {item.caption}
              </span>
            )}
          </button>
        ))}
      </div>
      {active && (
        <Lightbox src={active.src} alt={active.alt} onClose={() => setActive(null)} />
      )}
    </>
  );
}
