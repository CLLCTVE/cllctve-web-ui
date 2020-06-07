FROM gcr.io/google-appengine/nodejs

RUN mkdir -p /usr/src/app
# Everything under WORKDIR will assume your container destination is this directory
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

#EXPOSE 3001
EXPOSE 8080

COPY ./ ./

RUN npm install

## Launch your application
CMD ["npm", "start"]

