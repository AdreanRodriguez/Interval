import "./landingPage.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <Link className="landingPage__link" to="/setTimer">
      <motion.img
        src={logo}
        alt="A logo"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2.5,
          ease: "easeIn",
        }}
      />
      <motion.h1
        className="landingPage__heading"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
      >
        Interval
      </motion.h1>
      <motion.p
        className="landingPage__text"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3.5,
          ease: "easeIn",
        }}
      >
        For all your timing needs
      </motion.p>
    </Link>
  );
}

export default LandingPage;
