import React from "react";
import "../styles.css";

export default function InfosUsuario(props){
  const nomeUsuario = "Criador de Conteúdo" //nome do autor
  return(
    <div className="info-usuarios">
      <img src={props.foto} alt="" />
      <p>{props.nome}</p>
    </div>
  )
}