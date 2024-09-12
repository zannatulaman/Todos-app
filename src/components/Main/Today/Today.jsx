import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Todo from "../../Todo/Todo";

const Today = ({ todos, setTodos }) => {
  // console.log('Today', todos);
  let random = 0;
  const [todayTodo, setTodayTodo] = useState([]);

  const date = new Date();
  const todayDate = moment(date).format("MMM Do YY");


  useEffect(() => {
    setTodayTodo(todos.filter((tds) => tds?.dates === todayDate));
  }, [todos]);

  return (
    <div className="TodosList p-4">
      <div className="text-center">
        <h3>Today's List: </h3>
      </div>

      {
        todayTodo.map((todo) => <Todo todo={todo} todayDate={todayDate} checked= {todo.checked} dayNameShow= {true} random={random++} key={todo.id}></Todo>)
      }
    </div>
  );
};

export default Today;
