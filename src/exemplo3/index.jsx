import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         setUsuario(dados);  //complete o código
    }
    buscarUsuario();
  }, []);  //complete o código

  return (
    <>
      <h1>Usuário</h1>
      <ul>
         {usuario.map(usuario => (
          <li key={usuario.id}> 
        <h2>{usuario.title}</h2>  
        <p>{usuario.completed}</p>
        </li>
          ))}
      </ul>
    </>
  );
}
