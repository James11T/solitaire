const RANKS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
] as const;

const SUITS = ["C", "D", "H", "S"] as const;

const NOTATIONS = [
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "CT",
  "CJ",
  "CQ",
  "CK",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "DT",
  "DJ",
  "DQ",
  "DK",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "HT",
  "HJ",
  "HQ",
  "HK",
  "S1",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "ST",
  "SJ",
  "SQ",
  "SK",
] as const;

type Suit = (typeof SUITS)[number];
type Rank = (typeof RANKS)[number];
type CardNotation = (typeof NOTATIONS)[number];

type CardSuit<TCard extends CardNotation> =
  TCard extends `${infer CardSuit}${string}` ? CardSuit : never;

type CardRank<TCard extends CardNotation> =
  TCard extends `${string}${infer Rank}` ? Rank : never;

type GameCard = {
  flipped: boolean;
  notation: CardNotation;
};

type FoundationLocation = { type: "FOUNDATION"; suit: Suit };
type TableauLocation = { type: "TABLEAU"; index: number };
type ReserveLocation = { type: "RESERVE" };

type Location = FoundationLocation | TableauLocation | ReserveLocation;

export { RANKS, SUITS, NOTATIONS };
export type {
  Suit,
  Rank,
  CardNotation,
  GameCard,
  CardSuit,
  CardRank,
  FoundationLocation,
  TableauLocation,
  ReserveLocation,
  Location,
};
