import  { useEffect, useState } from 'react'
import Todo from '../../Todo/Todo';
import { useContext } from 'react';
import { ExampleContext } from '../../../App';

const Uncompleted = () => {


    const [todos, setTodos]= useContext(ExampleContext);
    const [uncompletedTodos, setUnCompletedTodos]= useState([]);
    
    useEffect(() => {
        setUnCompletedTodos(todos.filter(todo => todo.checked === false))
    }, [todos]);
    console.log('filter', uncompletedTodos);

  return (
    <div className="text-center TodosList p-4">
         <div className="text-center">
                <h3>Uncompleted List : <bold className="alltodosLength">({uncompletedTodos.length})</bold></h3>
            </div>
            {
                uncompletedTodos.map(todo => <Todo checked={todo.checked} key={todo.id} todo={todo}></Todo>)
            }   
    </div>
  )
}

export default Uncompleted