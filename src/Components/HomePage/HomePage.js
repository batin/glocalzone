import React,{ useState, useContext } from 'react';
import DataTable from '../DataTable/DataTable'
import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import { ItemContext } from "../Context/Context"

const HomePage = () =>  {

  const [width, setWidth] = useState(600);
  const state = useContext(ItemContext)

  return (
    <div>
      <Button primary onClick={() => width === 300 ? setWidth(600) : setWidth(300) } >Width</Button>
      <DataTable 
        width={width}
        height={200}
        items={state.items}
      />
      <InputField keys={Object.keys(state.items[0])}/>
    </div>
  );
}

export default HomePage;
