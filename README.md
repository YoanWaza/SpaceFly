# Flight Booking System
## Project Overview
This project is a full-stack flight booking application with automated CI/CD pipelines. It features:
* A React frontend for user interaction.
* A Node.js backend for API services.
* A PostgreSQL (or MongoDB Atlas, if switched) database for data storage.
* Deployment environments for development, staging, and production.

## Features
* Users can browse and book flights.
* Backend API handles flight data and bookings.
* Frontend communicates seamlessly with the backend.
* Automated testing and deployment using GitHub Actions.

## Technology Stack
### Frontend
* React.js
* Axios for API communication
### Backend
* Node.js with Express.js
* PostgreSQL (local development)
* MongoDB Atlas (optional for cloud databases)
### Database
* PostgreSQL (local development, staging, production)
* Optionally switch to MongoDB Atlas for staging/production with a cloud database.
### DevOps
* Docker and Docker Compose
* GitHub Actions for CI/CD
* Shell scripts for automated environment setup

## Setup Instructions
### Prerequisites
* Docker installed.
* Node.js installed (for local testing without Docker).

### Local Development
1.  Clone the repository:

      ```git clone https://github.com/YoanWaza/SpaceFly.git```

      ```cd SpaceFly```


2. Set up environment variables:
    * Create .env.dev in the backend directory:

      ```PORT=5001
      DB_HOST=db
      DB_USER=postgres
      DB_PASSWORD=postgres
      DB_NAME=flightdb
      DB_PORT=5432
      ```


3. Run the setup script:

      ```./setup-dev.sh```


4. Access the application:

      Frontend: http://localhost:3000

      Backend: http://localhost:5001

### Staging
1. Switch to the staging branch:

      ```git checkout staging```


2. Set up environment variables:
      * Create .env.staging in the backend directory (similar to .env.dev):

      ```PORT=5001
      DB_HOST=db
      DB_USER=postgres
      DB_PASSWORD=postgres
      DB_NAME=flightdb
      DB_PORT=5432
      ```

        Note: If using a cloud database (e.g., MongoDB Atlas), update DB_HOST and other credentials accordingly.

4. Run the staging setup script:

      ```chmod +x setup-dev.sh```   
      ```./setup-staging.sh```


5. Verify the deployment:
      * Use the staging URL (if deployed to a cloud provider).

### Production
1. Switch to the main branch:

      ```git checkout main```


2. Set up environment variables:
   
      * Create .env.prod in the backend directory (similar to .env.dev):
        
      ```PORT=5001
      DB_HOST=db
      DB_USER=postgres
      DB_PASSWORD=postgres
      DB_NAME=flightdb
      DB_PORT=5432
      ```

        Note: If using a cloud database (e.g., MongoDB Atlas), update DB_HOST and other credentials accordingly.

3. Run the staging setup script:

      ```./setup-prod.sh```


4. Verify the deployment:
      * Use the staging URL (if deployed to a cloud provider).

## CI/CD Pipelines
### Build and Test (CI)
* Runs on push or pull requests to dev, staging, or main.
* Executes:
    * Backend tests (npm test in ./backend).
    * Frontend tests (npm test in ./frontend).
### Deployment
* Automated deployments for each branch:
    * dev: Development environment.
    * staging: Staging environment.
    * main: Production environment.

## Testing
### Unit and Integration Tests
* Backend:
    * Run tests:
        ```npm test```


* Frontend:
    * Run tests:
        ```npm test```


### End-to-End Tests
* Uses Cypress:
      ```npx cypress open```



## Directory Structure
```project-root/
├── backend/
│   ├── src/
│   ├── tests/
│   ├── .env.dev
│   ├── .env.staging
│   ├── .env.prod
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── tests/
│   └── Dockerfile
├── db/
│   ├── init.sql
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docker-compose.yml
├── setup-dev.sh
├── setup-staging.sh
└── setup-prod.sh
```

## Future Improvements
* Deploy to a cloud platform like AWS, Render, or Heroku for staging and production.
* Implement user authentication for bookings.
* Enhance database scalability and switch to MongoDB Atlas for production-ready deployments.
* Add monitoring tools for error tracking and performance.

## License
This project is licensed under the MIT License.

