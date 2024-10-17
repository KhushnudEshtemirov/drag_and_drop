import { DragEvent } from "react";

function App() {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("field", e.currentTarget.id);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = "grabbing";
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
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-grab select-none"
        >
          <span>Element1</span>
        </div>
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDrag}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-grab select-none"
        >
          <span>Element2</span>
        </div>
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDrag}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-grab select-none"
        >
          <span>Element3</span>
        </div>
        <div
          id="draggableElement"
          draggable={true}
          onDragStart={handleDrag}
          className="w-32 h-32 flex items-center justify-center rounded-md border cursor-grab select-none"
        >
          <span>Element4</span>
        </div>
      </div>

      <div
        id="draggableArea"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="min-h-52 flex gap-5 p-5 border border-da rounded-md"
      ></div>
    </div>
  );
}

export default App;
