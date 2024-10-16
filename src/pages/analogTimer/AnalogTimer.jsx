import "./analogTimer.css";
import Menu from "../../components/menu/Menu";
import clock from "../../assets/timer-template/clock.svg";
import minute from "../../assets/timer-template/minute.svg";
import second from "../../assets/timer-template/second.svg";
import hour from "../../assets/timer-template/hour.svg";
import lightGreyDot from "../../assets/timer-template/lightGreyDot.svg";
import Button from "./../../components/button/Button";

function AnalogTimer() {
  return (
    <section className="analogTimer__section">
      <Menu />
      <p className="analogTimer__heading">interval</p>
      <time className="analogTimer__clock">
        <img className="analogTimer__img-clock" src={clock} alt="clock" />
        <img className="analogTimer__img-hour" src={hour} alt="hour" />
        <img className="analogTimer__img-min" src={minute} alt="minute" />
        <img className="analogTimer__img-sec" src={second} alt="second" />
        <img className="analogTimer__img-dot" src={lightGreyDot} alt="lightGreyDot" />
      </time>
      <Button text="abort timer" />
    </section>
  );
}

export default AnalogTimer;
