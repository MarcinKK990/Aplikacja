import React, { useEffect, useState } from "react";
import Slusarz from "./Slusarz";
import App from "../App";
import { Link } from "react-router-dom";

function Choice() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [valname, setValname] = useState("");
  const [valemail, setValemail] = useState("");
  const [valnumber, setValnumber] = useState("");

  const validationName = (event) => {
    if (name.lenght >= 1) {
      setValname("Podane imię jest nieprawidłowe !");
    } else {
      setValname("");
    }
  };

  const validationMail = (event) => {
    if (email.includes("@")) {
      setValemail("");
    } else {
      setValemail("Podany email jest nieprawidłowy !");
    }
  };

  const validationNumber = (event) => {
    if (number.length === 9) {
      setValnumber("");
    } else {
      setValnumber("Podany numer jest nieprawidłowy");
    }
  };

  return (
    <>
      <div className="choice_text">
        <h1>Dziękujemy za wybranie naszych usług !</h1>
        <h2> Uzupełnij formularz kontaktowy</h2>
      </div>
      <div className="form_input">
        <label>
          <h3> Podaj swoje imię </h3>
          <input
            className="form_input"
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {valname}
        </label>
      </div>
      <div className="form_input">
        <h3> Podaj swój adres email </h3>
        <input
          className="form_input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {valemail}
      </div>
      <div className="form_input">
        <h3> Podaj swój telefon kontaktowy </h3>
        <input
          className="form_input"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        {valnumber}
      </div>
      <Link to="/Choice_three">
        <button
          className="btn"
          onClick={validationName}
          onClick={validationMail}
          onClick={validationNumber}
        >
          Zatwierdź
        </button>
      </Link>
    </>
  );
}

export default Choice;
