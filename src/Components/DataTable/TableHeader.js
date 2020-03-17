import React from 'react';
import styled from 'styled-components'

const TableHead = styled.thead`
  width: 100%; 
  text-align: center;
  display: block;
  position: sticky;
  top : 0;
  height: 40px;
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
      background-color: rgb(168,175,247);
      color: white;
      text-transform: capitalize;    
      &:first-child {
        left: 0;
        z-index: 100;
        position: sticky;
        width: 100%;
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
