import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //test hello world
  const helloWorld = http.get("http://localhost:80/");
  //check is response code is 200
  check(helloWorld, {
    "Hello World HTTP Status is 200": (res) => res.status === 200,
    "Hello World HTTP Response contains 'Hello World'": (res) =>
      res.body.includes("Hello World"),
  });
  sleep(1);

  //test create todo
  const createpayload = JSON.stringify({
    title: "New Todo 3",
    description: "New Todo Description",
    completed: false,
  });
  const createResponse = http.post(
    "http://localhost:80/todo",
    createpayload,
    params
  );
  const createdTodoId = createResponse.json()._id;
  check(createResponse, {
    "Create Todo HTTP Status is 201": (res) => res.status === 201,
  });

  //test get all todos
  const getAllTodos = http.get("http://localhost:80/todos");
  check(getAllTodos, {
    "Get all todos HTTP status is 200": (res) => res.status === 200,
  });

  //test get todo by id
  const getTodoById = http.get("http://localhost:80/todo/" + createdTodoId);
  check(getTodoById, {
    "Get todo by id HTTP status is 200": (res) => res.status === 200,
    "Get todo by id HTTP Response contains id": (res) =>
      res.body.includes(createdTodoId),
  });

  //test edit todo by id
  const editpayload = JSON.stringify({
    title: "edited Todo 3",
    description: "edited Todo Description",
    completed: true,
  });
  const editResponse = http.put(
    "http://localhost:80/todo/" + createdTodoId,
    editpayload,
    params
  );
  check(editResponse, {
    "Edit Todo HTTP Status is 200": (res) => res.status === 200,
    "Edit Todo HTTP Response contains id": (res) =>
      res.body.includes(createdTodoId),
  });

  //test delete todo by id
  const deleteResponse = http.del("http://localhost:80/todo/" + createdTodoId);
  check(deleteResponse, {
    "Delete Todo HTTP Status is 200": (res) => res.status === 200,
    "Delete Todo HTTP Response contains id": (res) =>
      res.body.includes(createdTodoId),
  });
}
