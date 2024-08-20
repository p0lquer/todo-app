import React, { useState } from "react";
interface item {
  id: number;
  text: string;
  ready: boolean;
}

export const Busqueda: React.FC = () => {
  const [items, setItems] = useState<item[]>([
    { id: 1, text: "GYM", ready: false },
    { id: 2, text: "Perro", ready: false },
    { id: 3, text: "Piscina", ready: false },
  ]);
  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, ready: !item.ready };
        }
        return item;
      })
    );
  };
  //   function handleLista(event: React.ChangeEvent<HTMLInputElement>) {
  //     const lista: string[] = [];
  //     lista.push(event.target.value);
  const handleClick = () => {
    const newItem: item = { id: Date.now(), text: input, ready: false };
    setItems([...items, newItem]);
  };

  return (
    <>
      <div className="main-container">
        <h1>TODO LIST</h1>
        <br />
        <input
          type="text"
          placeholder="add"
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Add
        </button>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleToggle(item.id)}
              style={{ textDecoration: item.ready ? "line-through" : "none" }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Busqueda;
