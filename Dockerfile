FROM node:14-alpine

COPY ./src/*.js ./src/*.json /var/lib/jenkins/workspace/kbc17a19-asgn/
# COPY ./src/index.js /index.js
# COPY ./src/package.json /package.json
# COPY ./src/package-lock.json /package-lock.json