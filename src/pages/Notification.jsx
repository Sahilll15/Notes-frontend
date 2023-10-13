import React, { useEffect, useState } from "react";
import Alternates from "../components/Layout/Setting";
import { getTodosByUserId, createTodo, updateTodo, deleteTodo } from "../redux/todo/todoActions";
import { useSelector, useDispatch } from 'react-redux'
const Notification = () => {
  const dispatch = useDispatch()
  // const [tasks, setTasks] = useState([]);

  const todos = useSelector((state) => state?.todo?.todos) || [];
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };


  const handleAddTask = async (e) => {
    e.preventDefault();
    await dispatch(createTodo({
      title: newTask
    }))

    setNewTask("");
    await dispatch(getTodosByUserId())
  }

  const handleupdate = async (id) => {
    await dispatch(updateTodo(id));
    await dispatch(getTodosByUserId())
  }


  useEffect(() => {
    dispatch(getTodosByUserId())
  }, [dispatch])



  return (
    <Alternates>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 ">
          <div className=" mt-5">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm md:max-w-2xl mt-1  p-6">
              <div className="font-semibold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-1   p-6">
              <div className="font-semibold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-1 p-6">
              <div className="font-semibold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>
          </div>
        </div>

        {/* Right side - 2/3 */}
        <div className="xl:w-2/4 border-2  mx-auto mt-9">
          <div className="container border-2 bg-white rounded-xl overflow-hidden shadow-lg mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">My To-Do List</h1>
            <form onSubmit={handleAddTask}>
              <div className="flex space-x-2 mb-4">
                <input
                  id="task"
                  className="flex-1 border rounded py-2 px-3"
                  type="text"
                  placeholder="Add a new task..."

                  onChange={handleNewTaskChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
            <ul id="taskList">
              {
                todos?.length === 0 && <h1 className="text-2xl">No Task Found</h1>
              }

              {todos?.length !== 0 && Array.isArray(todos) && todos?.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-300 py-2"
                >
                  <div className="flex items-center space-x-2 w-4/5">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      id={`complete-${index}`}
                      checked={task.completed}
                      onClick={() => { handleupdate(task._id) }}

                    />
                    <div className="text-left">


                      <label
                        htmlFor={`complete-${index}`}
                        className={task.completed ? "line-through text-lg" : "text-lg"}
                      >
                        {task.title}
                      </label>
                      <h1>{new Date(task.createdAt).toLocaleTimeString()}</h1>
                    </div>
                  </div>
                  <div>

                    <button
                      className="text-white border-2 bg-red-500 rounded-md border-red-500 p-1 ml-1 hover:bg-red-600"
                      onClick={async () => {
                        await dispatch(deleteTodo(task?._id))
                        await dispatch(getTodosByUserId())
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Alternates>
  );
};

export default Notification;