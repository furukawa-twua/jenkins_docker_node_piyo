FROM node:14-alpine

USER node

WORKDIR /home/node

COPY ./src/*.js ./src/*.json .