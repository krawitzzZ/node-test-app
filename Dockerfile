FROM node:5.10.0

# Create app directory
RUN mkdir -p /usr/src/node-app
WORKDIR /usr/src/node-app

# Install app dependencies
COPY package.json /usr/src/node-app/
RUN npm install

# Bundle app source
COPY . /usr/src/node-app

EXPOSE 3000
CMD [ "npm", "start" ]
