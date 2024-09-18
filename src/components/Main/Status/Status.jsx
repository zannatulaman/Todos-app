import React, { useState } from "react";
import ShowAll from "../ShowAll/ShowAll";
import Completed from "../Completed/Completed";
import Uncompleted from "../Uncompleted/Uncompleted";

const Status = ({ todos, setTodos, all, setAll }) => {
  const [optionTodos, setOptionTodos] = useState("");

  const handleOption = (e) => {
    // console.log(e.target.value);

    if (e.target.value === "alls") {
      setOptionTodos("alls");
    }
    if (e.target.value === "completed") {
     setOptionTodos("completed");
    }
    if (e.target.value === "uncompleted") {
      setOptionTodos("uncompleted");
    }
  };

  return (
    <div>
      <div className="text-center TodosList p-4">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleOption}
        >
          <option selected>Please choose an option</option>
          <option value="alls">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      <div>
            {
              optionTodos ==="alls" && <ShowAll todos ={todos}  setAll={setAll}></ShowAll>
            }

            {
              optionTodos === "completed" && <Completed todos ={todos} setTodos={setTodos}></Completed>
            }

            {
             optionTodos ===  "uncompleted" && <Uncompleted todos ={todos} setTodos={setTodos}></Uncompleted>
            }
        </div>
        
    </div>
  );
};

export default Status;
