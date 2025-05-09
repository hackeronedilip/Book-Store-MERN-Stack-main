# Use the official Node.js Alpine image as the base image (much smaller than the standard node image)
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies (using the --production flag for only production dependencies)
RUN npm install --production

# Copy the rest of the app's code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Set the environment variable to specify the production environment
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
