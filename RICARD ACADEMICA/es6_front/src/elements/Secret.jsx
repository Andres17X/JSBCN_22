
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext.js";

import {checkToken} from '../tools/Api';

export default () => {
  const [resposta, setResposta] = useState('...');

  const User = useContext(UserContext);
 

  
  useEffect(() => {

    checkToken(User.token)
    .then(x => setResposta(JSON.stringify(x)))
    .catch(err => console.log(err))
    
  }, []);

 

  return (
    <main style={{ padding: "1rem 0" }}>
    <h2>Secret</h2>
    <p>{resposta}</p>
  </main>
  );
};
