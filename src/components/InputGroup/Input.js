import classes from "./Input.module.css";
const Input = props => {
  return (
    <input className={classes.Input} type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} maxLength={props.maxTitleLength} required={props.required}></input>
  );
}

export default Input;