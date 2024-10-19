import { useGlobalTimer } from "../globalTimerContext/GlobalTimerContext";
import "./checkbox.css";

function Checkbox() {
  const { intervalEnabled, breakEnabled, setBreakEnabled, setIntervalEnabled } = useGlobalTimer();

  function handleIntervalIfChecked(e) {
    const checked = e.target.checked;
    setIntervalEnabled(checked);
  }

  function handleFiveMinutesBreakInterval(e) {
    const checked = e.target.checked;
    setBreakEnabled(checked);
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
