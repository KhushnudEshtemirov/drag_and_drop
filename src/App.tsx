import { DragEvent, useRef, useState } from "react";

function App() {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    setDragging(true);
    const rect = elementRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    if (dragging) {
      const newX = e.clientX - position.x;
      const newY = e.clientY - position.y;

      if (elementRef.current) {
        elementRef.current.style.left = `${newX}px`;
        elementRef.current.style.top = `${newY}px`;
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("field");

    const draggableElement = document.getElementById(data);

    if (draggableElement) {
      e.currentTarget.appendChild(draggableElement);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center flex-col gap-10 p-10">
      <h2 className="text-red-700">Drag and Drop</h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex gap-5 border p-5"
      >
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="w-32 h-32 flex items-center justify-center absolute rounded-md border cursor-move select-none"
        >
          <span>Element1</span>
        </div>
        {/* <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDragStart}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-move select-none"
        >
          <span>Element2</span>
        </div>
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDragStart}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-move select-none"
        >
          <span>Element3</span>
        </div>
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDragStart}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-move select-none"
        >
          <span>Element4</span>
        </div> */}
      </div>

      <div
        id="draggableArea"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-52 h-52 border border-da rounded-md"
      ></div>
    </div>
  );
}

export default App;
