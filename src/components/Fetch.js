import React, {useEffect, useState} from "react";

const Fetch = () => {
    const [occupation, setOccupation] = useState(null);
  
    useEffect(() => {
      fetch("localhost:3001/${id}")
      .then(response => response.json())
      .then(data => {setOccupation(data)})
  
    occupation.filter().map(el => {
        return <p>{el}</p>
      })
  
  
    });

    export default Fetch;