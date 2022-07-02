import classes from "./InputGroup.module.css";
const InputGroup = (props) => {
  return <div className={classes.InputGroup}>{props.children}</div >;
};

export default InputGroup