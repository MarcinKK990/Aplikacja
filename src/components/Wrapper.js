import React from "react";
import { useParams } from "react-router-dom";
import Elektryk from "./Elektryk";
import Hydraulik from "./Hydraulik";
import Slusarz from "./Slusarz";
import Niania from "./Niania";
import Ogrodnik from "./Ogrodnik";

function Wrapper() {
  let { id } = useParams();

  return (
    <div className="container">
      {id === "Elektrycy" && <Elektryk />}
      {id === "Hydraulicy" && <Hydraulik />}
      {id === "Slusarze" && <Slusarz />}
      {id === "Nianie" && <Niania />}
      {id === "Ogrodnicy" && <Ogrodnik />}
    </div>
  );
}

export default Wrapper;
