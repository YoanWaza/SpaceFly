#!/bin/bash
echo "Setting up the development environment..."

# Export environment variables
export ENV_FILE="./backend/.env.dev"

# Start the development environment
docker-compose --env-file $ENV_FILE up -d --build

echo "Development environment is up and running!"
