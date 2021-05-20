function Elektryk() {









    return (
      <>
      <form className="form_e">
      <div class="form_Elektryk">
      <div className="form">
      <select className="uslugi">
    <option value="naprawa">Naprawa instalacji elektrycznej</option>
    <option value="zamontowanie">Zamontowanie gniazdek</option>
    <option selected value="awaria">Awaria pradu</option>
    <option value="m">m</option>
      </select>
      </div>
      <div>
      <label>
    Podaj swój budżet:
    <input className="Price" type="text" name="name" />
  </label>
  <input type="submit" value="Wyślij" />
      </div>
      </div>
      </form>
      </>
    );
  };

  export default Elektryk;