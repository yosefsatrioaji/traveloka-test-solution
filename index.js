const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Create a new todo
app.post("/todo", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving todo");
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) throw new Error("No todos found");
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving todos");
  }
});

// Get a todo by ID
app.get("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) throw new Error("No todo found");
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error retrieving todo with id ${req.params.id}`);
  }
});

// Update a todo by ID
app.put("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) throw new Error("No todo found");
    if (req.body.title) {
      todo.title = req.body.title;
    }
    if (req.body.description) {
      todo.description = req.body.description;
    }
    if (req.body.completed) {
      todo.completed = req.body.completed;
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todo, {new: true});
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating todo with id ${req.params.id}`);
  }
});

// Delete a todo by ID
app.delete("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) throw new Error("No todo found");
    const removedTodo = await Todo.findByIdAndRemove(req.params.id);
    console.log(removedTodo);
    res.status(200).send(`Successfully deleted todo with id ${todo._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting todo with id ${req.params.id}`);
  }
});

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
