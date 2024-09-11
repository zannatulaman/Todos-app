
import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

export const ExampleContext = createContext()

function App() {
   const [todos, setTodos]= useState([]);

  return (
       <ExampleContext.Provider value={[todos, setTodos]}>
          <>
          <Header></Header>
          <Main></Main>
          </>
       </ExampleContext.Provider>
  )
}

export default App
