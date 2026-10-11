import { useEffect, useState } from "react";
import "./App.css";
import { get, set } from "idb-keyval";
import type { Card } from "./types";

async function loadCards() {
  const [{ database_version }] = await fetch(
    "https://db.ygoprodeck.com/api/v7/checkDBVer.php",
  ).then((response) => response.json());

  const cached = await get("cards");
  if (cached?.version === database_version) return cached.data;

  const data = (
    await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then(
      (response) => response.json(),
    )
  ).data;
  await set("cards", { version: database_version, data });
  return data;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    loadCards().then(setCards);
  }, []);

  console.log(cards.length);

  return <></>;
}

export default App;
