function Button({ handleClick, children }) {
  return (
    <button className="btn" onClick={handleClick}>
      {children ?? "Click me"}
    </button>
  );
}

export default Button;
