import "./analogTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import Clock from "../../components/clock/Clock";

function AnalogTimer() {
  return (
    <section className="analogTimer__section">
      <Menu />
      <p className="analogTimer__heading">interval</p>
      <Clock />
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default AnalogTimer;
