import React, {useState, useEffect} from "react";

import { CharacterCard } from "./styledListaPage";
import {getCharacterList} from "../../src/services/request"

const CharacterListPage = (props) =>{
 const [CharacterList, setCharacterList] = useState([])



useEffect(() => {
    getCharacterList(setCharacterList)
     }, []);

const showCharacters = () => {
    return CharacterList.map((Character) => {
        return <CharacterCard onClick={()=>props.goToDetailsPage(Character.url)}  key={Character.url}>{Character.name}</CharacterCard>
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