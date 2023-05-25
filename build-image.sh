#!/bin/bash
docker build -t traveloka-test-solution:v2 .
minikube image load traveloka-test-solution:v2