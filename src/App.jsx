
import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useEffect } from 'react';

export const ExampleContext = createContext();

const getLocalTodos = () => {
   const todo = sessionStorage.getItem('todos')

   if(todo){
       return JSON.parse(sessionStorage.getItem('todos'))
   }else{
      []
   }

}


function App() {
   const [todos, setTodos]= useState(getLocalTodos());


   useEffect(() => {
        sessionStorage.setItem("todos", JSON.stringify(todos));
   }, [todos])

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
