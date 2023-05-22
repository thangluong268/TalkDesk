FROM node:lts-alpine

RUN npm install -g nodemon http-server


WORKDIR /app

COPY package*.json ./

RUN npm install
RUN chown -R node /app/node_modules

COPY . .

EXPOSE 5000

CMD [ "http-server", "dist" ]