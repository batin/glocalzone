import React from 'react';
import styled ,{ThemeProvider, createGlobalStyle} from 'styled-components'
import HomePage from './Components/HomePage/HomePage'
import { ItemProvider } from "./Components/Context/Context"

const AppDiv = styled.div`
  font-family: 'Open Sans Condensed';
  font-weight: 700 !important;
  width: 100%;
  height: 100vh;
  color: ${props => props.theme.main};
  background-color: ${props => props.theme.second};
  html {
    background-color: ${props => props.theme.second};
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.second};
  }
`

const theme = {
  main: "#1d4d4f",
  second: '#e5dfdf',
};

const App = () =>  {  
  return (
    <ItemProvider>
       <ThemeProvider theme={theme}>
          <AppDiv>
            <HomePage />
          </AppDiv>
          <GlobalStyle />
      </ThemeProvider>
    </ItemProvider>
  );
}

export default App;
