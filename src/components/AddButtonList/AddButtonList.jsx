import React, { useState } from "react";
import Badge from "../Badge/Bagge";

import List from "../list/Index";
import "./AddButtonList.scss";

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setvisiblePopup] = useState(false);
  const [selectedColor, setselectedColor] = useState(null);
  console.log(selectedColor);
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
          <input className="field" type="text" placeholder="Название списка" />
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
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
