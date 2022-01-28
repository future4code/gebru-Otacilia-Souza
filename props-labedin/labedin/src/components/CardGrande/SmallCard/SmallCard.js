import React from 'react';
import '../../App.css'



function SmallCard(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.image } alt="imagem"/>
            <div>
            <h4>{ props.title }</h4>
                <p>{ props.descricao }</p>
            </div>
           
       </div>
    )}


export default SmallCard;
