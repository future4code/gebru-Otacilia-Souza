import React, { useState, useEffect } from "react";
import { getCharacterDateils, getPlanetDatails, getInformDatails} from "../../src/services/request";
import {FirstTitle2,FirstContainer2, TitleButton2, FirstDetail} from "../CharacterDetailsPage/styledCaracterdetail"


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
            <FirstContainer2>

          <FirstTitle2> Detalhes dos personagens</FirstTitle2>
          <FirstDetail>
            {details.name && planet.name && planet.climate &&
             planet.climate && planet.population && planet.terrain?
         
            <div>
             <p>Nome: {details.name}</p>
            <p>Planeta de Origem: {planet.name}</p>
            <p>Clima do Planeta: {planet.climate}</p>
            <p>População do Planeta: {planet.population}</p>
            <p>Terreno do Planeta: {planet.terrain}</p>

            </div> : 
            <p>carregando...</p> }
            </FirstDetail>
        <TitleButton2>
          <button onClick={props.goToListpage}>voltar para a pagina de personagens</button> 
          </TitleButton2>
            </FirstContainer2>
        </div>
    )
}



export default CharacterDetailsPage