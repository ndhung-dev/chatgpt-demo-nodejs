FROM node:18.14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install nodemon -g
RUN npm install chatgpt -g
RUN npm install
COPY . /usr/src/app
EXPOSE 5000
CMD [ "nodemon", "index.js" ]