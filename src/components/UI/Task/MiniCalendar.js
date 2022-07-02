import React from "react";
import CardClasses from "../Card/Card.module.css";
import classes from "./MiniCalendar.module.css";
const MiniCalendar = (props) => {
  return (
    <div className={`${classes.MiniCalendar} ${CardClasses.Card}`}>
      <strong className={classes.MiniCalendar__day}>
        {props.date.toLocaleString("en-US", { day: "numeric" })}
      </strong>
      <strong className={classes.MiniCalendar__month}>
        {props.date.toLocaleString("en-US", { month: "long" })}
      </strong>
      <strong className={classes.MiniCalendar__year}>
        {props.date.getFullYear()}
      </strong>
    </div>
  );
};

export default MiniCalendar;
