FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5172
CMD ["npm", "run", "dev"]