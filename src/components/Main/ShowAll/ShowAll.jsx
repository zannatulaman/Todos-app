
import Todo from '../../Todo/Todo'


const ShowAll = ({todos, setTodos}) => {
    // console.log('Props', todos);
  return (
    <div className='TodosList p-4'>
              <div className='text-center'>
                     <h3>Your Todos List <bold className='alltodosLength' >({todos.length})</bold></h3>

                  {
                    todos?.map((todo) => <Todo todo={todo} todos={todos} setTodos={setTodos}></Todo>)
                  }
              </div>
    </div>
  )
}

export default ShowAll