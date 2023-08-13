import { useDroppable } from "@dnd-kit/core";
import { CardNotation, GameCard } from "../types";
import Stack from "./Stack";
import cn from "../utils/cn";

interface TableauProps {
  cards: GameCard[];
  index: number;
  draggingCards: CardNotation[];
}

const Tableau = ({ cards, index, draggingCards }: TableauProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `TABLEAU_${index}`,
    data: {
      type: "TABLEAU",
      index: index,
    },
  });

  return (
    <div ref={setNodeRef} className={cn(isOver && "hover-over")}>
      <Stack
        cards={cards}
        key={index}
        location={{ type: "TABLEAU", index }}
        draggingCards={draggingCards}
      />
    </div>
  );
};

export default Tableau;
