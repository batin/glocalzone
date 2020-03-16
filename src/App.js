import React,{ useState } from 'react';
import styled from 'styled-components'
import HomePage from './Components/HomePage/HomePage'
import { ItemProvider } from "./Components/Context/Context"

const AppDiv = styled.div`
  font-family: 'Open Sans Condensed';
  font-weight: 700 !important;
  background-color: #fff;
`
const App = () =>  {  
  return (
    <ItemProvider>
      <AppDiv>
        <HomePage />
      </AppDiv>
    </ItemProvider>
  );
}

export default App;
