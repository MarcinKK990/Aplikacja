function Slusarz() {
  return (
    <>
      <h1>Slusarz</h1>
      <form>
        <div class="form_Elektryk">
          <select>
            <option value="grejpfrutowy">Grekutowy</option>
            <option value="limonkowy">Lkwy</option>
            <option selected value="kokosowy">
              Kkosowy
            </option>
            <option value="mango">Makngo</option>
          </select>
          <label>
            Podaj swój budżet:
            <input type="text" name="kwota" />
          </label>
          <input type="submit" value="Wyślij" />
        </div>
      </form>
    </>
  );
}

export default Slusarz;
