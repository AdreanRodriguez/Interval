import "./button.css";
import { useGlobalTimer } from "../globalTimerContext/GlobalTimerContext";

function Button({ href, text, className, onClick }) {
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
