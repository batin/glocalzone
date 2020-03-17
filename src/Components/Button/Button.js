import styled from 'styled-components'

const Button =  styled.button`
  font-family: 'Open Sans Condensed';
  background: ${props => props.primary ? props.theme.main : props.theme.second};
  color: ${props => props.primary ? props.theme.second : props.theme.main};
  font-weight: 700;
  outline: none;
  letter-spacing: 1px;
  border: none;
  width: 100%;
  height: 3%;
  border-radius: 10px;
  /* position: ${props => props.primary ? 'absolute' : 'block'}; */
  /* margin: ${props => props.primary ? '10px 40%' : 0}; */
`

export default Button