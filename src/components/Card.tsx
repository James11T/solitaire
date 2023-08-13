import React from "react";
import cn from "../utils/cn";
import { getSeededRandom } from "../utils/random";
import { GameCard, Location } from "../types";
import { CardsByNotation, CardBack } from "../cards";
import { useDraggable } from "@dnd-kit/core";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  card: GameCard;
  draggable?: boolean;
  location: Location;
  isDragging?: boolean;
}

const ROTATE_ANGLE = 5;

const Card = ({
  card,
  draggable = true,
  location,
  isDragging: isStackDragging = false,
  className,
  style,
  ...divProps
}: CardProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: card.notation,
    disabled: !draggable || card.flipped,
    data: {
      location,
    },
  });

  const svg = card.flipped ? CardBack : CardsByNotation[card.notation];

  const rotation = React.useMemo(() => getSeededRandom(card.notation), [card]);

  return (
    <div
      className={cn(
        "select-none w-[124px] h-[173px] shadow shadow-gray-800 rounded-md ring-1 ring-black ring-opacity-10 relative",
        className,
        divProps["onClick"] && "cursor-pointer",
        (isStackDragging || isDragging) && "opacity-40",
        isDragging && "z-[999]"
      )}
      style={{
        rotate: `${rotation * ROTATE_ANGLE - ROTATE_ANGLE / 2}deg`,
        ...style,
      }}
      ref={setNodeRef}
      {...divProps}
      {...listeners}
      {...attributes}
    >
      <img
        src={svg}
        alt={card.notation}
        className="pointer-events-none w-full block"
      />
    </div>
  );
};

export default Card;
export type { CardProps };
