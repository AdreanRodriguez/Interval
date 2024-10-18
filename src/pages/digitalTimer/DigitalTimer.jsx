import "./digitalTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DigitalTimer() {
  const { minutes, seconds, stopTimer, breakEnabled, startTimer, minutesSetByUser } =
    useGlobalTimer();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   startTimer(minutesSetByUser);
  // }, []);

  // useEffect(() => {
  //   if (breakEnabled && minutes === 0 && seconds === 0) {
  //     navigate("/breakView");
  //   }
  // }, [breakEnabled, minutes, seconds, navigate]);

  return (
    <section className="digitalTimer__section">
      <Menu />
      <p className="digitalTimer__heading">interval</p>
      <time className="digitalTimer__time">
        {minutes > 0 ? minutes : 0}:{seconds < 10 ? `0${seconds}` : seconds}
      </time>
      <Button href="/setTimer" text="abort timer" onClick={stopTimer} />
    </section>
  );
}

export default DigitalTimer;
