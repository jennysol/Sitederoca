import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel'
import logoSvg from "../../Assets/Logo.svg";
import triangulo from "../../Assets/triangulo.svg";
import triangulo2 from "../../Assets/triangulo2.svg";
import galinha from "../../Assets/galinhas.jpg";
import Modal from "../../components/modal";
import leitin from "../../Assets/leitin.jpg";
import queijin from "../../Assets/queijin.jpg";
import ovos from "../../Assets/ovos.jpg";
import sarapatel from "../../Assets/sarapatel.jpg";
import porco from "../../Assets/porco.jpg";
import queijo from "../../Assets/queijo.jpg";
import delivery from "../../Assets/delivery.png";
import contato from "../../Assets/contato.svg";
import celular from "../../Assets/telefone.svg";
import Info from "../../components/modal/info";
import instagram from "../../Assets/instagram.png";
//import facebook from "../../Assets/facebook.png";
//import whatsapp from "../../Assets/whatsapp.png";

function Home() {
    return (
      <div className="HomePage">
          <div className="logo">
            <img src={logoSvg}/>
            <span>Diversos Produtos da Roça</span>
          </div>
          <img className="triangulo" src={triangulo}/>
          <img className="triangulo2" src={triangulo2}/>

          <div className="titulo">
             <span>Venha conhecer nossos produtos!</span>
             <div/>
          </div>

          <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="image"
                  src={queijo}
                  alt="First slide"
                />
              </Carousel.Item >
              <Carousel.Item>
                <img
                  className="image"
                  src={galinha}
                  alt="Second lide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={ovos}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={leitin}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={porco}
                  alt="Fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={sarapatel}
                  alt="Sixth slide"
                />
              </Carousel.Item>
            </Carousel>

            <div className="titulo2">
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
              <Modal foto={porco} nome={"Leitoa"} preco={"R$250,00"}/>
            </div>
              
            <div className="rodape">
            <footer className="inform">
              <Info foto={delivery} nome={"Entragas apenas aos domingos pela manhâ no Guará I e II"}/>
              <Info foto={contato} nome={"deroça@gmail.com"}/>
              <Info foto={instagram} nome={"@de.roca"}/>
            </footer>
            </div>
            
      </div>
      
    );
}
  
export default Home;
  