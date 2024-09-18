// import { Button } from 'react-bootstrap';
import { useContext, useState } from "react";
import { BsListUl } from "react-icons/bs";
import { CgCalendarNext, CgToday } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { GrStatusInfo } from "react-icons/gr";

import { IoIosTime, IoMdAdd } from "react-icons/io";
import Today from "../Today/Today";
import NextSeven from "../NextSeven/NextSeven";
import ShowAll from "../ShowAll/ShowAll";
import Status from "../Status/Status";
import ModalComp from "../Modal/Modal";
import { MdCancel, MdDateRange } from "react-icons/md";

//time picker components
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

// date picker components
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { ExampleContext } from "../../../App";

const Sidebar = () => {
  const [todos, setTodos,  showModal, setShowModal] = useContext(ExampleContext);

  

  // console.log('Showmodal', showModal);

  
  const [all, setAll] = useState("");
  // const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [err, setErr] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Date', date);
    if (name && time) {
      setTodos([
        ...todos,
        {
          id: Math.round(Math.random() * 1000),
          names: name,
          dates: moment(date).format("YYYY-MM-DD"),
          times: moment(time, "HH:mm:ss").format("hh:mm a"),
          day : moment(date).format("d"),
          checked: false
        },
      ]);
      setName("");
      setTime("");
      setShowModal(false);
    } else {
      setErr("Please provide name and time!");
    }

    // console.log("Todos", todos);

  };
  
  

  return (
    <div className="sidebar">
      <div className="sidebar-box">
        <div className="text-center">
          <p className="todosOf">
            <FcTodoList></FcTodoList>  Todos Of
          </p>
          <button
            className="add-btn p-2"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
          <IoMdAdd />  Make a Todo
          </button>
        </div>

        <div className="todoBox-container">
          <div className="todosOf_item">
            <button
              className="buttons px-4 py-2 mt-2 todosOf_item"
              onClick={(e) => {
                e.preventDefault();
                setAll("today");
                
              }}
              
             
            >
              <CgToday></CgToday>  Today
            </button>

            <button
              className="buttons px-4 py-2 mt-2 todosOf_item"
              onClick={(e) => {
                e.preventDefault();
                setAll("Next7");
               
              }}
             
            >
              <CgCalendarNext></CgCalendarNext>  Next 7 Days
            </button>

            <button
              className="buttons px-4 py-2 mt-2 todosOf_item"
              onClick={(e) => {
                e.preventDefault();
                setAll("ShowAll");
              }}
            >
              <BsListUl></BsListUl>  Show All
            </button>

            <button
              className="buttons px-4 py-2 mt-2 todosOf_item"
              onClick={(e) => {
                e.preventDefault();
                setAll("Status");
              }}
            >
              <GrStatusInfo></GrStatusInfo> Status
            </button>
          </div>

          <div className="todoBox">
            {all === "today" && <Today todos ={todos} setTodos={setTodos}></Today>}
            {all === "Next7" && <NextSeven todos ={todos} setTodos={setTodos}></NextSeven>}
            {all === "ShowAll" && <ShowAll todos ={todos} setTodos={setTodos} setAll={setAll} ></ShowAll>}
            {all === "Status" && <Status todos ={todos} setAll={setAll} ></Status>}
          </div>
        </div>

        <ModalComp showModal={showModal} setShowModal={setShowModal}>
          <div className="modalBox mt-4">
            <div className="text-center">
              <h2>Add A New Todo</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <input
                  type="text"
                  className="todoName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  // value={date}
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </div>

              <div className="timePicker">
                <p className="pickTime">
                  <IoIosTime></IoIosTime>
                  <span>Pick a Time</span>
                </p>
                <TimePicker
                  onChange={(time) => setTime(time)}
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

              {err && (
                <div className="text-center">
                  <p style={{ color: "red", marginTop: "30px" }}>{err}</p>
                </div>
              )}

              <div className="text-center mt-4">
                <input
                  type="submit"
                  value="Add Todo"
                  className="add-btn"
                />
              </div>

              <p onClick={() => setShowModal(false)}>
                <MdCancel className="cancelIcon"></MdCancel>
              </p>
            </form>
          </div>
        </ModalComp>
      </div>
    </div>
  );
};

export default Sidebar;
