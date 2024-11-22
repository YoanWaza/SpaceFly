#!/bin/bash
echo "Setting up the production environment..."

# Export environment variables
export ENV_FILE="./backend/.env.prod"

# Start the production environment
docker-compose --env-file $ENV_FILE up -d --build

echo "Production environment is up and running!"
