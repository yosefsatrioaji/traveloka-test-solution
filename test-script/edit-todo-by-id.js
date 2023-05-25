import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  let id = "646fc5c9c06234eaf715b7d3";
  const url = "http://localhost:80/todo/" + id;
  const payload = JSON.stringify({
    title: "edited Todo 3",
    description: "edited Todo Description",
    completed: true,
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.put(url, payload, params);
  check(response, {
    "status is 200": (res) => res.status === 200,
  });
  check(response, {
    "Response contains id": (res) => res.body.includes(id),
  });
  console.log(response.json());
  sleep(1);
}
