# DevOps Test Solution Task 1
This my solution for the task 1 of the DevOps test.
I used javascript and expressjs framework to create simple Hello World HTTP.
I used docker to containerize the application and docker-compose to run the application.
And for the loadtest I used k6.io.

## How to run locally
- Clone the repository
- Switch to branch solutions/task1
- Install docker if not already installed. How to install docker: https://docs.docker.com/engine/install/ubuntu/
- Install docker-compose v2 if not already installed. How to install docker-compose: https://docs.docker.com/compose/install/standalone/
- Run setup.sh
```console
$ ./setup.sh
```

## How to run loadtest
- Install k6.io if not already installed. How to install k6.io: https://k6.io/docs/getting-started/installation/
- Switch to folder loadtest
```console
$ cd loadtest
```
- Run the following command to run the loadtest
```console
$ k6 run --vus 100 --iterations 1000 loadtest.js
```
It will run 100 virtual users for 1000 iterations.

## Limitations
- The solution must be run on a Linux ubuntu
- Docker must be installed on the machine
- This solutions is tested on Ubuntu 22.04.2 LTS running on WSL2 on Windows 11
- Docker compose must version 2
