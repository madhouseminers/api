FROM node:14-alpine

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

CMD npm start
