
import { useContext, useState } from 'react';
import Todo from '../../Todo/Todo'
import { ExampleContext } from '../../../App';


const ShowAll = () => {

    
   const [todos, setTodos] = useContext(ExampleContext);
        
         console.log('Todos', todos.length);
          
  return (
    <div className='TodosList p-4'>
              <div className='text-center'>
                  <div>
                  <h3>Your Todos List : <bold className='alltodosLength'>({todos.length})</bold></h3>
                  </div>

                  {
                    todos?.map((todo) => <Todo key= {todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>)
                  }
              </div>
    </div>
  )
}

export default ShowAll