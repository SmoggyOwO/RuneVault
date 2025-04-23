FROM node:20 AS build

WORKDIR /app

# Install frontend dependencies
COPY package*.json ./
RUN pnpm install

# Copy frontend source code
COPY . .

# Build the frontend
RUN pnpm run build

# Stage 2: Serve the frontend
FROM nginx:alpine

# Copy the built frontend files to the Nginx container
COPY --from=build /dist /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]