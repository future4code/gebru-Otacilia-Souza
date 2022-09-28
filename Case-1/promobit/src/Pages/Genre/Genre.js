import React, { useContext } from 'react';
import { MoviesContext } from '../../Services/getMovies';

import {
  Container,
  GenreButton,
  Content,
} from './style'

export default function Genres() {
  const {
    genres,
    filters,
    handleFilterGenres
  } = useContext(MoviesContext)

  return (
    <Container>
      <Content>

        <h1>Seja Bem-Vindo(a)</h1>
        <h2>Milhões de filmes e series a um só clique de suas mãos.</h2>

        <h3>Filtre por:</h3>
        <br />

        {genres.map(genre => (
          <GenreButton
            key={genre.id}
            type="button"
            marked={filters.includes(genre.id)}
            onClick={() => handleFilterGenres(genre.id)}
          >
            {genre.name}
            {filters.includes(genre.id)}
          </GenreButton>
        ))}
      </Content>
    </Container>
  )
}