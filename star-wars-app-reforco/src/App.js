import React, {useState} from "react";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./CharacterListPage/CharacterListPage";




function AppStarWars() {
  const [ currentPage, setCurrentPage] = useState("detail")

function selectePage () {
if (currentPage === "details") {
  return  <CharacterDetailPage/> } 
else  { return   <CharacterListPage/>}


}

return (
  <div>
    <h1>Star Wars</h1>
   {selectePage ()}
 </div>
)
}

export default AppStarWars;