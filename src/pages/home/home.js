//imports
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {HashLink} from "react-router-hash-link";

import Modal from "../../Components/Modal";
import Info from "../../Components/Info";
import Grid from "../../Components/gridlist/grid";
import './home.css';
// assets
import primeira from "../../Assets/1.png";
import segunda from "../../Assets/2.png";
import terceira from "../../Assets/3.png";
import quarta from "../../Assets/4.png";
import quinta from "../../Assets/5.png";
import instagram from "../../Assets/instagram.png";
import leitin from "../../Assets/leitin.jpg";
import queijin from "../../Assets/queijin.jpg";
import ovos from "../../Assets/ovos.jpg";
import sarapatel from "../../Assets/sarapatel.jpg";
import porco from "../../Assets/porco.jpg";
import queijo from "../../Assets/queijo.jpg";
import delivery from "../../Assets/delivery.png";
import contato from "../../Assets/contato.svg";
import logoSvg from "../../Assets/Logo.svg";
import triangulo from "../../Assets/triangulo.svg";
import triangulo2 from "../../Assets/triangulo2.svg";
import triangulo3 from "../../Assets/triangulo3.svg";
import footerSVG from "../../Assets/footer.svg";
import galinha from "../../Assets/galinhas.jpg";
import leitoa from "../../Assets/leitoa.png";
import galo from "../../Assets/galo.jpg";
import laranjas from "../../Assets/laranjas.jpg";
import acafrao from "../../Assets/açafrão.jpg";

function Home() {
    return (
      <div className="homePage">

        <div className="menu">
          <div className="link"><HashLink smooth to="#sobre"><button className="botão">Sobre nós</button></HashLink><div/></div>
          <div className="link"><HashLink smooth to="#produtos"><button className="botão">Nossos Produtos</button></HashLink><div/></div>
          <div className="link"><HashLink smooth to="#contato"><button className="botão">Contato</button></HashLink><div/></div>
        </div>

        <div className="logo">
          <img src={logoSvg}/>
          <span>Diversos Produtos da Roça</span>
        </div>

        <img className="triangulo" src={triangulo}/>
        <img className="triangulo2" src={triangulo2}/>
        <img className="triangulo4" src={triangulo3}/>
        <img className="triangulo5" src={triangulo2}/>
        <div className="titulo">
            <span>Venha conhecer nossos produtos!</span>
            <div/>
        </div>

        <Carousel indicators={false} className="carousel">
          <Carousel.Item>
            <img
              className="image"
              src={primeira}
              alt="First slide"
            />
          </Carousel.Item >
          <Carousel.Item>
            <img
              className="image"
              src={segunda}
              alt="Second lide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src={terceira}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src={quarta}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src={quinta}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="tituloS" id="sobre">
          <div/>
          <span>Sobre nós</span>
          <div/>
          <p><br/><br/>Sabe quando você acorda com um sentimento de saudade dos sabores que a roça pode oferecer ?<br/>
          Pensando nisso, a empresa nasceu de um sonho gigantesco em fazer real a possibilidade de cultivar os melhores produtos da roça,
          como também , a criação de animais. Afim de alimentar o gosto por comida típica e saudável.
          </p>
        </div>

        <div className="titulo2" id="produtos">
          <div/>
          <span>Nossos Produtos</span>
          <p>QUALIDADE QUE SÓ A ROÇA PODE OFERECER!</p>
          <div/>
        </div>
          
        <div className="cards">
          <Modal foto={galinha} nome={"Galinha Caipira"} preco={"R$55,00"}/>
          <Modal foto={ovos} nome={"Ovos Caipira"} preco={"R$13,00 Dúzia"}/>
          <Modal foto={sarapatel} nome={"Ingredientes de Sarapatel"} preco={"R$12,00 Kg"}/>
          <Modal foto={leitin} nome={"Leite Puro"} preco={"R$4,00 Litro"}/>
          <Modal foto={queijin} nome={"Queijo Minas"} preco={"R$22,00"}/>
          <Modal foto={porco} nome={"Porco Caipira"} preco={"R$250,00"}/>
          <Modal foto={leitoa} nome={"Leitoa Assada"} preco={"R$300,00"}/>
          <Modal foto={galo} nome={"Galo Caipira"} preco={"R$70,00"}/>
        </div>
          
        <div className="titulo3">
            <div/>
            <span>Outros Produtos De Roça</span>
            <p>MUITO MAIS DE ROÇA!</p>
            <div/>
        </div>

        <div className="grid">
         <Grid/>
        </div>

        <div className="rodape" id="contato">
          <img src={footerSVG} className="footerSVG" />
          <footer className="inform">
            <Info foto={delivery} nome={"Entregas apenas aos domingos pela manhâ no Guará I e II"}/>
            <Info foto={contato} nome={"empresaderoca@gmail.com - (61) 981048839"}/>
            <Info foto= {instagram} nome={"@de.roca"}/>
          </footer>
        </div>

      </div>
      
    );
}
  
export default Home;
  