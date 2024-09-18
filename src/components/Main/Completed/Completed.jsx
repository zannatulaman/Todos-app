import  { useContext, useEffect, useState } from 'react'
import Todo from '../../Todo/Todo';
import { ExampleContext } from '../../../App';

const Completed = () => {
    const[todos, setTodos]= useContext(ExampleContext);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        setCompletedTodos(todos.filter((todo) => todo.checked=== true))
       
    }, [todos])

    console.log('Completed', completedTodos);
  return (
    <div className="text-center TodosList p-4">
        <div className="text-center">
                <h3>Completed List : <bold className="alltodosLength">({completedTodos.length})</bold></h3>
            </div>
            {
                completedTodos.map(todo => <Todo checked={todo.checked} key={todo.id} todo={todo}></Todo>)
            }

    </div>
  )
}

export default Completed