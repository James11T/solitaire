import CardOutline from "./CardOutline";
import { CardNotation, GameCard, Suit } from "../types";
import cn from "../utils/cn";
import Card, { CardProps } from "./Card";

interface StackProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "draggable"> {
  cards: GameCard[];
  squared?: boolean;
  axis?: "x" | "y";
  reveal?: number;
  suit?: Suit;
  draggable?: "off" | "top" | "all";
  location: CardProps["location"];
  draggingCards?: CardNotation[];
}

const Stack = ({
  cards,
  squared = false,
  axis = "y",
  reveal,
  suit,
  draggable = "all",
  location,
  draggingCards = [],
  className,
  ...divProps
}: StackProps) => {
  const stackClasses = cn(className, divProps["onClick"] && "cursor-pointer");

  if (cards.length === 0) {
    return <CardOutline className={stackClasses} {...divProps} suit={suit} />;
  }

  let filteredCards: GameCard[] = cards;

  if (squared) {
    filteredCards = [cards[cards.length - 1]];
  } else if (reveal) {
    filteredCards = cards.slice(-reveal);
  }

  const axisClasses = {
    x: "-ml-20",
    y: "-mt-28",
  };

  return (
    <div
      className={cn(className, axis === "x" && "flex", stackClasses)}
      {...divProps}
    >
      {filteredCards.map((card, index) => (
        <Card
          card={card}
          key={index}
          className={cn(index > 0 && axisClasses[axis], "relative")}
          draggable={
            draggable === "all" ||
            (draggable === "top" && index === filteredCards.length - 1)
          }
          location={location}
          isDragging={draggingCards.includes(card.notation)}
        />
      ))}
    </div>
  );
};

export default Stack;
