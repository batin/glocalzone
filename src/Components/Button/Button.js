import styled from 'styled-components'

const Button =  styled.button`
  font-family: 'Open Sans Condensed';
  background-color: #fff;
  background: ${props => props.primary ? 'rgba(168,175,247, 1)' : "#fff"};
  color: ${props => props.primary ? "#fff" : 'rgba(168,175,247, 1)'};
  font-weight: 700;
  outline: none;
  letter-spacing: 1px;
  border: none;
  width: ${props => props.primary ? '20%' : '50%'};
  height: 3%;
  border-radius: 10px;
  /* position: ${props => props.primary ? 'absolute' : 'block'}; */
  margin: ${props => props.primary ? '10px 40%' : 0};
`

export default Button