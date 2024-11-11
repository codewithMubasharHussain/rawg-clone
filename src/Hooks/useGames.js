import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
function useGames(){
    const [Game,SetGame] =  useState([]);
    const [error,seterror] = useState('');
    const [isloading,setloading] = useState(false);
 
    useEffect(()=>{
        setloading(true);
     apiClient.get('/games')
     .then(res => {SetGame(res.data.results); setloading(false)})
     .catch(error =>{ seterror(error.message); setloading(false)})
    },[])
    return {Game,error,isloading};
}

export default useGames;