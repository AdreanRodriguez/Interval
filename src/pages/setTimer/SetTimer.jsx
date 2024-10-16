import "./setTimer.css";
import logoBlack from "../../assets/logo-black.svg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import Checkbox from "../../components/checkbox/Checkbox";

// Gör någonting åt alla section, det är för många

function SetTimer() {
  return (
    <>
      <img className="setTimer__logo" src={logoBlack} alt="A logo" />
      <section className="setTimer__section">
        <section className="setTimer__time-section">
          <img className="setTimer__time-section__arrow" src={leftArrow} alt="A arrow logo" />

          {/* // Ta sedan sectionen här och wrappa så att du får ner hela wrappern */}
          <section className="setTimer__time-section__nmbr-text-wrapper">
            <h3 className="setTimer__time-section__time">10</h3>
            <p className="setTimer__time-section__time-text">minutes</p>
          </section>
          <img className="setTimer__time-section__arrow" src={rightArrow} alt="A arrow logo" />
        </section>
        <section className="setTimer__checkbox-wrapper">
          <Checkbox id="checkbox" text="intervals (VG)" />
          <Checkbox id="checkbox" text="5 min break / interval (VG)" />
          <button className="setTimer__btn">Start timer</button>
        </section>
      </section>
    </>
  );
}

export default SetTimer;
