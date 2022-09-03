
import { useEffect, useState } from "react";


import {API_URL} from './config';


export default () => {
  const [resposta, setResposta] = useState('...');

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  
    return fetch(API_URL + "/usuari/open", requestOptions)
      .then(response => response.json())
      .then(response => {
        if (response.ok){
          setResposta(response.data);
        }else{
          setResposta('ERROR')
        }
      })
      .catch(error => console.log(error));
    
  }, []);

 

  return (
    <main style={{ padding: "1rem 0" }}>
    <h2>Open...</h2>
    <h3>{resposta}</h3>
  </main>
  );
};
