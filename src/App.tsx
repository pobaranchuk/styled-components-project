import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Box>
{/*                <StyledBtn color = "black" fontSize = "20px">Hello </StyledBtn>
                <StyledBtn color = "red">Hello</StyledBtn>
                <StyledBtn fontSize={"30px"}>Hello </StyledBtn>*/}
                <StyledBtn color = {myTheme.colors.primary} btnType = {"primary"} active>Hello </StyledBtn>
                <StyledBtn color = {myTheme.colors.secondary} btnType = {"outlined"} >Hello </StyledBtn>
{/*             <input type={"text"}/>
                <input type={"submit"}/>
                <input type={"radio"}/>*/}
            </Box>

        </div>
    );
}

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }


  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export default App;