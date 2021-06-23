import React, { useEffect, useState } from "react";
import Slusarz from "./Slusarz";
import App from "../App";

function Choice_two({ value }) {
  return (
    <div className="choice_text">
      <h1>Dziękujemy za wybranie naszych usług ! </h1>
      <h2>
        {" "}
        Masz już kontakt do wybranego usługodawcy, skontaktuj się z nim jak
        najszybciej ! :)
      </h2>
    </div>
  );
}

export default Choice_two;
