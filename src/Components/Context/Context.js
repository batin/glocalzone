import React, { useReducer, createContext } from "react"

const initialState = {
  items: [
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science computer science computer science computersciencecomputerscience',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    },
    {
      name: 'batin',
      surname: 'Eryilmaz',
      age: '24',
      location: 'denizli',
      major: 'computer science',
      'favorite frameWork': 'Gatsby',
      Country: 'turkey'
    }
  ]
}

const ItemContext = createContext({
  items: [],
  addItem: (item) => { },
})


const reducer = (state, action) => {
  switch (action.type) {
    case "addItem": {
      return {
        items: [
          ...state.items,
          action.payload]
      }
    }
    default: {
      return state
    }
  }
}
const ItemProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function addItem(item) {
    dispatch({ type: "addItem", payload: item })
  }
  return (<ItemContext.Provider value={{ items: state.items, addItem }} {...props} />)

}

export { ItemContext, ItemProvider }