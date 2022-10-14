import React from "react";
import "./styles.css";

import CardVideo from "./componentes/CardVideo";

export default function App() {

  return (
    <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo={"Receita de Bolo"} imagem={"https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Salada"} imagem={"https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Macarronada"} imagem={"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Brigadeiro"} imagem={"https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Risoto"} imagem={"https://images.pexels.com/photos/6659610/pexels-photo-6659610.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Biscoito"} imagem={"https://images.pexels.com/photos/40516/easter-easter-cakes-cookie-cutter-ausstecherle-40516.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Batata Frita"} imagem={"https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
            <CardVideo titulo={"Receita de Feijoada"} imagem={"https://images.pexels.com/photos/5695872/pexels-photo-5695872.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    
  );
}
