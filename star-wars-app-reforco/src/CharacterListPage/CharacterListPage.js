import React, {useState, useEffect} from "react";

import { CharacterCard } from "./styledListaPage";
import {getCharacterList} from "../../src/services/request"
import { FirstTitle,FirstContainer } from "../CharacterListPage/styledListaPage";
import capa from "../assets/personagens/capa.jpeg";


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
<FirstContainer>
<FirstTitle>Star Wars  </FirstTitle>

 <img src= {capa}/>
 <p>List Page</p> 
{showCharacters()}
<p></p> 
   </FirstContainer>
</div>
    );
} 
export default CharacterListPage