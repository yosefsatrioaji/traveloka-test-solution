import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  let response = http.get("http://localhost:80/todos");
  //check is response code is 200
  check(response, {
    "status is 200": (res) => res.status === 200,
  });
  console.log(response.json());
  sleep(1);
}
