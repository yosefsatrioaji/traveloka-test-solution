#!/bin/bash

# Prompt user to enter the branch to rollback
read -p "Enter the branch to rollback (e.g., solutions/task1, solutions/task2): " branch

# Check if the branch exists
if ! git rev-parse --quiet --verify "$branch"; then
  echo "Branch '$branch' does not exist. Exiting."
  exit 1
fi

# Switch to the selected branch
git checkout $branch

# Run setup.sh
./setup.sh