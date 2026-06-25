import axios from "axios";

const API_URL = "https://localhost:7234/api/todo";

export const getTodos = () => axios.get(API_URL);

export const addTodo = (todo) =>
  axios.post(API_URL, todo);

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const updateTodo = (id, todo) =>
  axios.put(`${API_URL}/${id}`, todo);

export const searchTodos = (keyword) =>
  axios.get(`${API_URL}/search/${keyword}`);

export const getByCategory = (category) =>
  axios.get(`${API_URL}/category/${category}`);

export const getByPriority = (priority) =>
  axios.get(`${API_URL}/priority/${priority}`);