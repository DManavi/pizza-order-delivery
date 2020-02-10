FROM node:10-alpine

WORKDIR /app

COPY bin ./bin
COPY config ./config
COPY middlewares ./middlewares
COPY routes ./routes
COPY services ./services
COPY validations ./validations
COPY package*.json ./
COPY app.js ./

RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
        wget \
        git \
        python2

RUN npm install --only=prod

CMD ["node", "/app"]