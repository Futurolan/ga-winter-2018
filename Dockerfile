FROM node:alpine

EXPOSE 3000

ARG EDITION_ID=40
ARG BACKEND_API_URL=https://backoffice.gamers-assembly.net
ARG BACKEND_LOCAL_API_URL=http://drupal
ARG SOCKET_URL=https://socket.gamers-assembly.net
ARG BASE_URL=https://winter2018.gamers-assembly.net

WORKDIR /usr/src/ga-client
COPY . .
RUN npm install
RUN npm run-script build


CMD npm start
