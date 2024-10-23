FROM node:18
# Step 1: Specify the base image
WORKDIR /usr/src/app
# Step 2: Set the working directory inside the container
COPY package*.json ./
# Step 3: Copy the application code
RUN npm install
# Step 4: Install dependencies
COPY . .
EXPOSE 80
# Step 5: Expose a port (optional)
USER root

# Step 6: Specify the command to run the app
CMD ["node", "app.js"]
