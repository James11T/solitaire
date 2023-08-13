import { CardNotation, RANKS, Rank, Suit } from "../types";

const getRank = (card: CardNotation): Rank => {
  const rank = card.charAt(1) as Rank;

  return rank;
};

const getRankValue = (card: CardNotation) => {
  const rank = getRank(card);

  return RANKS.indexOf(rank);
};

const isInSuit = (suit: Suit, card: CardNotation) => {
  const cardSuit = card.charAt(0) as Suit;

  return cardSuit === suit;
};

const getCardColor = (card: CardNotation): "WHITE" | "BLACK" => {
  const cardSuit = card.charAt(0) as Suit;

  if (cardSuit === "C" || cardSuit === "S") return "BLACK";
  return "WHITE";
};

const canStackInTableau = (card1: CardNotation, card2: CardNotation) => {
  const card1Color = getCardColor(card1);
  const card2Color = getCardColor(card2);

  if (card1Color === card2Color) return false;

  const card1Rank = getRankValue(card1);
  const card2Rank = getRankValue(card2);

  return card2Rank === card1Rank - 1;
};

export { getRank, getRankValue, isInSuit, canStackInTableau };
