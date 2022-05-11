import { useState } from "react";
import axios from "axios";
//import useAxios from "../hooks/useAxios";

function getApod() {
    const [ apod, setApod ] = useState('');
    console.log("en el getapod");

    async () => {
        try{
            console.log("para hacer el fetch");
            //const resp = useAxios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA}`)
            const resp = await axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA}`)
            console.log(resp);
            const data = await resp.url;
            console.log(data);
            setApod(data);
        }
        catch(err){
            console.log(err);
            throw err;
        }
        return apod;
    }
}

export default getApod();