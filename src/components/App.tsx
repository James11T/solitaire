import React from "react";
import CardOutline from "./CardOutline";
import Stack from "./Stack";
import useSolitaire from "../hooks/useSolitaire";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import Tableau from "./Tableau";
import Foundation from "./Foundation";
import {
  CardNotation,
  Location,
  FoundationLocation,
  TableauLocation,
} from "../types";

type DroppableData = FoundationLocation | TableauLocation;
type DraggableData = { location: Location };

const App = () => {
  const solitaire = useSolitaire();
  const [draggingCards, setDraggingCards] = React.useState<
    CardNotation[] | null
  >(null);

  const handleDragStart = (event: DragStartEvent) => {
    if (!event.active.data.current) return;
    const draggableData = event.active.data.current as DraggableData;
    const card = event.active.id as CardNotation;

    if (draggableData.location.type === "RESERVE") {
      setDraggingCards([card]);
    } else if (draggableData.location.type === "TABLEAU") {
      setDraggingCards(
        solitaire.getDragStack(draggableData.location.index, card)
      );
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setDraggingCards(null);
    if (!event.over) return;
    if (!event.active.data.current) return;
    if (!event.over.data.current) return;

    const droppableData = event.over.data.current as DroppableData;
    const draggableData = event.active.data.current as DraggableData;

    const card = event.active.id as CardNotation;

    if (droppableData.type === "FOUNDATION") {
      solitaire.moveToFoundation(
        droppableData.suit,
        card,
        draggableData.location
      );
    } else if (droppableData.type === "TABLEAU") {
      solitaire.moveToTableau(
        droppableData.index,
        card,
        draggableData.location
      );
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-gray-200 z-50 text-xl md:hidden opacity-80">
        Unsupported Screen Size
      </div>
      {solitaire.hasWon && (
        <div className="absolute left-1/2 top-1/2 w-96 h-40 bg-white rounded-md z-50 grid place-content-center text-3xl font-bold -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black ring-1 ring-black ring-opacity-10">
          👑 You Win! 👑
        </div>
      )}
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <DragOverlay>
          {draggingCards && (
            <Stack
              cards={draggingCards.map((card) => ({
                notation: card,
                flipped: false,
              }))}
              location={{ type: "RESERVE" }}
              className="pointer-events-none"
            />
          )}
        </DragOverlay>
        <div className="max-w-[1500px] mx-auto h-full flex flex-col p-4 gap-4">
          <div className="flex gap-4">
            <Foundation cards={solitaire.foundation["C"]} suit="C" />
            <Foundation cards={solitaire.foundation["D"]} suit="D" />
            <Foundation cards={solitaire.foundation["H"]} suit="H" />
            <Foundation cards={solitaire.foundation["S"]} suit="S" />
            <Stack
              cards={solitaire.revealedReserve}
              className="ml-auto"
              axis="x"
              reveal={3}
              draggable="top"
              location={{ type: "RESERVE" }}
            />
            {solitaire.reserve.length > 0 ? (
              <Stack
                cards={solitaire.reserve}
                squared
                onClick={solitaire.advanceReserve}
                location={{ type: "RESERVE" }}
              />
            ) : (
              <CardOutline onClick={solitaire.advanceReserve} />
            )}
          </div>
          <div className="flex gap-4 flex-grow">
            {solitaire.tableau.map((cards, index) => (
              <Tableau
                cards={cards}
                key={index}
                index={index}
                draggingCards={draggingCards ?? []}
              />
            ))}
          </div>
          <div className="flex">
            <button
              onClick={solitaire.deal}
              className="px-8 py-2 bg-white rounded-md uppercase font-bold"
            >
              Deal / Reset
            </button>
          </div>
        </div>
      </DndContext>
    </>
  );
};

export default App;
