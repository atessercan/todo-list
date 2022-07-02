import classes from "./CharCounter.module.css";
const CharCounter = (props) => {
  return (
    <span className={classes.charCounter}>
      {props.maxTitleLength - props.titleLength + " chars left"}
    </span>
  );
};

export default CharCounter;
