import React, { useEffect, useState } from "react";

function Elektryk() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/Elektryk")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <form className="form_e">
        <div class="form_Elektryk">
          <div> Wypełnij folmularz </div>
          <div className="form">
            <div>
              {data.length ? (
                <select>
                  {data.map((el) => {
                    return <option>{el.name}</option>;
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </form>
          </div>
        </div>
      </form>
    </>
  );
}

export default Elektryk;
