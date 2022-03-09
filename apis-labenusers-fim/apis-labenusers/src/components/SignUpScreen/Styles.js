import styled from 'styled-components';

const MainContainer = styled.div `
margin: 12% 0 5% 38%;
  width:20%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid gray;
  border-radius: 15px;
  background-color: #999966;

  h2{
      margin: 20px 0;
      color: #000000;
  }

  input:first-child {
      margin-top: 4rem;
  }

  input {
      width: 240px;
      margin: 5px;
      border-style: solid;
    border-width: 0px 0px 1px;
    background-color: transparent;
  }

  button {
    margin: 10px 30px ;
    padding: 6px 10px;
    border-radius: 10px;
    border: none;
    background-color: #666666;
    :hover {
      border: 1px solid #996600;
      background-color: #999999;
    }
  }
`

export default MainContainer