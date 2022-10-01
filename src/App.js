import React from "react";
import List from "./components/List";
import listSvg from "./assets/img/list.svg";
const App = () => {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            { icon: <img src={listSvg} alt="List icon" />, name: "Все задачи" },
          ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};

export default App;
