// SearchBar.tsx
type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className="border"
    />
  );
}