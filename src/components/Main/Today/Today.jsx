import React, { useContext, useEffect, useState } from "react";
import moment from "moment/moment";
import Todo from "../../Todo/Todo";
import { ExampleContext } from "../../../App";

const Today = ({}) => {
  
  const [todos, setTodos]= useContext(ExampleContext);
  // console.log('Todoias', todos);
 
  let random = 0;
  const [todayTodo, setTodayTodo] = useState([]);

  const date = new Date();
  const todayDate = moment(date).format("DD/MM/YYYY");


  useEffect(() => {
    setTodayTodo(todos?.filter(tds => tds.dates === todayDate))
  }, [todos]);

  
  return (
    <div className="TodosList p-4">
      <div className="text-center">
        <h3>Today's List: </h3>
      </div>

      {
        todayTodo?.map(todo => <Todo todo={todo} todayDate={todayDate} checked= {todo.checked} dayNameShow= {true} random={random++} key={todo.id}></Todo>)
      }
    </div>
  );
};

export default Today;
