import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
function useGenre(){
    const [Genres,SetGenre] =  useState([]);
    const [error,seterror] = useState('');
    const [isloading,setloading] = useState(false);
 
    useEffect(()=>{
        setloading(true);
     apiClient.get('/genres')
     .then(res => {SetGenre(res.data.results); setloading(false)})
     .catch(error =>{ seterror(error.message); setloading(false)})
    },[])
    return {Genres,error,isloading};
}
export default useGenre;