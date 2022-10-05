import React, { useState } from "react";
import List from "./components/list/Index";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddButtonList/AddButtonList";

import dB from "./assets/db.json";

const App = () => {
  const [lists, setLists] = useState(
    dB.lists.map((item) => {
      item.color = dB.colors.filter(
        (color) => color.id === item.colorId
      )[0].name;
      return item;
    })
  );

  const onAddList = (obj) => {
    const newLists = [...lists, obj];
    setLists(newLists);
  };
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="List icon" />,
              name: "Все задачи",
              active: true,
            },
          ]}
          isRemovable={true}
        />
        <List items={lists} />
        <AddButtonList onAdd={onAddList} colors={dB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};

export default App;
