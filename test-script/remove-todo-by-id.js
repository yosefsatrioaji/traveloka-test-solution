import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  let id = "646fc5c9c06234eaf715b7d3";
  const url = "http://localhost:80/todo/" + id;

  const response = http.del(url);
  check(response, {
    "status is 200": (res) => res.status === 200,
  });
  check(response, {
    "Response contains id": (res) => res.body.includes(id),
  });
  console.log(response.body);
  sleep(1);
}
