import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = (event) => {
    console.log("Le diste click");
    console.log(event.target);
    console.log(event);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
