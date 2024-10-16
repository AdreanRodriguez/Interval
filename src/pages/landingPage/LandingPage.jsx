import "./landingPage.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Link className="landingPage__link" to="/setTimer">
      <section className="landingPage__section">
        <img src={logo} alt="A logo" />
        <h1 className="landingPage__heading">Interval</h1>
        <p className="landingPage__text">For all your timing needs</p>
      </section>
    </Link>
  );
}

export default LandingPage;
