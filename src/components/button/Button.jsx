import { Link } from "react-router-dom";
import "./button.css";

function Button({ href, text, className }) {
  return (
    <Link to={href} className={`button ${className}`}>
      {text}
    </Link>
  );
}

export default Button;
