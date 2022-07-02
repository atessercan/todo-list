import MiniCalendar from "./MiniCalendar";
import classes from "./TaskCard.module.css";
import CardClasses from "../Card/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskCard = (props) => {
  const trashClickHandler = () => {
    props.onDelete(props.taskItem.id);
  };

  const checkedClickHandler = () => {
    props.onChecked(props.taskItem);
  };
  return (
    <div
      className={`${classes.TaskListCard} ${CardClasses.Card} ${
        CardClasses.visibility__visible
      } ${props.taskItem.isTaskDone ? classes.Done : ""}`}
    >
      <div className={classes.row_1}>
        <div className={classes.ToolBar}>
          <FontAwesomeIcon
            icon={faTrash}
            size="1x"
            onClick={trashClickHandler}
          />
          <FontAwesomeIcon
            icon={faCheck}
            size="1x"
            onClick={checkedClickHandler}
          />
        </div>
      </div>

      <div className={classes.row_2}>
        <div className={classes.TextArea}>{props.taskItem.title}</div>
        <MiniCalendar date={props.taskItem.date} />
      </div>
    </div>
  );
};

export default TaskCard;
