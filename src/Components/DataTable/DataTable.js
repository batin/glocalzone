import React from 'react';
import styled from 'styled-components'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableBody from './TableBody'
import TableCell from './TableCell'


const DataTable = (props)  => {

  const InnerDiv = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
  `
  
  
  const Table = styled.table`
    border-collapse: separate;
    border: 2px solid ${props => props.theme.main};;
    border-radius: 5px;
    width: ${props.width.includes('%') ? props.width : props.width + 'px'};
    margin: auto;
    display: block;
    overflow-x: scroll;
    overflow-y: scroll;
    border-spacing: 0;
    letter-spacing: 1px;
    font-size: 1rem;
     &::-webkit-scrollbar {
      display: none;
    }
  `
  const renderHeader = () => {
    const keys = Object.keys(props.items[0])
    return keys.map(key => {
      return <TableCell text={key} />
    })
  }


  const renderItems = () => {
      
    return props.items.map(item => {
      const keys = Object.keys(item)
      return ( <TableRow leftColumnFixed={props.leftColumnFixed}>
                {keys.map(key => {
                  return <TableCell text={item[key]} />
                })}
              </TableRow>)
    })
  }

  return (
    <InnerDiv>
      <Table>
        <TableHeader leftColumnFixed={props.leftColumnFixed} >
          <TableRow leftColumnFixed={props.leftColumnFixed} >
          {renderHeader()}
          </TableRow>
        </TableHeader>
        <TableBody height={props.height} leftColumnFixed={props.leftColumnFixed} >
        {renderItems()}
        </TableBody>
      </Table>
    </InnerDiv>
  );
}

export default DataTable;
