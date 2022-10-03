import React from "react";
import List from "./components/list/Index";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddButtonList/AddButtonList";
const App = () => {
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
        <List
          items={[
            { color: "green", name: "Покупки" },
            { color: "blue", name: "Фронтенд" },
            { color: "pink", name: "Фильмы и книги" },
          ]}
        />
        <AddButtonList />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};

export default App;
