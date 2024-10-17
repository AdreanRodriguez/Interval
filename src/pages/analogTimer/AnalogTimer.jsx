import "./analogTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import Clock from "../../components/clock/Clock";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";

function AnalogTimer() {
  const { minutes, seconds } = useGlobalTimer();

  return (
    <section className="analogTimer__section">
      <Menu />
      <p className="analogTimer__heading">interval</p>
      <Clock minutes={minutes} seconds={seconds} />
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default AnalogTimer;
