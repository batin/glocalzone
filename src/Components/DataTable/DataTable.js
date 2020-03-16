import React from 'react';
import styled from 'styled-components'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableBody from './TableBody'
import TableCell from './TableCell'

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
`
const InnerDiv = styled.div`
  margin-top: 10%;
  border: 2px solid rgba(168,175,247, 0.8);
  border-radius: 5px;
`
  
const DataTable = (props)  => {
  
  
  const Table = styled.table`
    border-collapse: separate;
    width: ${props.width + 'px'};
    display: block;
    overflow-x: scroll;
    overflow-y: scroll;
    border-top: none;
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
      return ( <TableRow>
                {keys.map(key => {
                  return <TableCell text={item[key]} />
                })}
              </TableRow>)
    })
  }

  return (
    <OuterDiv>
      <div>
        <InnerDiv>
          <div>
          <Table>
            <TableHeader>
              <TableRow>
              {renderHeader()}
              </TableRow>
            </TableHeader>
            <TableBody height={props.height} >
            {renderItems()}
            </TableBody>
          </Table>
          </div>
        </InnerDiv>
      </div>
    </OuterDiv>
  );
}

export default DataTable;
