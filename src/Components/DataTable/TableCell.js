import React from 'react';
import styled from 'styled-components'

const TableCell = (props)  => {
  
  const TableC = styled.td`    
    min-width: 10vh !important;
    @media screen and (min-width: 996px) {
      min-width: 15vh !important;
      }
    border: 1px solid ${props => props.theme.main};
    height: 25px;
    text-transform: capitalize;
    text-align: center;
    font-weight: 400;
    z-index: auto;
    overflow-wrap: break-word;
    word-break: break-word;
    background-color: ${props => props.theme.second};
    color: ${props => props.theme.main};
  `
  return (
    <TableC>
      {props.text}
    </TableC>
  );
}

export default TableCell;
