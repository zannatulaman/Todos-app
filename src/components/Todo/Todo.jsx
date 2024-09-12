import React, { useContext, useState } from "react";
import { AiFillDelete, AiOutlineFieldTime } from "react-icons/ai";
import { FcCalendar, FcEditImage } from "react-icons/fc";
import { MdDateRange, MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { ExampleContext } from "../../App";
import { useEffect } from "react";


let dayName = ""

const Todo = ({ todo , dayNameShow, random, todayDate }) => {
    // console.log('Random', random);

    console.log('Today', todayDate);

  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useContext(ExampleContext);
  const [todoLength, setTodoLength] = useState([]);
  console.log('TodoLenth', todoLength);
  const handleEdit = () => {};

  const handleChecked = (id) => {
       setCheck(!check);

       setTodos(todos?.map((item) => {
              if(item?.id=== id){
                return  {...item, checked: !item.checked}    
            } 

            return item
       }))
     
    }
  
    // console.log('Todos', todos);

  const handleDelete = (id) => {
    setTodos(todos?.filter((item) => item.id !== id));
  };

  const handleLength = () => {
    setTodoLength(todos.filter(tds => tds.dates === todayDate));
}

useEffect(() => {
    handleLength();
}, [todos]);

  const handleDayName = (day) => {
    if (day === '0') {
        return dayName = 'Sunday';
    } if (day === '1') {
        return dayName = 'Monday';
    } if (day === '2') {
        return dayName = 'Tuesday';
    } if (day === '3') {
        return dayName = 'Wednesday';
    } if (day === '4') {
        return dayName = 'Thursday';
    } if (day === '5') {
        return dayName = 'Friday';
    } if (day === '6') {
        return dayName = 'Saturday';
    }
  }

    useEffect(() => {
        handleDayName(todo?.day);
    }, [todo?.day, todos])

    console.log('Dayname', dayName);

  return (
    <div className="todo">
        {
            dayNameShow && random === 0 &&
            <div className="text-center">
                   <h4 className="dayName"><FcCalendar></FcCalendar>{dayName} - <span>({todoLength.length})</span></h4> 
            </div>

            // <div className="text-center">
            //         <h4 className="dayName"><FcCalendar style={{ marginBottom: '2px', marginRight: '5px' }}></FcCalendar>{dayName} - <span>({todoLength.length})</span></h4>
            // </div>
            
        }
      <div className="todoItem">
        <div>
          <p className="todoNames">{todo.names}</p>
        </div>

        <div>
          <button
            onClick={() => handleEdit(todo.id)}
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
            className="iconBtn"
          >
            <FcEditImage className="todoIcons"></FcEditImage>
          </button>

          <button
            onClick={() => handleChecked(todo.id)}
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
            className="iconBtn"
          >
            {!check ? (
              <MdRadioButtonUnchecked className="todoIcons"></MdRadioButtonUnchecked>
            ) : (
              <MdRadioButtonChecked className="todoIcons"></MdRadioButtonChecked>
            )}
          </button>

          <button
            onClick={() => handleDelete(todo.id)}
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
            className="iconBtn"
          >
            <AiFillDelete className="todoIcons" style={{color: "red"}}></AiFillDelete>
          </button>
        </div>
      </div>
      <div className="tododetail">
                <div className="todoTimes">
                    <p><MdDateRange></MdDateRange>{todo.dates}</p>
                </div>
                <div className="todoTimes">
                    <p><AiOutlineFieldTime></AiOutlineFieldTime>{todo.times === 'Invalid date' ? 'Invalid Time' : todo.times}</p>
                </div>
            </div>
    </div>
  );
};

export default Todo;
