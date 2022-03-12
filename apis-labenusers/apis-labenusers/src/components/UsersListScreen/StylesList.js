import styled from 'styled-components';

const MainContainer = styled.div `
margin: 2% 0 0 10%;
  h2{
      margin: 20px 0;
      color: #000000;
  }
  
`

const StyledUsername = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  margin-top: 10px;

  li {
    list-style: none;
    font-size: 1.1rem;
  }
  button {
    padding: 4px 8px;
    border-radius: 5px;
    border: none;
    background-color: #996633;
    :active {
      border: 15px solid #996633;
      background-color: #000000;
    }
  }
  
`

export { MainContainer, StyledUsername }