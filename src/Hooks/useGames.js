import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
function useGames(){
    const [Game,SetGame] =  useState([]);
    const [error,seterror] = useState('');
 
    useEffect(()=>{
     apiClient.get('/games')
     .then(res => SetGame(res.data.results))
     .catch(error => seterror(error.message))
    },[])
    return {Game,error};
}

export default useGames;