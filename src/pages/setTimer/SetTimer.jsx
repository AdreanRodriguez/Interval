import "./setTimer.css";
import { useState } from "react";
import Menu from "../../components/menu/Menu";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext.jsx";

function SetTimer() {
  const [alertMessaage, setAlertMessage] = useState("");
  const { startTimer, minutes, setMinutes, navigateTo } = useGlobalTimer();

  function moreMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 1);
  }

  function lessMinutes() {
    setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
  }

  function handleStartTimer() {
    if (minutes > 0) {
      startTimer(minutes);
      navigateTo("/digitalTimer");
    } else {
      const redButton = document.querySelector(".setTimer__btn");
      redButton.classList.add("alert-btn");
      setAlertMessage("Please select minutes");
    }
  }

  return (
    <>
      <Menu />
      <section className="setTimer__section">
        <div className="setTimer__margin-bottom"></div>
        <section className="setTimer__time-section">
          <img
            src={leftArrow}
            alt="A arrow logo"
            onClick={lessMinutes}
            className="setTimer__time-section__arrow"
          />
          <time className="setTimer__time-section__nmbr-text-wrapper">
            <h3 className="setTimer__time-section__time">{minutes}</h3>
            <p className="setTimer__time-section__time-text">minutes</p>
          </time>
          <img
            src={rightArrow}
            alt="A arrow logo"
            onClick={moreMinutes}
            className="setTimer__time-section__arrow"
          />
        </section>
        <Checkbox />
        {alertMessaage && <p className="setTimer__alert-message"> {alertMessaage} </p>}
        <button onClick={handleStartTimer} className="setTimer__btn">
          start timer
        </button>
      </section>
    </>
  );
}

export default SetTimer;
