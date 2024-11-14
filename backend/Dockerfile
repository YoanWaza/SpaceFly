# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code into the container
COPY . .

# Expose the port (make sure it matches the one in your backend config)
EXPOSE 5001

# Start the application
CMD ["node", "index.js"]
