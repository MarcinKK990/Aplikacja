function Ogrodnik() {

    return (
      <>
      <form>
      <div class="form_Elektryk">
      <select>
    <option value="w">w</option>
    <option value="l">Ly</option>
    <option selected value="kky">kky</option>
    <option value="ma">Ma</option>
      </select>
      <label>
    Imię:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Wyślij" />
      </div>
      </form>
      </>
    );
  };

  export default Ogrodnik;