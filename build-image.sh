#!/bin/bash
docker build -t traveloka-test-solution:v1 .
minikube image load traveloka-test-solution:v1