import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/list/Index";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddButtonList/AddButtonList";
import Tasks from "./components/tasks/Tasks";

// import dB from "./assets/db.json";

const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/lists?expand=color").then(({ data }) => {
      setLists(data);
    });
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

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
            },
          ]}
          isRemovable={true}
        />
        {lists ? (
          <List
            items={lists}
            onRemove={(list) => {
              console.log(list);
            }}
            isRemovable
          />
        ) : (
          "Loading..."
        )}
        <AddButtonList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
};

export default App;
