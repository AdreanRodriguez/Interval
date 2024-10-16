import "./breakView.css";
import pause from "../../assets/pause.svg";
import Button from "../../components/button/Button";

function BreakView() {
  return (
    <section className="breakView__section">
      <div></div>
      <div className="breakView__alarm-wrapper">
        <img className="breakView__logo" src={pause} alt="alarm bell" />
        <p className="breakView__text">Pause & breath</p>
      </div>

      <Button text="no pause, go now!" href="/digitalTimer" className="btn-white-text" />
    </section>
  );
}

export default BreakView;
