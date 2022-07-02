import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.Button} ${classes[props.variant]}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.placeholder}
    </button>
  );
};

export default Button;
