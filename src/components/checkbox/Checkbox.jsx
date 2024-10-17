import "./checkbox.css";

function Checkbox() {
  return (
    <section className="checkbox__container">
      <div className="checkbox__label-wrapper">
        <input className="checkbox" type="checkbox" id="checkbox1" />
        <label className="label">intervals (VG)</label>
      </div>
      <div className="checkbox__label-wrapper">
        <input className="checkbox" type="checkbox" id="checkbox2" />
        <label className="label">5 min break / interval (VG)</label>
      </div>
    </section>
  );
}

export default Checkbox;
