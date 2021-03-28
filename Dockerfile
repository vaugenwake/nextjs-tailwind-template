FROM node:14.16.0-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["npm", "run", "dev"]