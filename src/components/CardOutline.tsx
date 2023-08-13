import { CardOutline as CardOutlineSVG, CardOutlines } from "../cards";
import { Suit } from "../types";
import cn from "../utils/cn";

interface CardOutlineProps extends React.ComponentPropsWithoutRef<"div"> {
  suit?: Suit;
}

const CardOutline = ({ className, suit, ...divProps }: CardOutlineProps) => {
  const svg = suit ? CardOutlines[suit] : CardOutlineSVG;

  return (
    <div
      className={cn(
        "w-[124px] h-[173px]",
        divProps["onClick"] && "cursor-pointer",
        className
      )}
      {...divProps}
    >
      <img
        src={svg}
        alt="Card Outline"
        className="pointer-events-none w-full opacity-40"
      />
    </div>
  );
};

export default CardOutline;
