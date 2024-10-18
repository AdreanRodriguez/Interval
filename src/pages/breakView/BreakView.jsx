import "./breakView.css";
import pause from "../../assets/pause.svg";
import Button from "../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function BreakView() {
  const navigate = useNavigate();
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(3);
  const { startTimer, minutesSetByUser } = useGlobalTimer();

  useEffect(() => {
    let breakTimer;
    if (breakMinutes > 0 || breakSeconds > 0) {
      breakTimer = setInterval(() => {
        if (breakSeconds > 0) {
          setBreakSeconds((prev) => prev - 1);
        } else if (breakMinutes > 0) {
          setBreakMinutes((prev) => prev - 1);
          setBreakSeconds(59);
        }
      }, 1000);
    } else {
      clearInterval(breakTimer);
      // När break-timern når 0, starta intervall-timern igen och navigera tillbaka
      startTimer(minutesSetByUser);
      navigate("/digitalTimer");
    }

    return () => clearInterval(breakTimer);
  }, [breakMinutes, breakSeconds, navigate, startTimer, minutesSetByUser]);

  return (
    <section className="breakView__section">
      <div></div>
      <div className="breakView__alarm-wrapper">
        <img className="breakView__logo" src={pause} alt="alarm bell" />
        <p className="breakView__text">Pause & breath</p>
        <time className="breakView__time-left">
          {breakMinutes}:{breakSeconds < 10 ? `0${breakSeconds}` : breakSeconds}
        </time>
      </div>

      <Button text="no pause, go now!" href="/analogTimer" className="btn-white-text" />
    </section>
  );
}

export default BreakView;
