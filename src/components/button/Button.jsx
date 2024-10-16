import "./button.css";

function Button({ href, text }) {
  return (
    <button className="button" href={href}>
      {text}
    </button>
  );
}

export default Button;
