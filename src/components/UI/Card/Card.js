import React, { useEffect, useState } from "react";
import AddTaskCard from "../NewTask/AddTaskCard";
import HeaderCard from "../Header/HeaderCard.js";
import TaskCard from "../Task/TaskCard";
import "./DatePicker.css";
import CardClasses from "./Card.module.css";

const Card = (props) => {
  
  const [visibility, setVisibility] = useState(false);
  const [tasks, setTask] = useState([]);
  const [freshLS, setFreshLS] = useState(0);
  let isTaskDone;

  useEffect(() => {
    let taskObjectDate = {};
    let key;
    let newTask = {};
    let newTaskArray = [];

    if (localStorage.length === 0) {
      setTask([]);
    } else if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        taskObjectDate = new Date(JSON.parse(localStorage.getItem(key)).date);
        newTask = {
          ...JSON.parse(localStorage.getItem(key)),
          date: taskObjectDate,
        };
        newTaskArray.push(newTask);
      }
      newTaskArray.pop();
      setTask([...newTaskArray, newTask]);
    }
  }, [freshLS]);

  const addNewTask = (newTask) => {
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    setFreshLS(() => Math.random());
  };

  const clickHandler = (event) => {
    setVisibility(!visibility);
  };

  const onDeleteHandler = (event) => {
    localStorage.removeItem(`${event}`);
    setFreshLS(() => Math.random());
  };
  const onCheckedHandler = (props) => {
    let taskEditing;
    let newTaskStatus = !props.isTaskDone;
    taskEditing = {
      ...JSON.parse(localStorage.getItem(props.id)),
      isTaskDone: newTaskStatus,
    };
    isTaskDone = JSON.parse(localStorage.getItem(props.id)).isTaskDone;
    localStorage.setItem(props.id, JSON.stringify(taskEditing));

    setFreshLS(() => Math.random());
  };
  return (
    <React.Fragment>
      <HeaderCard onClick={clickHandler} />
      {visibility && (
        <AddTaskCard
          className={`${CardClasses.Card}`}
          onSubmit={addNewTask}
          isVisible={visibility}
        />
      )}
      {tasks.map((item) => (
        <TaskCard
          key={item.id}
          taskItem={item}
          onDelete={onDeleteHandler}
          onChecked={onCheckedHandler}
        />
      ))}
    </React.Fragment>
  );
};

export default Card;
