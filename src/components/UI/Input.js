import classes from "./Input.module.css";
const Input = props => {
  return (
    <input className={classes.Input} type={props.type} value={props.value} placeholder={props.placeholder}></input>
  );
}

export default Input;