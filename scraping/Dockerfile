FROM node:20.15.1-alpine

WORKDIR /app

COPY . /app
RUN npm ci
RUN npm run build

CMD ["npm", "start"]