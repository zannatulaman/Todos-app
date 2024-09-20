
import React, { useContext, useState } from "react";
import Todo from "../../Todo/Todo";
import { useEffect } from "react";
import moment from "moment/moment";
import { ExampleContext } from "../../../App";

const NextSeven = ({}) => {

  const [todos, setTodos] = useContext(ExampleContext)

  const [weekTodos, setWeekTodos] = useState([]);

  useEffect(() => {
    const days = ["0", "1", "2", "3", "4", "5", "6"];

    const sortedTodosByDay = days.map((day) => {
      return {
        todos: todos?.filter((todo) => todo.day === day),
        number: day, // use day instead of days array
      };
    });
     
    console.log("Sorted", sortedTodosByDay);

    const today = parseInt(moment().format("d"));

    console.log('Today', today);

    const arrangeDays = sortedTodosByDay.slice(today);
    console.log('Arrange', arrangeDays);

    const reArrangeDays = sortedTodosByDay.slice(0, today);

    console.log('Rearrange', reArrangeDays);

    const concatArray = arrangeDays.concat(reArrangeDays);
    setWeekTodos(concatArray);
  }, [todos]);

 

  return (
    <div className="TodosList p-4">
      {weekTodos.map((day) => (
        <div  key={ day.number}>
          <div className="day">
            <h5 className="name">
              {moment(day.number, "d").format("dddd")}
              {day.number === moment().format("d") && " (Today)"}
              -
              ({day.todos?.length})
            </h5>
          </div>
          {day.todos.length > 0 && (
            <div className="todos">
              {day.todos.map((todo) => (
                <Todo checked={todo.checked} key={todo.id} todo={todo} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NextSeven;

