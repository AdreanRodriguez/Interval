import "./alarmView.css";
import bell from "../../assets/bell.svg";
import Button from "../../components/button/Button";

function AlarmView() {
  return (
    <section className="alarmView__section">
      <div></div> {/* För att få layouten att se bra ut */}
      <div className="alarmView__alarm-wrapper">
        <img className="alarmView__logo" src={bell} alt="alarm bell" />
        <p className="alarmView__text">Times up!</p>
      </div>
      <Button text="set new timer" href="/setTimer" className="btn-white-text" />
    </section>
  );
}

export default AlarmView;
