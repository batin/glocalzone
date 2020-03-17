import React from 'react';
import styled from 'styled-components'

const TableRow = ({children})  => {
  
  const TableR = styled.tr`
    min-width: 100%;
    display: table;
    overflow-x: scroll;
    &:last-child {
      td {
        border-bottom: none;
      }
    }
  `

  return (
    <TableR>
      {children}
    </TableR>
  );
}

export default TableRow;
