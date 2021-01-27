FROM node:10-alpine

RUN mkdir -p /code/client/node_modules && chown -R node:node /code/client

WORKDIR /code/client

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

# CMD [ "npm", "start" ]