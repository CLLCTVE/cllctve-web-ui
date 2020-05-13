FROM library/node:11.15.0
MAINTAINER BBAILEY

RUN mkdir -p /usr/src/app
CMD cd /usr/src/app
# Everything under WORKDIR will assume your container destination is this directory
WORKDIR /usr/src/app

COPY Makefile package.json package-lock.json ./

RUN npm install --quiet

COPY ./ ./

EXPOSE 3000

# Start Application
CMD ["npm", "start" ]
