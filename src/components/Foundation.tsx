import { useDroppable } from "@dnd-kit/core";
import { GameCard, Suit } from "../types";
import Stack from "./Stack";
import cn from "../utils/cn";

interface FoundationProps {
  cards: GameCard[];
  suit: Suit;
}

const Foundation = ({ cards, suit }: FoundationProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `FOUNDATION_${suit}`,
    data: {
      type: "FOUNDATION",
      suit: suit,
    },
  });

  return (
    <div ref={setNodeRef} className={cn(isOver && "hover-over")}>
      <Stack
        cards={cards}
        suit={suit}
        squared
        draggable="off"
        location={{
          type: "FOUNDATION",
          suit,
        }}
      />
    </div>
  );
};

export default Foundation;
