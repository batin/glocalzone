import React from 'react';
import styled from 'styled-components'

const TableHead = styled.thead`
  /* width: 100%; */
  text-align: center;
  display: block;
  position: sticky;
  top : 0;  
  z-index: 10;
  tr {
    td {
      height: 30px;
      font-size: 7pt;
      @media screen and (min-width: 996px) {
         font-size: 10pt;
      }
    }
  }
  &:first-child {
    td{
      font-weight: 700;
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.second};
      text-transform: capitalize;   
      min-width: 35vw; 
      &:first-child {
        left: 0;
        z-index: 100;
        position: sticky;
        /* width: 100%; */
      }
    }
  }
`

const TableHeader = ({children})  => {
  return (
    <TableHead>
      {children}
    </TableHead>
  );
}

export default TableHeader;
