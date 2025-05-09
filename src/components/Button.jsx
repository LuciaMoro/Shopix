function Button(props) {
  console.log(props);
  const handleClick = props.handleClick;
  const children = props.children;
  console.log(handleClick);
  return (
    <button className="btn" onClick={handleClick}>
      {children ? children : "Click me"}
    </button>
  );
}

export default Button;
