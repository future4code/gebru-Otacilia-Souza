import React, { useState, useEffect } from "react";
import { getCharacterDateils, getPlanetDatails } from "../../src/services/request";



const CharacterDetailsPage = (props) => {
    const [details, setDetails] = useState([])
    const [planet, setPlanet] = useState([])

    
        useEffect(() => {
            getCharacterDateils(props.url, setDetails)
            getPlanetDatails(details.homeworld, setPlanet)
        }, [details.homeworld])



console.log(planet)




    return (
        <div>
            <h1>Detalhes dos personagens</h1>
            {details.name && planet.name ?
            <div>
             <p>Nome: {details.name}</p>
            <p>Planeta de Origem: {planet.name}</p>
            </div> : 
            <p>carregando...</p> }
            <button onClick={props.goToListpage}>voltar para a pagina de personagens</button> 
        </div>
    )
}

export default CharacterDetailsPage