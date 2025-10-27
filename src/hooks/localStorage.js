// src/hooks/localStorage.js
const STORAGE_KEY = "myTasks";

export const getLocalData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

export const saveLocalData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const deleteLocalData = (index) => {
  const tasks = getLocalData();
  tasks.splice(index, 1);
  saveLocalData(tasks);
};

export const updateLocalData = (index, updatedTask) => {
  const tasks = getLocalData();
  tasks[index] = updatedTask;
  saveLocalData(tasks);
};
