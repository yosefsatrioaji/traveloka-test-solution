# DevOps Test Solution Task 1
This my solution for the task 1 of the DevOps test.
I used javascript and expressjs framework to create simple Hello World HTTP.
I used docker to containerize the application and kubernetes to run the application.
And for the loadtest I used k6.io.

## How to run locally
- Clone the repository
- Switch to branch solutions/task1
- Install docker if not already installed. How to install docker: https://docs.docker.com/engine/install/ubuntu/
- Install kubectl if not already installed. How to install kubectl: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
- Install minikube if not already installed. How to install minikube: https://minikube.sigs.k8s.io/docs/start/
- Open seperate terminal and run
```console
$ minikube start
$ minikube tunnel
```
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
- This solutions is tested on Ubuntu 22.04.2 LTS running on WSL2 on Windows 11
- build-image.sh is configured to use minikube

## Why?
### Why I used javascript and expressjs framework?
I used javascript because it is the language I am most familiar with. And I used expressjs framework because it is the most popular framework for nodejs.
### Why k6.io?
I used k6.io because it scripted using javascript, which is the language I am most familiar with.