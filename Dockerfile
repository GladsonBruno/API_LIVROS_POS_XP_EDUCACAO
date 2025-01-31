FROM node:lts-alpine

# Create app directory
RUN mkdir -p /home/code
RUN mkdir -p /home/code/build
WORKDIR /home/code

# Install app dependencies
COPY ./ /home/code
RUN touch .env
RUN npm install
RUN npm install typescript -g 

EXPOSE 8080

ENV TZ="America/Sao_Paulo"

CMD npm run start_docker