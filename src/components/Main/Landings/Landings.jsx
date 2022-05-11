import React, { useState, useEffect } from "react";
import axios from 'axios';

function Landings () {
  const [ landings, setLandings ] = useState([]);

  useEffect(() => {
    async function getData() {
      try{
        console.log("tryyyyyyy");
        const resp = await axios('http://localhost:5000/api/astronomy')
        console.log(resp);
        const data = await resp.data;
        console.log(data);
        setLandings(data);
        console.log("agur tryyyyy");
      }
      catch(err){
        console.log(err);
        throw err;
      }
    }
    getData();
  }, []);
  
  return (
    <>
      <p>lotara noa!!!!</p>

      
    </>
    
  )
}

export default Landings;
