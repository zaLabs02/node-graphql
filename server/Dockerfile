FROM node:10-alpine

RUN mkdir -p /code/server/node_modules && chown -R node:node /code/server

WORKDIR /code/server

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

# EXPOSE 8080

# CMD [ "npm", "start" ]