import React, { useEffect, useState } from "react";
import Choice from "./Choice";
import { Link } from "react-router-dom";

function Ogrodnik() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(160);
  const [city, setCity] = useState();
  const [service, setService] = useState("Dorabianie kluczy");
  const [choose, setChoose] = useState("Ja");
  const [radio, setRadio] = useState();
  const [clicked, setClicked] = useState(false);
  //const [buttons, setButtons] = useState(false);
  // const [isRadio, setIsRadio] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/Ogrodnicy")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleOptionChange = (e) => {
    setService(e.target.value);
  };

  const handleOnChange = (e) => {
    setChoose(e.target.value);
  };

  const handleScore = (e) => {
    setClicked(<Choice state={radio} />);
  };

  return (
    <>
      <div className="form">
        <div className="form_left">
          <div className="form_select">
            {data.length ? (
              <select
                className="form_select"
                value={service}
                onChange={handleOptionChange}
              >
                {data.map((el) => {
                  return <option className="form_select">{el.usługa}</option>;
                })}
              </select>
            ) : (
              <p>loading..</p>
            )}
          </div>
          <div className="form_input">
            <h3> Podaj swój budżet </h3>
            <input
              className="form_input_single"
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <h3> Podaj swoją lokalizację</h3>
            <input
              className="form_input_single"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form_radio">
          {data
            .filter(
              (el) =>
                el.price <= parseFloat(price) &&
                el.miasto === city &&
                el.usługa === service
            )
            .map((el) => {
              console.log(el);
              return (
                <>
                  <label className="radio">
                    {el.name}, {el.price} zł, {el.usługa} {el.miasto}
                  </label>
                  <input
                    className="radio_style"
                    type="radio"
                    checked={radio === ` ${el.name} ${el.price}`}
                    value={`Twój wybór to ${el.name}, który za godzinną usługę weźmie ${el.price} zł, możesz skontaktować się z danym usługodawcą pod numerem: ${el.numer_kontaktowy}, lub zostawić kontakt do siebie i poczekać na odpowiedź.`}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
                  <div className="form_button">
                    <Link to="/Choice">
                      <button className="btn" onClick={handleScore}>
                        Skontaktuj się ze mną
                      </button>
                      {clicked}
                    </Link>
                  </div>
                  <div className="form_button">
                    <Link to="/Choice_two">
                      <button className="btn" onClick={handleScore}>
                        Sam skontaktuję się z usługodawcą
                      </button>
                      {clicked}
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="form_choice">{radio}</div>
    </>
  );
}

export default Ogrodnik;
