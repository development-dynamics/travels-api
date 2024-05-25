# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --global --force yarn
RUN yarn install

# Copy app source code
COPY . .

# Build Prisma
RUN yarn prisma generate

# Build the app
RUN yarn build

# Start the app
CMD ["yarn", "start:dev"]
