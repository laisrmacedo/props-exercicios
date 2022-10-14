import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props){

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.imagem} alt="" />
      <h4>{props.titulo}</h4>
      <InfosUsuario nome={"O Mestre das Receitas"} foto={"https://ciauniformesprofissionais.com.br/wp-content/uploads/2021/01/roupa-de-cozinheiro.png"}/>
    </div>
  )
}