import "./analogTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import Clock from "../../components/clock/Clock";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";

function AnalogTimer() {
  const { minutes, seconds, currentInterval } = useGlobalTimer();

  return (
    <section className="analogTimer__section">
      <Menu />
      <p className="analogTimer__heading">interval</p>
      <Clock minutes={minutes > 0 ? minutes : 0} seconds={seconds} />
      {currentInterval > 0 && (
        <p className="analogTimer__interval">Current interval: {currentInterval}</p>
      )}
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default AnalogTimer;
