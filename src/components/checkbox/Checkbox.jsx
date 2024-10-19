import { useGlobalTimer } from "../globalTimerContext/GlobalTimerContext";
import "./checkbox.css";
// import { useState } from "react";

function Checkbox() {
  // const [isBreakChecked, setIsBreakChecked] = useState(false);
  // const [isIntervalChecked, setIsIntervalChecked] = useState(false);
  const { intervalEnabled, setIntervalEnabled, breakEnabled, setBreakEnabled, navigateTo } =
    useGlobalTimer();

  function handleIntervalIfChecked(e) {
    const checked = e.target.checked;
    setIntervalEnabled(checked);
    // setIsIntervalChecked(checked);
  }

  function handleFiveMinutesBreakInterval(e) {
    const checked = e.target.checked;
    setBreakEnabled(checked);
    navigateTo("/breakView");
    // setIsBreakChecked(checked);
  }

  return (
    <section className="checkbox__container">
      <div className="checkbox__label-wrapper">
        <input
          id="checkbox1"
          type="checkbox"
          className="checkbox"
          checked={intervalEnabled}
          onChange={handleIntervalIfChecked}
        />
        <label className="label">intervals (VG)</label>
      </div>
      <div className="checkbox__label-wrapper">
        <input
          id="checkbox2"
          type="checkbox"
          className="checkbox"
          checked={breakEnabled}
          onChange={handleFiveMinutesBreakInterval}
        />
        <label className="label">5 min break / interval (VG)</label>
      </div>
    </section>
  );
}

export default Checkbox;
