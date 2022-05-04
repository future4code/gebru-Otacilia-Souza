import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterDetailsPage = (props) => {
    const [details, setDetails] = useState([])
    const [planet, setPlanet] = useState([])

    useEffect(() => {
        getCharacterDateils()
    }, [])

    useEffect(() => {
        getPlanetDatails()
    }, [])


    const getCharacterDateils = () => {
        
        axios.get(props.url)
            .then((response) => { setDetails(response.data) })
            .catch((error) => console.log("erro", error.message))
    }

    const getPlanetDatails = () => {
        axios.get(details.homeworld)
            .then((response) => { setPlanet(response.data) })
            .catch((error) => console.log("erro", error.message))
    }
console.log(planet)


    return (
        <div>
            <h1>Detalhes dos personagens</h1>
             <p>Nome: {details.name}</p>
            <p>Planeta de Origem: {planet.name}</p>
            <button onClick={props.goToListpage}>voltar para a pagina de personagens</button> 
        </div>
    )
}

export default CharacterDetailsPage