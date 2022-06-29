import Button from "../Button";
import classes from "./Card.module.css";
const HeaderCard = (props) => {
  return (
    <div className={classes.Card}>
      <h1>{new Date().toLocaleDateString()}</h1>
      <div className={classes.buttonGroup}>
        <Button type="submit" placeholder="New Task" variant="Button-primary" />
        
      </div>
    </div>
  );
};

export default HeaderCard;
