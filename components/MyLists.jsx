import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteLocalData, saveLocalData } from "../src/hooks/localStorage";
const MyLists = ({ data, setData, setEditIndex }) => {
  const navigate = useNavigate();
  const deleteTask = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    saveLocalData(updated);
    deleteLocalData(index);
  };
  const editTask = (index) => {
    setEditIndex(index);
    navigate("/create");
  };
  return (
    <div className="w-[90%] sm:w-[90%] md:max-w-3xl mx-auto mt-16 mb-6 md:p-4 p-2 bg-gray-50 rounded-xl border-2 shadow-lg border-red-500">
      <h1 className="text-xl font-semibold text-center mb-6">My Tasks List</h1>
      {data.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks available. Create one!
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {data.map((task, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border p-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-2">{task.taskTitle}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {task.description}
              </p>{" "}
              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <strong>Category:</strong> {task.category}{" "}
                </p>
                <p>
                  <strong>Priority:</strong> {task.priorityLevel}{" "}
                </p>
                <p>
                  <strong>Due Date:</strong> {task.dueDate}{" "}
                </p>
              </div>
              <div className="flex justify-between">
                {" "}
                <button
                  onClick={() => editTask(index)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      )}{" "}
    </div>
  );
};
export default MyLists;

