import "./digitalTimer.css";
import Menu from "../../components/menu/Menu";
import Button from "./../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";
import { motion } from "framer-motion";

function DigitalTimer() {
  const { minutes, seconds, stopTimer, currentInterval } = useGlobalTimer();

  const secondsIsLessThenTen = minutes === 0 && seconds < 10;
  const bonunceFast = secondsIsLessThenTen && 0.5;

  return (
    <section className="digitalTimer__section">
      <Menu />
      <p className="digitalTimer__heading">interval</p>
      {currentInterval > 0 && (
        <p className="digitalTimer__interval">Current interval: {currentInterval}</p>
      )}
      <time className="digitalTimer__time">
        <p>{minutes > 0 ? minutes : 0}</p>
        <p>:</p>
        <motion.p
          animate={{ scale: secondsIsLessThenTen ? [1, 1.1] : 1 }}
          transition={{ duration: bonunceFast, repeat: Infinity }}
        >
          {seconds < 10 ? `0${seconds}` : seconds}
        </motion.p>
      </time>

      <Button href="/setTimer" text="abort timer" onClick={stopTimer} />
    </section>
  );
}

export default DigitalTimer;
