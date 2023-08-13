import React from "react";
import { CardNotation, GameCard, NOTATIONS, Suit, Location } from "../types";
import shuffle from "../utils/array";
import { canStackInTableau, getRankValue, isInSuit } from "../utils/card";

const DEFAULT_FOUNDATIONS = {
  C: [],
  D: [],
  H: [],
  S: [],
};

const DEFAULT_TABLEAU = [[], [], [], [], [], [], []];

const flipLastCards = (tableau: GameCard[][]) => {
  for (const col of tableau) {
    if (col.length === 0) continue;
    col[col.length - 1].flipped = false;
  }
};

const useSolitaire = () => {
  const [reserve, setReserve] = React.useState<GameCard[]>([]);
  const [revealedReserve, setRevealedReserve] = React.useState<GameCard[]>([]);
  const [foundation, setFoundation] =
    React.useState<Record<Suit, GameCard[]>>(DEFAULT_FOUNDATIONS);
  const [tableau, setTableau] = React.useState<GameCard[][]>(DEFAULT_TABLEAU);

  const deal = () => {
    const shuffledDeck = shuffle(NOTATIONS);
    const newTableau: typeof tableau = DEFAULT_TABLEAU.map((col) => [...col]);

    for (let tableauIndex = 0; tableauIndex < tableau.length; ++tableauIndex) {
      for (let cardIndex = 0; cardIndex < tableauIndex + 1; ++cardIndex) {
        const card = shuffledDeck.pop()!;

        newTableau[tableauIndex].push({
          flipped: cardIndex < tableauIndex,
          notation: card,
        });
      }
    }

    setTableau(newTableau);

    setReserve(shuffledDeck.map((card) => ({ flipped: true, notation: card })));
    setRevealedReserve([]);
    setFoundation(DEFAULT_FOUNDATIONS);
  };

  const popReserve = () => setRevealedReserve((old) => old.slice(0, -1));

  const advanceReserve = () => {
    const cardsToMove = reserve.slice(-3).reverse();

    if (cardsToMove.length > 0) {
      setReserve((prevReserve) => prevReserve.slice(0, -3));
      setRevealedReserve((prevRevealedReserve) => [
        ...prevRevealedReserve,
        ...cardsToMove.map((card) => ({ ...card, flipped: false })),
      ]);
    } else {
      setReserve(
        revealedReserve.reverse().map((card) => ({ ...card, flipped: true }))
      );
      setRevealedReserve([]);
    }
  };

  const getDragStack = (
    tableauIndex: number,
    card: CardNotation
  ): CardNotation[] => {
    const currentTableau = tableau[tableauIndex];

    console.log(`Looking for ${card} in ${tableauIndex}`);

    const targetCard = currentTableau.find(
      (tableauCard) => tableauCard.notation === card
    );
    if (!targetCard) throw Error("Card not in tableau");

    const targetIndex = currentTableau.indexOf(targetCard);

    return currentTableau.slice(targetIndex).map((card) => card.notation);
  };

  const moveToFoundation = (
    foundationSuit: Suit,
    card: CardNotation,
    from: Location
  ) => {
    if (!isInSuit(foundationSuit, card)) return console.log("Incorrect Suit");

    const currentFoundation = foundation[foundationSuit];
    let currentRank = -1;

    if (currentFoundation.length > 0) {
      currentRank = getRankValue(
        currentFoundation[currentFoundation.length - 1].notation
      );
    }

    const newRank = getRankValue(card);

    if (newRank !== currentRank + 1) return console.log("Incorrect Rank");

    if (from.type === "TABLEAU") {
      const stack = getDragStack(from.index, card);
      if (stack.length > 1) return console.log("Group drag not allowed");
    }

    setFoundation((old) => ({
      ...old,
      [foundationSuit]: [
        ...old[foundationSuit],
        { notation: card, flipped: false },
      ],
    }));

    if (from.type === "RESERVE") {
      popReserve();
    } else if (from.type === "TABLEAU") {
      setTableau((old) => {
        const newTableau = old.map((col) => [...col]);
        newTableau[from.index] = old[from.index].slice(0, -1);

        flipLastCards(newTableau);

        return newTableau;
      });
    }
  };

  const moveToTableau = (
    tableauIndex: number,
    card: CardNotation,
    from: Location
  ) => {
    if (from.type === "TABLEAU" && tableauIndex === from.index) return;

    const currentTableau = tableau[tableauIndex];

    if (currentTableau.length > 0) {
      const lastCard = currentTableau[currentTableau.length - 1];

      if (!canStackInTableau(lastCard.notation, card))
        return console.log("Cant stack");
    }

    if (from.type === "RESERVE") {
      setTableau((old) => {
        const newTableau = old.map((col) => [...col]);
        newTableau[tableauIndex].push(
          revealedReserve[revealedReserve.length - 1]
        );
        return newTableau;
      });
      popReserve();
    } else if (from.type === "TABLEAU") {
      const stack = getDragStack(from.index, card);

      setTableau((old) => {
        const newTableau = old.map((col) => [...col]);

        newTableau[tableauIndex] = [
          ...newTableau[tableauIndex],
          ...stack.map((card) => ({ notation: card, flipped: false })),
        ];

        newTableau[from.index] = newTableau[from.index].slice(0, -stack.length);

        flipLastCards(newTableau);

        return newTableau;
      });
    }
  };

  const hasWon =
    Object.values(foundation).reduce((prev, curr) => prev + curr.length, 0) ===
    52;

  return {
    hasWon,
    foundation,
    revealedReserve,
    reserve,
    tableau,
    deal,
    advanceReserve,
    moveToFoundation,
    getDragStack,
    moveToTableau,
  };
};

export default useSolitaire;
