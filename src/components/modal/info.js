import React from 'react';
import './info.css';

function Info ({foto, nome}) {
    return (
        <div className="dados">
            <img src={foto}/>
            <span>{nome}</span>
        </div>
        );
}


export default Info;
