import React from 'react';
import styled from 'styled-components'

const TableHead = styled.thead`
  width: 100%; 
  text-align: center;
  display: block;
  position: sticky;
  top : 0;
  height: 25px;
  z-index: 10;
  &:first-child {
    td{
      font-weight: 700;
      background-color: rgb(168,175,247);
      color: white;
      text-transform: uppercase;    
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
