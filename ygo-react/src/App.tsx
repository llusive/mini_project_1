import { useEffect, useState } from "react";
import "./App.css";
import { get, set } from "idb-keyval";
import type { Card } from "./types";

import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

async function loadCards() {
  const [{ database_version }] = await fetch(
    "https://db.ygoprodeck.com/api/v7/checkDBVer.php",
  ).then((r) => r.json());

  const cached = await get("cards");
  if (cached?.version === database_version) return cached.data;

  const data = (
    await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((r) =>
      r.json(),
    )
  ).data;
  await set("cards", { version: database_version, data });
  return data;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [query, setQuery] = useState("");
  const [numResults, setNumResults] = useState(100);

  useEffect(() => {
    loadCards().then(setCards);
  }, []);

  const matches = cards.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );
  const results = matches.slice(0, numResults);
  const hasMore = numResults < matches.length;

  function handleQueryChange(value: string) {
    setQuery(value);
    setNumResults(100);
  }

  function handleShowMore() {
    setNumResults((prev) => prev + 100);
  }

  return (
    <>
      <SearchBar query={query} onQueryChange={handleQueryChange} />
      <SearchList
        results={results}
        hasMore={hasMore}
        onShowMore={handleShowMore}
      />
    </>
  );
}

export default App;
