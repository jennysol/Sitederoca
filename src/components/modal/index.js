import React from 'react';
import './styles.css';

function Modal ({foto, nome, preco}) {
    return (
            <div className="fundo">
                <img src={foto}/>
                <div className="dado">
                    <span>{nome}</span>
                    <p>{preco}</p>
                </div>
            </div> 
    );
}


export default Modal;
