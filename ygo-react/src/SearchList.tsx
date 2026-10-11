import type { Card } from "./types";

type SearchListProps = {
  results: Card[];
}

export default function SearchList({ results }: SearchListProps) {
  return (
    <div>
      {results.map((card) => (
        <img key={card.id} src={card.card_images[0].image_url_small} alt={card.name} />
      ))}
    </div>
  );
}
