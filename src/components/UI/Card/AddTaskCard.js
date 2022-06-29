import React, { useState, div  } from "react";
import Input from "../Input";
import Button from "../Button";
import DatePicker from "react-date-picker";
import classes from "./Card.module.css";

const AddTaskCard = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerHandler = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.Card}>
      <Input type="text" placeholder="Enter a task..." />
      <DatePicker
        format="d - MM - y"
        value={selectedDate}
        onChange={datePickerHandler}
        minDate={new Date()}
        name="date"
        required={true}
        yearAriaLabel="Year"
        yearPlaceholder="yyyy"
        monthAriaLabel="Month"
        monthPlaceholder="MM"
        dayAriaLabel="day"
        dayPlaceholder="dd"
      />
      <div className={classes.buttonGroup}>
        <Button type="submit" placeholder="Add" variant="Button-primary" />
        <Button type="button" placeholder="Cancel" variant="Button-secondary" />
      </div>
    </div>
  );
};

export default AddTaskCard;
