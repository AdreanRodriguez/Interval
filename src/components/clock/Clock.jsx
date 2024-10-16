import "./clock.css";
import { motion } from "framer-motion";
import clock from "../../assets/timer-template/clock.svg";
import minute from "../../assets/timer-template/minute.svg";
import second from "../../assets/timer-template/second.svg";
import blackDot from "../../assets/timer-template/blackDot.svg";
import lightGreyDot from "../../assets/timer-template/lightGreyDot.svg";

function Clock({ minutes, seconds }) {
  return (
    <time className="clock">
      <img className="clock__img" src={clock} alt="clock" />
      <img className="clock__black-dot-img" src={blackDot} alt="black dot" />
      <motion.img
        className="clock__min-img"
        src={minute}
        alt="minute"
        animate={{ rotate: minutes * 6 + seconds / -10 }}
        transition={{ duration: 0.5, ease: "linear" }}
      />
      <motion.img
        className="clock__sec-img"
        src={second}
        alt="second"
        animate={{ rotate: seconds * -6 }}
        transition={{ duration: 0.5, ease: "linear" }}
      />
      <img className="clock__grey-dot-img" src={lightGreyDot} alt="lightGreyDot" />
    </time>
  );
}

export default Clock;
