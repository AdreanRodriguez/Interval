import "./setTimer.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import Menu from "../../components/menu/Menu";

function SetTimer() {
  return (
    <>
      <Menu />
      <section className="setTimer__section">
        <section className="setTimer__time-section">
          <img className="setTimer__time-section__arrow" src={leftArrow} alt="A arrow logo" />
          <time className="setTimer__time-section__nmbr-text-wrapper">
            <h3 className="setTimer__time-section__time">10</h3>
            <p className="setTimer__time-section__time-text">minutes</p>
          </time>
          <img className="setTimer__time-section__arrow" src={rightArrow} alt="A arrow logo" />
        </section>
        <Checkbox />
      </section>
    </>
  );
}

export default SetTimer;
