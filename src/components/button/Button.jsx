import "./button.css";
import { useNavigate } from "react-router-dom";

function Button({ href, text, className, onClick }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    }

    if (href) {
      navigate(href);
    }
  }

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
