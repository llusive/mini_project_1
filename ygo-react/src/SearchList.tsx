import { useEffect, useRef } from "react";
import type { Card } from "./types";

type SearchListProps = {
  results: Card[];
  hasMore: boolean;
  onShowMore: () => void;
};

export default function SearchList({
  results,
  hasMore,
  onShowMore,
}: SearchListProps) {
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onShowMore();
      },
      { rootMargin: "500px" },
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [onShowMore, hasMore]);

  return (
    <div>
      {results.map((card) => (
        <img
          key={card.id}
          src={card.card_images[0].image_url_small}
          alt={card.name}
          loading="lazy"
          width={168}
          height={246}
        />
      ))}
      {hasMore && <div ref={markerRef} />}
    </div>
  );
}
