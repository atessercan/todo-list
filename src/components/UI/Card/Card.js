import React from "react";
import AddTaskCard from "./AddTaskCard";
import "./DatePicker.css";
import HeaderCard from "./HeaderCard.js";
import TaskListCard from "./TaskListcard";
const Card = (props) => {
  return (
    <React.Fragment>
      {props.cardType === "header" && <HeaderCard />}
      {props.cardType === "addTask" && <AddTaskCard />}
      {props.cardType === "taskList" && <TaskListCard />}
    </React.Fragment>
  );
};

export default Card;
