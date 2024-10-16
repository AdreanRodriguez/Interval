import "./checkbox.css";

function Checkbox({ id, text }) {
  return (
    <section className="checkbox__wrapper">
      <input className="checkbox" type="checkbox" id={id} />
      <label className="label" htmlFor={id}>
        {text}
      </label>
    </section>
  );
}

export default Checkbox;
