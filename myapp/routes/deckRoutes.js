const express = require("express");

const deckController = require('../controllers/deckController')

const router = express.Router();

function getCards() {
  return fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((response) => response.json());
}

router.get('/', (req, res) => {
  getCards().then(cards => res.json(cards))
})

module.exports = router;

