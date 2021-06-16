import React, { useEffect, useState } from "react";

function Hydraulik() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(160);
  const [city, setCity] = useState();
  const [service, setService] = useState("Montaż czegoś innego");

  useEffect(() => {
    fetch("http://localhost:3000/Hydraulicy")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleOptionChange = (e) => {
    setService(e.target.value);
  };

  return (
    <>
      <form className="form_e">
        <div class="form_Elektryk">
          <div> Wypełnij folmularz </div>
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
            <form>
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
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
      <div className="a">
        <ul className="filter">
          {data
            .filter(
              (el) =>
                (el.price <= price) &
                (el.miasto === city) &
                (el.usługa === service)
            )
            .map((el) => {
              return (
                <li>
                  {el.name}, {el.price} zł, {el.usługa} {el.miasto}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Hydraulik;
