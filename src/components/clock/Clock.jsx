import "./clock.css";
import { motion } from "framer-motion";
import clock from "../../assets/timer-template/clock.svg";
import minute from "../../assets/timer-template/minute.svg";
import second from "../../assets/timer-template/second.svg";
import blackDot from "../../assets/timer-template/blackDot.svg";
import lightGreyDot from "../../assets/timer-template/lightGreyDot.svg";
import { useGlobalTimer } from "../globalTimerContext/GlobalTimerContext";

function Clock() {
  const { minutes, seconds, minutesSetByUser } = useGlobalTimer();
  const minuteArm = ((minutesSetByUser - minutes - seconds / 60) / minutesSetByUser) * 360;
  const secondArm = (seconds / 60) * -360;
  return (
    <time className="clock">
      <img className="clock__img" src={clock} alt="clock" />
      <img className="clock__black-dot-img" src={blackDot} alt="black dot" />
      <motion.img
        src={minute}
        alt="minute"
        className="clock__min-img"
        animate={{
          rotate: minuteArm,
        }}
        transition={{ duration: 1, ease: "linear" }}
      />
      <motion.img
        src={second}
        alt="second"
        className="clock__sec-img"
        animate={{ rotate: secondArm }}
        transition={{ duration: 0.5, ease: "linear" }}
      />
      <img className="clock__grey-dot-img" src={lightGreyDot} alt="lightGreyDot" />
    </time>
  );
}

export default Clock;
