import React from 'react'
import Todo from '../../Todo/Todo';

const NextSeven = ({todos, setTodos}) => {
    //  console.log('Todos', todos);


  return (
    <div className='TodosList p-4'>
    <div>
           <h3> <bold className='alltodosLength' >({todos.length})</bold></h3>
        {
          todos?.map((todo) => <Todo todo={todo} todos={todos} setTodos={setTodos}></Todo>)
        }
    </div>

    <div>
    <h3>Monday <bold className='alltodosLength' >({todos.dates})</bold></h3>
    </div>
    </div>
  )
}

export default NextSeven