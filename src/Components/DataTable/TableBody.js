import React from 'react';
import styled from 'styled-components'

const TableBody = ({children,height})  => {
  
  const TableB = styled.tbody`    
    display: inline-block;
    width: 100%;
    font-size: 7pt;
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
    &:first-child {
      border: none;
    }
    td {
      width: 55vw;
      &:first-child {
        position: sticky;
        z-index: 5;
        height: 25px;
        left: 0;
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.second};
        font-weight: 700;
        /* width: 100%;         */
      }
    }
  `

  return <TableB>{children}</TableB>
}

export default TableBody;
