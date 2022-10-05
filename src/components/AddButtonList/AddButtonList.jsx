import React, { useState } from "react";
import Badge from "../Badge/Bagge";

import closeSvg from "../../assets/img/close.svg";

import List from "../list/Index";
import "./AddButtonList.scss";

const AddButtonList = ({ colors, onAdd }) => {
  const [visiblePopup, setvisiblePopup] = useState(false);
  const [selectedColor, setselectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка!");
      return;
    }
    const color = colors.filter((c) => c.id === selectedColor)[0].name;
    onAdd({
      id: Math.random(),
      name: inputValue,
      color: color,
    });
  };

  return (
    <div className="add-list">
      <List
        onClick={() => setvisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить список",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setvisiblePopup(false)}
            src={closeSvg}
            alt="close button"
            className="add-list__popup-close-btn"
          ></img>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          />
          <div className="add-list__popup-colors">
            {colors.map((color, index) => (
              <Badge
                onClick={() => setselectedColor(color.id)}
                key={index.id}
                color={color.name}
                className={selectedColor == color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
