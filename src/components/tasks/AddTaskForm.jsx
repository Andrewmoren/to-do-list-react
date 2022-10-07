import React from "react";

import addSvg from "../../assets/img/add.svg";

const AddTaskForm = () => {
  return (
    <div className="tasks__form">
      <div className="tasks__form-new">
        <img src={addSvg} alt="Add icon" />
        <span>Новая задача</span>
      </div>
      <div className="tasks__form-block">
        <button className="button">Добавить задачу</button>
      </div>
    </div>
  );
};

export default AddTaskForm;
