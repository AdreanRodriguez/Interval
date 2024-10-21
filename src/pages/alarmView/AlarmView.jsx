import "./alarmView.css";
import bell from "../../assets/bell.svg";
import Button from "../../components/button/Button";
import { motion } from "framer-motion";

function AlarmView() {
  return (
    <section className="alarmView__section">
      <div></div> {/* För att få layouten att se bra ut */}
      <div className="alarmView__alarm-wrapper">
        <motion.img
          className="alarmView__logo"
          src={bell}
          alt="alarm bell"
          animate={{
            rotate: [-10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, 0],
          }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.p
          className="alarmView__text"
          animate={{
            rotate: [-10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, 0],
          }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          Times up!
        </motion.p>
      </div>
      <Button text="set new timer" href="/setTimer" className="btn-white-text" />
    </section>
  );
}

export default AlarmView;
