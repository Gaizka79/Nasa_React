import React, { useState, useEffect } from "react";
import axios from "axios";
//import getApod from "../../../utils/getApod";

function Home () {
  const [ apod, setApod ] = useState();
  const [ explanation, setExplanation ] = useState();
  const [ titulo, setTitulo ] = useState();
  //setApod(getApod);
  useEffect(() => {
    async function getData() {
      try{
          const resp = await axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA}`)
          console.log(resp);
          const data = await resp.data;
          console.log(data);
          setApod(data.hdurl);
          setExplanation(data.explanation);
          setTitulo(data.title);
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
      <h2>Bienvenid@s a nuestra web sobre la  NASA</h2>
      <div className="home">
        <h4>{titulo}</h4>
        <img src={apod} alt="Imagen APOD" />
        <p className="explanation">{explanation}</p>

      </div>
      
    </>
  )
}

export default Home;
//${process.env.REACT_APP_API_NYT}