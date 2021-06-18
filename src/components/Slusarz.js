import React, { useEffect, useState } from "react";

function Slusarz() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(160);
  const [city, setCity] = useState();
  const [service, setService] = useState("Dorabianie kluczy");
  const [choose, setChoose] = useState("Ja");
  const [radio, setRadio] = useState("apple");

  useEffect(() => {
    fetch("http://localhost:3000/Slusarze")
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

  return (
    <>
      <div className="kkk">
        <div className="aaa">
          <form className="form_e">
            <div class="form_Elektryk">
              <div>
                {" "}
                <h3> {radio} </h3>{" "}
              </div>
              <div className="form">
                <div>
                  {data.length ? (
                    <select value={service} onChange={handleOptionChange}>
                      {data.map((el) => {
                        return <option>{el.usługa}</option>;
                      })}
                    </select>
                  ) : (
                    <p>loading..</p>
                  )}
                </div>
              </div>
              <div>
                <h3> Podaj swój budżet </h3>
                <form>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <h3> Podaj swoją lokalizację</h3>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </form>
              </div>
            </div>
          </form>
        </div>
        <div className="a">
          <form className="filter">
            {data
              .filter(
                (el) =>
                  el.price <= parseFloat(price) &&
                  el.miasto === city &&
                  el.usługa === service
              )
              .map((el) => {
                return (
                  <>
                    <label key="index">
                      {el.name}, {el.price} zł, {el.usługa} {el.miasto}
                    </label>
                    <input
                      type="radio"
                      checked={
                        radio === el.name && el.price && el.usługa && el.miasto
                      }
                      value={(el.name, el.price, el.usługa, el.miasto)}
                      onChange={(e) => {
                        setRadio(e.target.value);
                      }}
                    />
                  </>
                );
              })}
          </form>
        </div>
      </div>
    </>
  );
}

export default Slusarz;
