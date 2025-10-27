import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveLocalData } from "../src/hooks/localStorage";

const Create = ({ data, setData, editIndex, setEditIndex }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Prefill form when editing
  useEffect(() => {
    if (editIndex !== null && data[editIndex]) {
      const task = data[editIndex];
      setValue("taskTitle", task.taskTitle);
      setValue("description", task.description);
      setValue("category", task.category);
      setValue("priorityLevel", task.priorityLevel);
      setValue("dueDate", task.dueDate);
    }
  }, [editIndex, data, setValue]);

  const onSubmit = (formData) => {
    let updatedData;

    if (editIndex !== null) {
      // Update existing
      updatedData = [...data];
      updatedData[editIndex] = formData;
      setEditIndex(null);
    } else {
      // Add new
      updatedData = [...data, formData];
    }

    setData(updatedData);
    saveLocalData(updatedData);

    // Redirect to MyLists after saving
    navigate("/mylists");
  };

  return (
    <div className="w-[90%] sm:w-[85%] md:max-w-3xl mx-auto mt-16 mb-6 p-6 bg-gray-50 rounded-xl border-2 border-red-500 shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        {editIndex !== null ? "Edit Task" : "Create Task"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Task Title</label>
          <input
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            {...register("taskTitle", { required: "Task title is required" })}
          />
          {errors.taskTitle && (
            <p className="text-red-500 text-sm">{errors.taskTitle.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            {...register("category", { required: "Category is required" })}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Urgent">Urgent</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Priority Level
          </label>
          <select
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            {...register("priorityLevel", {
              required: "Priority level is required",
            })}
          >
            <option value="" hidden>
              Select Level
            </option>
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
          {errors.priorityLevel && (
            <p className="text-red-500 text-sm">
              {errors.priorityLevel.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            {...register("dueDate", { required: "Due date is required" })}
          />
          {errors.dueDate && (
            <p className="text-red-500 text-sm">{errors.dueDate.message}</p>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              setEditIndex(null);
              navigate("/mylists");
            }}
            className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
