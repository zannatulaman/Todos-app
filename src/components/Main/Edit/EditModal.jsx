import React, { useContext, useEffect, useState } from 'react'
import ModalComp from '../Modal/Modal'
import { ExampleContext } from '../../../App'
import EditTodo from './editTodo';


const EditModal = ({edit, editShowModal, selectedId, setSelectedId, setEditShowModal}) => 
{   
      
    const [todos, setTodos] = useContext(ExampleContext);
    const [editTodos, setEditTodos] = useState([])
    

    
  
   
     useEffect(()=> {
          
           setEditTodos(todos.filter(todo => todo.id===selectedId))
            

     }, [todos, selectedId])

     console.log('Select', selectedId);

    console.log('Edit', editTodos);
  return (
    <div>
        <ModalComp showModal={editShowModal} setShowModal={setEditShowModal}>
        {
            editTodos.map((todo) => <EditTodo todo={todo} editShowModal={editShowModal} selectedId={selectedId} setSelectedId={setSelectedId} setEditShowModal={setEditShowModal}></EditTodo>)
        }
        </ModalComp>
        
    </div>
  )
}

export default EditModal





    