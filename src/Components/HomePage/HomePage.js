import React,{ useContext } from 'react';
import DataTable from '../DataTable/DataTable'
import styled from 'styled-components'
import InputField from '../InputField/InputField'
import { ItemContext } from "../Context/Context"

const OuterDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  justify-content: center;
`

const HomePage = () =>  {

  const state = useContext(ItemContext)

  return (
    <OuterDiv>
      <DataTable 
        width={'80%'} // px or %
        height={200} // px
        items={state.items}
        leftColumnFixed
      />

      <InputField keys={Object.keys(state.items[0])}/>
    </OuterDiv>
  );
}

export default HomePage;
