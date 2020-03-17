import React,{useState, useContext} from 'react';
import styled from 'styled-components'
import Button from '../Button/Button'
import { ItemContext } from "../Context/Context"
const P = styled.p`
  color: white;
  letter-spacing: 1px;
  font-family: 'Open Sans Condensed';
  font-weight: 700 !important;
  text-transform: capitalize;
`

const Div = styled.div`
  margin: auto;
  width: 80%;
  Button{
    margin-right: 25%;
    margin-left: 25%;
    height: 30px;
    margin-top: 5%;
  }
`

const Input =  styled.input`
  font-family: 'Open Sans Condensed';
  color: black;
  outline: none;
  letter-spacing: 1px;
  border: none;
  height: 25px;
  width: 95%;
  border-radius: 10px;
  border: 2px solid rgba(168,175,247, 0.8);
  padding-left: 5%;
`

const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 650px;
  border: 2px solid rgba(168,175,247, 0.8);
  border-radius: 10px;
  margin: auto;
  padding: 25px;
  background-color: rgba(168,175,247, 0.8);
`

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 996px) {
    width: 40%;
  }
  width: 80%;
  margin: auto;
  margin-bottom: 10%;
`
const InputField = () =>  {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [major, setMajor] = useState('');
  const [fav, setFav] = useState('');
  const [country, setCountry] = useState('');

  const state = useContext(ItemContext)

  const add = () => {
    if(name !== '' && surname !== '' && age !== '' 
        && location !== '' && major !== '' && fav !== '' && country !== ''){
      const item = {
        'name': name,
        'surname':surname,
        'age':age,
        'location':location,
        'major':major,
        'favorite frameWork':fav,
        'country':country,
      }
      setName('')
      setSurname('')
      setAge('')
      setLocation('')
      setMajor('')
      setFav('')
      setCountry('')
      state.addItem(item)
    }
  }

  return (
    <OuterDiv>
      <Inputs>
        <Div>
          <P>Name</P>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Div>
        <Div>
          <P>Surname</P>
          <Input value={surname} onChange={(e) => setSurname(e.target.value)} />
        </Div>
        <Div>
          <P>Age</P>
          <Input value={age} onChange={(e) => setAge(e.target.value)} />
        </Div>
        <Div>
          <P>Location</P>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </Div>
        <Div>
          <P>Major</P>
          <Input value={major} onChange={(e) => setMajor(e.target.value)} />
        </Div>
        <Div>
          <P>Favorite framework</P>
          <Input value={fav} onChange={(e) => setFav(e.target.value)} />
        </Div>
        <Div>
          <P>Country</P>
          <Input value={country} onChange={(e) => setCountry(e.target.value)} />
        </Div>
        <Div>
          <Button onClick={add} >Add</Button>
        </Div>
      </Inputs>
    </OuterDiv>
  );
}

export default InputField;

