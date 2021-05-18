# base image
FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

# EXPOSE 14441

# CMD [ "npm", "start" ]

CMD [ "node", "index.js" ]