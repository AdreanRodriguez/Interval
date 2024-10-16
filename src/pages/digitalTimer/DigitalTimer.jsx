import "./digitalTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";

function DigitalTimer() {
  return (
    <section className="digitalTimer__section">
      <Menu />
      <p className="digitalTimer__heading">interval</p>
      <time className="digitalTimer__time">7:32</time>
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default DigitalTimer;
