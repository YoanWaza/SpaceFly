#!/bin/bash
echo "Setting up the staging environment..."

# Export environment variables
export ENV_FILE="./backend/.env.staging"

# Start the staging environment
docker-compose --env-file $ENV_FILE up -d --build

echo "Staging environment is up and running!"
