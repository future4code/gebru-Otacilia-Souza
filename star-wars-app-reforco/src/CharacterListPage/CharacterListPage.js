import React, {useState, useEffect} from "react";
import axios from "axios"
import { BASE_URL } from "../constants/url";
import { CharacterCard } from "./styledListaPage";

const CharacterListPage = () =>{
 const [CharacterList, setCharacterList] = useState([])

    function getCharacterList(){
    axios.get(`${BASE_URL}/people/`)
    .then((response) => setCharacterList (response.data.results))
    .catch((error) => console.log("erro", error.message))
}

useEffect(() => {
    getCharacterList()
     }, []);

const showCharacters = () => {
    return CharacterList.map((Character) => {
        return <CharacterCard key={Character.url}>{Character.name}</CharacterCard>
    });

}

getCharacterList()


    return (
<div>
   <h5>teste componente ListaPage</h5>
   {showCharacters()}
</div>
    );
} 
export default CharacterListPage