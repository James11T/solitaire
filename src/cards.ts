import Club1 from "./assets/CLUB-1.svg";
import Club2 from "./assets/CLUB-2.svg";
import Club3 from "./assets/CLUB-3.svg";
import Club4 from "./assets/CLUB-4.svg";
import Club5 from "./assets/CLUB-5.svg";
import Club6 from "./assets/CLUB-6.svg";
import Club7 from "./assets/CLUB-7.svg";
import Club8 from "./assets/CLUB-8.svg";
import Club9 from "./assets/CLUB-9.svg";
import Club10 from "./assets/CLUB-10.svg";
import ClubJack from "./assets/CLUB-11-JACK.svg";
import ClubQueen from "./assets/CLUB-12-QUEEN.svg";
import ClubKing from "./assets/CLUB-13-KING.svg";
import Diamond1 from "./assets/DIAMOND-1.svg";
import Diamond2 from "./assets/DIAMOND-2.svg";
import Diamond3 from "./assets/DIAMOND-3.svg";
import Diamond4 from "./assets/DIAMOND-4.svg";
import Diamond5 from "./assets/DIAMOND-5.svg";
import Diamond6 from "./assets/DIAMOND-6.svg";
import Diamond7 from "./assets/DIAMOND-7.svg";
import Diamond8 from "./assets/DIAMOND-8.svg";
import Diamond9 from "./assets/DIAMOND-9.svg";
import Diamond10 from "./assets/DIAMOND-10.svg";
import DiamondJack from "./assets/DIAMOND-11-JACK.svg";
import DiamondQueen from "./assets/DIAMOND-12-QUEEN.svg";
import DiamondKing from "./assets/DIAMOND-13-KING.svg";
import Heart1 from "./assets/HEART-1.svg";
import Heart2 from "./assets/HEART-2.svg";
import Heart3 from "./assets/HEART-3.svg";
import Heart4 from "./assets/HEART-4.svg";
import Heart5 from "./assets/HEART-5.svg";
import Heart6 from "./assets/HEART-6.svg";
import Heart7 from "./assets/HEART-7.svg";
import Heart8 from "./assets/HEART-8.svg";
import Heart9 from "./assets/HEART-9.svg";
import Heart10 from "./assets/HEART-10.svg";
import HeartJack from "./assets/HEART-11-JACK.svg";
import HeartQueen from "./assets/HEART-12-QUEEN.svg";
import HeartKing from "./assets/HEART-13-KING.svg";
import Spade1 from "./assets/SPADE-1.svg";
import Spade2 from "./assets/SPADE-2.svg";
import Spade3 from "./assets/SPADE-3.svg";
import Spade4 from "./assets/SPADE-4.svg";
import Spade5 from "./assets/SPADE-5.svg";
import Spade6 from "./assets/SPADE-6.svg";
import Spade7 from "./assets/SPADE-7.svg";
import Spade8 from "./assets/SPADE-8.svg";
import Spade9 from "./assets/SPADE-9.svg";
import Spade10 from "./assets/SPADE-10.svg";
import SpadeJack from "./assets/SPADE-11-JACK.svg";
import SpadeQueen from "./assets/SPADE-12-QUEEN.svg";
import SpadeKing from "./assets/SPADE-13-KING.svg";
import Joker1 from "./assets/JOKER-1.svg";
import Joker2 from "./assets/JOKER-2.svg";
import Joker3 from "./assets/JOKER-3.svg";
import CardBack from "./assets/BACK.svg";
import CardOutline from "./assets/OUTLINE.svg";
import CardOutlineClubs from "./assets/OUTLINE_CLUB.svg";
import CardOutlineDiamonds from "./assets/OUTLINE_DIAMOND.svg";
import CardOutlineHearts from "./assets/OUTLINE_HEART.svg";
import CardOutlineSpades from "./assets/OUTLINE_SPADE.svg";
import { CardNotation, Suit } from "./types";

const Clubs = [
  Club1,
  Club2,
  Club3,
  Club4,
  Club5,
  Club6,
  Club7,
  Club8,
  Club9,
  Club10,
  ClubJack,
  ClubQueen,
  ClubKing,
];

