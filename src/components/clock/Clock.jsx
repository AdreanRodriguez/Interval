import "./clock.css";
import minute from "../../assets/timer-template/minute.svg";
import clock from "../../assets/timer-template/clock.svg";
import second from "../../assets/timer-template/second.svg";
import lightGreyDot from "../../assets/timer-template/lightGreyDot.svg";
import blackDot from "../../assets/timer-template/blackDot.svg";

function Clock() {
  return (
    <time className="clock">
      <img className="clock__img" src={clock} alt="clock" />
      <img className="clock__black-dot-img" src={blackDot} alt="black dot" />
      <img className="clock__min-img" src={minute} alt="minute" />
      <img className="clock__sec-img" src={second} alt="second" />
      <img className="clock__grey-dot-img" src={lightGreyDot} alt="lightGreyDot" />
    </time>
  );
}

export default Clock;
