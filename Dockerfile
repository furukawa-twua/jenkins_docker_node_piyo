FROM node:14-alpine

# COPY ./src/*.js ./src/*.json ./
COPY ./src/index.js /var/lib/jenkins/workspace/kbc17a19-asgn/index.js
COPY ./src/package.json /var/lib/jenkins/workspace/kbc17a19-asgn/package.json
COPY ./src/package-lock.json /var/lib/jenkins/workspace/kbc17a19-asgn/package-lock.json