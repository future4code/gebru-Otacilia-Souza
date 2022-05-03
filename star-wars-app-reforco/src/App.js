import React, {useState} from "react";
import CharacterDetailsPage from "./CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./CharacterListPage/CharacterListPage";




function AppStarWars() {
  const [ currentPage, setCurrentPage] = useState("list")
  const [detailsUrl, setDetailsUrl] = useState("")

function goToDetailsPage(url){
  setCurrentPage("details")
  setDetailsUrl(url)
}

function goToListpage(){
  setCurrentPage("list")
}

function selectePage () {
if (currentPage === "list") {
  return  <CharacterListPage goToDetailsPage={goToDetailsPage}/> } 
else  { return   <CharacterDetailsPage goToListpage={goToListpage} url={detailsUrl}/>}


}

return (
  <div>
    <h1>Star Wars</h1>
   {selectePage ()}
 </div>
)
}

export default AppStarWars;