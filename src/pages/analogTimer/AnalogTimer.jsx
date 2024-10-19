import "./analogTimer.css";
import Menu from "../../components/menu/Menu";
import Clock from "../../components/clock/Clock";
import Button from "./../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";

function AnalogTimer() {
  const { currentInterval, stopTimer } = useGlobalTimer();

  return (
    <section className="analogTimer__section">
      <Menu />
      <p className="analogTimer__heading">interval</p>
      {currentInterval > 0 && (
        <p className="analogTimer__interval">Current interval: {currentInterval}</p>
      )}
      <Clock />

      <Button text="abort timer" href="/setTimer" onClick={stopTimer} />
    </section>
  );
}

export default AnalogTimer;
