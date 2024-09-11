#!/bin/bash

# Navigate to your project directory (optional, remove if not needed)
# cd /path/to/your/project

# Add all changes
git add .

# Commit with a fun message
git commit -m "automatic push for website updates/changes"

# Attempt to push to the main branch
git push origin main

# Check if the push was successful
if [ $? -ne 0 ]; then
  echo "Push failed, attempting to pull and rebase, then push again..."

  # Pull the latest changes with rebase
  git pull origin main --rebase

  # Push again after rebase
  git push origin main
fi