const Diamonds = [
  Diamond1,
  Diamond2,
  Diamond3,
  Diamond4,
  Diamond5,
  Diamond6,
  Diamond7,
  Diamond8,
  Diamond9,
  Diamond10,
  DiamondJack,
  DiamondQueen,
  DiamondKing,
];

const Hearts = [
  Heart1,
  Heart2,
  Heart3,
  Heart4,
  Heart5,
  Heart6,
  Heart7,
  Heart8,
  Heart9,
  Heart10,
  HeartJack,
  HeartQueen,
  HeartKing,
];

const Spades = [
  Spade1,
  Spade2,
  Spade3,
  Spade4,
  Spade5,
  Spade6,
  Spade7,
  Spade8,
  Spade9,
  Spade10,
  SpadeJack,
  SpadeQueen,
  SpadeKing,
];

const Jokers = [Joker1, Joker2, Joker3];

const Cards = [
  Club1,
  Club2,
  Club3,
  Club4,
  Club5,
  Club6,
  Club7,
  Club8,
  Club9,
  Club10,
  ClubJack,
  ClubQueen,
  ClubKing,
  Diamond1,
  Diamond2,
  Diamond3,
  Diamond4,
  Diamond5,
  Diamond6,
  Diamond7,
  Diamond8,
  Diamond9,
  Diamond10,
  DiamondJack,
  DiamondQueen,
  DiamondKing,
  Heart1,
  Heart2,
  Heart3,
  Heart4,
  Heart5,
  Heart6,
  Heart7,
  Heart8,
  Heart9,
  Heart10,
  HeartJack,
  HeartQueen,
  HeartKing,
  Spade1,
  Spade2,
  Spade3,
  Spade4,
  Spade5,
  Spade6,
  Spade7,
  Spade8,
  Spade9,
  Spade10,
  SpadeJack,
  SpadeQueen,
  SpadeKing,
  Joker1,
  Joker2,
  Joker3,
];

const CardOutlines: Record<Suit, string> = {
  C: CardOutlineClubs,
  D: CardOutlineDiamonds,
  H: CardOutlineHearts,
  S: CardOutlineSpades,
};

const CardsByNotation: Record<CardNotation, string> = {
  C1: Club1,
  C2: Club2,
  C3: Club3,
  C4: Club4,
  C5: Club5,
  C6: Club6,
  C7: Club7,
  C8: Club8,
  C9: Club9,
  CT: Club10,
  CJ: ClubJack,
  CQ: ClubQueen,
  CK: ClubKing,
  D1: Diamond1,
  D2: Diamond2,
  D3: Diamond3,
  D4: Diamond4,
  D5: Diamond5,
  D6: Diamond6,
  D7: Diamond7,
  D8: Diamond8,
  D9: Diamond9,
  DT: Diamond10,
  DJ: DiamondJack,
  DQ: DiamondQueen,
  DK: DiamondKing,
  H1: Heart1,
  H2: Heart2,
  H3: Heart3,
  H4: Heart4,
  H5: Heart5,
  H6: Heart6,
  H7: Heart7,
  H8: Heart8,
  H9: Heart9,
  HT: Heart10,
  HJ: HeartJack,
  HQ: HeartQueen,
  HK: HeartKing,
  S1: Spade1,
  S2: Spade2,
  S3: Spade3,
  S4: Spade4,
  S5: Spade5,
  S6: Spade6,
  S7: Spade7,
  S8: Spade8,
  S9: Spade9,
  ST: Spade10,
  SJ: SpadeJack,
  SQ: SpadeQueen,
  SK: SpadeKing,
};

export {
  Cards,
  Clubs,
  Diamonds,
  Hearts,
  Spades,
  Jokers,
  CardsByNotation,
  CardBack,
  CardOutline,
  CardOutlineClubs,
  CardOutlineDiamonds,
  CardOutlineHearts,
  CardOutlineSpades,
  CardOutlines,
};
