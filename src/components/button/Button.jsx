import "./Button.css";

function Button({ handleClick, children }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {children ?? "Click me"}
    </button>
  );
}

export default Button;
