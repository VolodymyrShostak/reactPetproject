import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://6391c7c6b750c8d178cd152a.mockapi.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get("/todos");
      if (!response.data) {
        throw new Error("Server error!");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodos",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.delete(`/todos/${id}`);
      if (!response.data) {
        throw new Error("Server error!");
      }

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodos",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post(`/todos`, todo);

      if (!response.data) {
        throw new Error("Server error!");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeCompleted = createAsyncThunk(
  "todo/changeCompleted",
  async (todo, { rejectWithValue }) => {
    const { id, completed } = todo;
    try {
      const response = await axiosConfig.put(`/todos/${id}`, {
        completed: !completed,
      });

      if (!response.data) {
        throw new Error("Server error!");
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeTodo = createAsyncThunk(
  "todo/changeTodo",
  async (todo, { rejectWithValue }) => {
    const { id, text } = todo;
    try {
      const response = await axiosConfig.put(`/todos/${id}`, {
        text,
      });

      if (!response.data) {
        throw new Error("Server error!");
      }
      return todo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
