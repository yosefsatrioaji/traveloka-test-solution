# DevOps Test Solution Task 2
This my solution for the task 2 of the DevOps test.
I used javascript and expressjs framework to create simple ToDo App.
I used docker to containerize the application and kubernetes to run the application.
And for the test script I used k6.io.

## How to run locally
- Clone the repository
- Switch to branch solutions/task2
- Install docker if not already installed. How to install docker: https://docs.docker.com/engine/install/ubuntu/
- Install kubectl if not already installed. How to install kubectl: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
- Install minikube if not already installed. How to install minikube: https://minikube.sigs.k8s.io/docs/start/
- Open seperate terminal and run
```console
$ sudo dockerd
$ minikube start
$ minikube tunnel
```
- Run setup.sh
```console
$ ./setup.sh
```

## How to run test
- Install k6.io if not already installed. How to install k6.io: https://k6.io/docs/getting-started/installation/
- Switch to folder test-script
```console
$ cd test-script
```
- Run the following command to run the script
```console
$ k6 run crud-test.js
```

## How to rollback
- Run rollback.sh
```console
$ ./rollback.sh
```
Type branch name to rollback, for example solutions/task1 to rollback to the task 1 solution.

## How to scale down/up
- Open deployment.yaml
- Change replicas to desired number
- Run the following command
```console
$ ./run-kubernetes.sh
```


## Limitations
- The solution must be run on a Linux ubuntu
- This solutions is tested on Ubuntu 22.04.2 LTS running on WSL2 on Windows 11
- build-image.sh is configured to use minikube

## Why?
### Why I used javascript and expressjs framework?
I used javascript because it is the language I am most familiar with. And I used expressjs framework because it is the most popular framework for nodejs.
### Why k6.io?
I used k6.io because it scripted using javascript, which is the language I am most familiar with.