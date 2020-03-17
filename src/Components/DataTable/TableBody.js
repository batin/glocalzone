import React from 'react';
import styled from 'styled-components'

const TableBody = ({children,height})  => {
  
  const TableB = styled.tbody`    
    display: inline-block;
    width: 100%;
    font-size: 8pt;
    @media screen and (min-width: 996px) {
      font-size: 10pt;
    }
    height: ${height+'px'};
    z-index: -1;
    color: black;    
    &::-webkit-scrollbar {
      display: none;
    }
    &:last-child {
        border: none;
    }
    td {
      &:first-child {
        position: sticky;
        width: 100%;
        z-index: 5;
        height: 25px;
        left: 0;
        background-color: #fff;
        width: 100%;        
      }
    }
  `

  return <TableB>{children}</TableB>
}

export default TableBody;
