import { Link } from "react-router-dom";
import "./button.css";

function Button({ href, text }) {
  return (
    <Link to={href} className="button">
      {text}
    </Link>
  );
}

export default Button;
