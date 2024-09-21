import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <div className="container">
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        {/* <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          Pendiente..
        </span> */}
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <DeleteIcon onDelete={props.onDelete} />

        {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
          X
        </span> */}
      </li>
    </div>
  );
}

export { TodoItem };
