import { useGlobalTimer } from "../globalTimerContext/GlobalTimerContext";
import "./button.css";
// import { useNavigate } from "react-router-dom";

function Button({ href, text, className, onClick }) {
  // const navigate = useNavigate();
  const { navigateTo } = useGlobalTimer();

  function handleClick() {
    if (onClick) {
      onClick();
    }

    if (href) {
      navigateTo(href);
    }
  }

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
