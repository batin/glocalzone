import React from 'react';
import styled from 'styled-components'

const TableCell = (props)  => {
  
  const TableC = styled.td`    
    width: 120px !important;
    border-bottom: 2px solid rgba(168,175,247, 0.8);
    text-transform: capitalize;
    height: 25px;
    text-align: center;
    font-weight: 400;
    z-index: auto;
    overflow-wrap: break-word;
    word-break: break-word;
    background-color: #fff;
  `
  return (
    <TableC>
      {props.text}
    </TableC>
  );
}

export default TableCell;
