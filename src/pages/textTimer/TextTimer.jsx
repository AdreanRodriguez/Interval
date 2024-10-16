import Menu from "../../components/menu/Menu";
import "./textTimer.css";
import Button from "./../../components/button/Button";

function TextTimer() {
  return (
    <section className="textTimer__section">
      <Menu />
      <p className="textTimer__heading">interval</p>
      <time className="textTimer__text">Sju minuter och Trettiotvå sekunder kvar</time>
      <Button text="abort timer" href="/setTimer" />
    </section>
  );
}

export default TextTimer;
