import "./setTimer.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import Menu from "../../components/menu/Menu";
import { useState } from "react";

function SetTimer() {
  const [minutes, setMinutes] = useState(0);

  function moreMinutes() {
    setMinutes(minutes + 1);
  }
  function lessMinutes() {
    {
      minutes > 0 && setMinutes(minutes - 1);
    }
  }

  return (
    <>
      <Menu />
      <section className="setTimer__section">
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
      </section>
    </>
  );
}

export default SetTimer;
