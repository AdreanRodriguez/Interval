import "./setTimer.css";
import { useEffect, useState } from "react";
import Menu from "../../components/menu/Menu";
import { useNavigate } from "react-router-dom";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext.jsx";

function SetTimer() {
  const navigate = useNavigate();
  const { startTimer } = useGlobalTimer();
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {}, [minutes]);

  function moreMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 1);
  }

  function lessMinutes() {
    setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
  }

  function handleStartTimer() {
    startTimer(minutes);
    navigate("/analogTimer");
  }

  return (
    <>
      <Menu />
      <section className="setTimer__section">
        <div className="setTimer__margin-bottom"></div>
        <section className="setTimer__time-section">
          <img
            className="setTimer__time-section__arrow"
            onClick={lessMinutes}
            src={leftArrow}
            alt="A arrow logo"
          />
          <time className="setTimer__time-section__nmbr-text-wrapper">
            <h3 className="setTimer__time-section__time">{minutes}</h3>
            <p className="setTimer__time-section__time-text">minutes</p>
          </time>
          <img
            className="setTimer__time-section__arrow"
            onClick={moreMinutes}
            src={rightArrow}
            alt="A arrow logo"
          />
        </section>
        <Checkbox />
        <button onClick={handleStartTimer} className="setTimer__btn">
          start timer
        </button>
      </section>
    </>
  );
}

export default SetTimer;
