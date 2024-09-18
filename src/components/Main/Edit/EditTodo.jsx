import React, { useContext, useState } from 'react'
import { ExampleContext } from '../../../App';
import moment from 'moment/moment';
import { MdCancel, MdDateRange } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { IoIosTime } from 'react-icons/io';
import TimePicker from 'react-time-picker';


const EditTodo = ({todo, editShowModal, selectedId, setSelectedId, setEditShowModal}) => {

    const [todos, setTodos] = useContext(ExampleContext);
   
    
    const [name, setName] = useState(todo.names);
    const [date, setDate] = useState(todo.dates? new Date(todo.dates) : new Date()) ;
    const [time, setTime] = useState(moment(todo.times, "HH:mm:ss").format('hh:mm a'));
     
    
     const handleName = (e) => {
        setName(e.target.value);
        todo.names = e.target.value;
     }


     const handleDate  = (date) => {
        setDate(date);
        todo.dates = moment(date).format("YYYY-MM-DD");
     }

     const handleTime = (time) => {
        setTime(time);
        todo.times = (moment(time, "HH:mm:ss").format('hh:mm a'));
     }


    const handleSubmit = (e) => {
        e.preventDefault();
    //     setTodos([...todos], {
    //         id: todo.id,
    //         names: todo.names,
    //         dates: moment(todo.dates).format("YYYY-MM-DD"),
    //         times: moment(todo.times, "HH:mm:ss").format('hh:mm a'),
    //         day: todo.day,
    //         checked: todo.checked
    // })
    const  updatedTodos = todos.map((item) => {
          if(item.id=== todo.id){
             return  {
                        id: todo.id,
                        names: todo.names,
                        dates: moment(todo.dates).format("YYYY-MM-DD"),
                        times: moment(todo.times, "HH:mm:ss").format('hh:mm a'),
                        day: todo.day,
                        checked: todo.checked
             }

          }else{
             return item
          }
    })
    console.log('Updated', updatedTodos);
    console.log(name, date, time);
    setTodos(updatedTodos);
    setEditShowModal(false);
    setSelectedId(null);
      
    }

    console.log('Todo', todo);

  return (
    <div>
          <div className="modalBox mt-4">
            <div className="text-center">
              <h2>Edit your todo</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <input
                  type="text"
                  className="todoName"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter the todo name"
                  name="name"
                />
              </div>

              <div className="datePicker">
                <p className="pickDate">
                  <MdDateRange></MdDateRange>
                  <span>Pick a Date</span>
                </p>
                <DatePicker
                  selected={date}
                  onChange={(date) => handleDate(date)}

                />
              </div>

              <div className="timePicker">
                <p className="pickTime">
                  <IoIosTime></IoIosTime>
                  <span>Pick a Time</span>
                </p>
                <TimePicker
                  onChange={(time) => handleTime(time)}
                  selected={time}
                  amPmAriaLabel="AM/PM"
                  closeClock={true}
                  disableClock={true}
                  format="h:m: a"
                  hourPlaceholder="hh"
                  minutePlaceholder="mm"
                  //  secondPlaceholder='ss'
                  clearIcon={true}
                  //  className="date"
                ></TimePicker>
              </div>

            

              <div className="text-center mt-2">
                <input
                  type="submit"
                  value="Make Edit"
                  className="add-btn mt-20px"
                />
              </div>

              <p onClick={() => setEditShowModal(false)}>
                <MdCancel className="cancelIcon"></MdCancel>
              </p>
            </form>
        </div>
    </div>
  )

}

export default EditTodo