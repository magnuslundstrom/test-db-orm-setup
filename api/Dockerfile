FROM node:latest

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

RUN mkdir public
RUN mkdir public/profile-images
RUN chmod 755 public/profile-images

CMD ["npm", "run", "dev"]