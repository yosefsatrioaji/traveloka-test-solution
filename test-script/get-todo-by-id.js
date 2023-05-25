import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  let id = "646fc5c9c06234eaf715b7d3";
  let response = http.get("http://localhost:80/todo/" + id);
  //check is response code is 200
  check(response, {
    "status is 200": (res) => res.status === 200,
  });
  //check if id is same as the one we requested
  check(response, {
    "Response contains id": (res) => res.body.includes(id),
  });
  console.log(response.json());
  sleep(1);
}
