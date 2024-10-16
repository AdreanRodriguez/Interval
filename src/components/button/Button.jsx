import "./button.css";
import { Link } from "react-router-dom";

function Button({ href, text, className }) {
  return (
    <Link to={href} className={`button ${className}`}>
      {text}
    </Link>
  );
}

export default Button;
