import "./setTimer.css";
import logoBlack from "../../assets/logo-black.svg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";

function SetTimer() {
  return (
    <>
      <img className="setTimer__logo" src={logoBlack} alt="A logo" />
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
