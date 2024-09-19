import  { useEffect, useState } from 'react'
import Todo from '../../Todo/Todo';
import { useContext } from 'react';
import { ExampleContext } from '../../../App';

const Incompleted = () => {


    const [todos, setTodos]= useContext(ExampleContext);
    const [incompletedTodos, setInCompletedTodos]= useState([]);
    
    useEffect(() => {
        setInCompletedTodos(todos.filter(todo => todo.checked === false))
    }, [todos]);
    console.log('filter', incompletedTodos);

  return (
    <div className="text-center TodosList p-4">
         <div className="text-center">
                <h3>Incompleted List : <bold className="alltodosLength">({incompletedTodos.length})</bold></h3>
            </div>
            {
                incompletedTodos.map(todo => <Todo checked={todo.checked} key={todo.id} todo={todo}></Todo>)
            }   
    </div>
  )
}

export default Incompleted