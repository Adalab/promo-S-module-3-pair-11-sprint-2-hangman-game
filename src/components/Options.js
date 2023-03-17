function Options(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChangeInput = (ev) => {
    props.handleNewWord(ev.target.value);
  };
  return (
    <section className="options">
      <p>"Estas son las opciones del juego".</p>
      <form onSubmit={handleSubmit}>
        <label className="title" htmlFor="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autofocus
          autocomplete="off"
          className="form__input"
          maxlength="15"
          type="text"
          id="word"
          name="word"
          onChange={handleChangeInput}
          value={props.word}
        />
      </form>
    </section>
  );
}

export default Options;
