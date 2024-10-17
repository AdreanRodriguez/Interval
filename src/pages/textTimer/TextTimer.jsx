import Menu from "../../components/menu/Menu";
import "./textTimer.css";
import Button from "./../../components/button/Button";
import { useGlobalTimer } from "../../components/globalTimerContext/GlobalTimerContext";

function TextTimer() {
  const { minutes, seconds } = useGlobalTimer();

  function convertNumberToText(nmbr) {
    const numbers = [
      "noll",
      "ett",
      "två",
      "tre",
      "fyra",
      "fem",
      "sex",
      "sju",
      "åtta",
      "nio",
      "tio",
      "elva",
      "tolv",
      "tretton",
      "fjorton",
      "femton",
      "sexton",
      "sjutton",
      "arton",
      "nitton",
    ];
    const tens = ["", "", "tjugo", "trettio", "fyrtio", "femtio", "sextio"];

    if (nmbr < 20) {
      return numbers[nmbr];
    } else if (nmbr < 60) {
      const ten = Math.floor(nmbr / 10);
      const unit = nmbr % 10;
      return `${tens[ten]}${unit ? ` ${numbers[unit]}` : ""}`;
    } else {
      return nmbr;
    }
  }

  return (
    <section className="textTimer__section">
      <Menu />
      <p className="textTimer__heading">interval</p>
      <time className="textTimer__text">
        {convertNumberToText(minutes)} {minutes === 1 ? "minut" : "minuter"} och{" "}
        {convertNumberToText(seconds)} {seconds === 1 ? "sekund" : "sekunder"} kvar
      </time>
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default TextTimer;
