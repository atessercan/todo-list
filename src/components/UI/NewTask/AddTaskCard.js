import React, { useState } from "react";
import Input from "../../InputGroup/Input";
import InputGroup from "../../InputGroup/InputGroup";
import Button from "../../ButtonGroup/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import CharCounter from "./CharCounter";
import DatePicker from "react-date-picker";
import CardClasses from "../Card/Card.module.css";

const AddTaskCard = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [titleLength, setTitleLength] = useState(0);
  const maxTitleLength = 55;
  const datePickerHandler = (date) => {
    setSelectedDate(date);
  };

  const textInputHandler = (event) => {
    setEnteredTitle(event.target.value);
    setTitleLength(event.target.value.length);
  };

  const submitHandler = (event) => {
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      title: enteredTitle,
      date: selectedDate,
      isTaskDone: false,
    });
    setEnteredTitle("");
    setSelectedDate("");
    setTitleLength(0);
    event.preventDefault();
  };

  return (
    <form className={CardClasses.Card} onSubmit={submitHandler}>
      <InputGroup>
        <CharCounter
          maxTitleLength={maxTitleLength}
          titleLength={titleLength}
        />
        <Input
          maxTitleLength={maxTitleLength}
          type="text"
          placeholder="Enter a task..."
          value={enteredTitle}
          onChange={textInputHandler}
          required={true}
        />
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
      </InputGroup>
      <ButtonGroup>
        <Button type="submit" placeholder="Add" variant="Button-primary" />
      </ButtonGroup>
    </form>
  );
};

export default AddTaskCard;
