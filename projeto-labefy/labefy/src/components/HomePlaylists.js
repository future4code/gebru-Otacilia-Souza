import React from "react";
import {
  FirstContainer,
  FirstTitle,
  FirstContainerItems,
  SecondContainer,
  SecondTitle,
  SecondContainerItems,
} from "./styles/StyledHomePlaylists";

export default class HomePlaylists extends React.Component {
  render() {
    return (
      <div>
        <FirstContainer>
          <FirstTitle>Olá</FirstTitle>
          <FirstContainerItems
            src="https://open.spotify.com/show/4TriSZCCin1D4B1D61VhNE"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Mpb"
          />
         
        </FirstContainer>
        <SecondContainer>
          <SecondTitle>Seus Programas</SecondTitle>
          <SecondContainerItems
            src="https://open.spotify.com/episode/4jsz7hD0wpKNQ4K7rPranh"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          
        </SecondContainer>
      </div>
    );
  }
}
