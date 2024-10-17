import "./digitalTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";

function DigitalTimer() {
  const { minutes, seconds, stopTimer } = useGlobalTimer();

  return (
    <section className="digitalTimer__section">
      <Menu />
      <p className="digitalTimer__heading">interval</p>
      <time className="digitalTimer__time">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </time>
      <Button href="/setTimer" text="abort timer" onClick={stopTimer} />
    </section>
  );
}

export default DigitalTimer;
