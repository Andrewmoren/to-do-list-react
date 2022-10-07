import React, { useState, useEffect } from "react";
import Badge from "../Badge/Bagge";
import axios from "axios";

import closeSvg from "../../assets/img/close.svg";

import List from "../list/Index";
import "./AddButtonList.scss";

const AddButtonList = ({ colors, onAdd }) => {
  const [visiblePopup, setvisiblePopup] = useState(false);
  const [selectedColor, setselectedColor] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (Array.isArray(colors)) {
      setselectedColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setvisiblePopup(false);
    setInputValue("");
    setselectedColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка!");
      return;
    }
    setIsLoading(true);

    axios
      .post("http://localhost:3001/lists", {
        name: inputValue,
        colorId: selectedColor,
      })
      .then(({ data }) => {
        const color = colors.filter((c) => c.id === selectedColor)[0].name;
        const listObj = { ...data, color: { name: color } };
        onAdd(listObj);
        onClose();
      })
      .finaly(() => {
        setIsLoading(false);
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
            onClick={onClose}
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
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">
            {isLoading ? "Add..." : "Add?"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
