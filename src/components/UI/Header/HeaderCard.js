import { useState } from "react";
import Button from "../../ButtonGroup/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import CardClasses from "../Card/Card.module.css";
import classes from "./HeaderCard.module.css";

const HeaderCard = (props) => {
  const [buttonType, setButtonType] = useState({
    buttonVariant: "Button-primary",
    placeholder: "New Task",
  });

  const clickHandler = (event) => {
    props.onClick();
    if (buttonType.buttonVariant === "Button-primary") {
      setButtonType({
        buttonVariant: "Button-secondary",
        placeholder: "Close",
      });
    } else if (buttonType.buttonVariant === "Button-secondary") {
      setButtonType({
        buttonVariant: "Button-primary",
        placeholder: "New Task",
      });
    }
  };

  return (
    <div className={` ${CardClasses.Card} ${classes.HeaderCard}`}>
      <div>
        <h1>{new Date().toLocaleDateString("en-US")}</h1>
      </div>
      <ButtonGroup>
        <Button
          type="submit"
          placeholder={buttonType.placeholder}
          variant={buttonType.buttonVariant}
          onClick={clickHandler}
        />
      </ButtonGroup>
    </div>
  );
};

export default HeaderCard;
