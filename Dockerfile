FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
COPY package.json package-lock.json .

RUN npm install -g @angular/cli

RUN npm install --legacy-peer-deps

COPY . . 
EXPOSE 4200

# CMD ["npm", "run", "start"]
CMD ["ng", "serve", "--host", "0.0.0.0"]