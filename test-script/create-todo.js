import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  const url = "http://localhost:80/todo";
  const payload = JSON.stringify({
    title: "New Todo 3",
    description: "New Todo Description",
    completed: false,
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(url, payload, params);
  check(response, {
    "status is 201": (res) => res.status === 201,
  });
  const createdTodoId = response.json()._id;
  console.log(createdTodoId);

  sleep(1);
}
