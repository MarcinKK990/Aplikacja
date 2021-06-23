import React from "react";
import { useParams } from "react-router-dom";
import Elektryk from "./Elektryk";
import Hydraulik from "./Hydraulik";
import Slusarz from "./Slusarz";
import Niania from "./Niania";
import Ogrodnik from "./Ogrodnik";
import Choice from "./Choice";
import Choice_two from "./Choice_two";
import Choice_three from "./Choice_three";

function Wrapper() {
  let { id } = useParams();

  return (
    <div className="container">
      {id === "Elektrycy" && <Elektryk />}
      {id === "Hydraulicy" && <Hydraulik />}
      {id === "Slusarze" && <Slusarz />}
      {id === "Nianie" && <Niania />}
      {id === "Ogrodnicy" && <Ogrodnik />}
      {id === "Choice" && <Choice />}
      {id === "Choice_two" && <Choice_two />}
      {id === "Choice_three" && <Choice_three />}
    </div>
  );
}

export default Wrapper;
