FROM nginx:alpine

RUN apk update && apk upgrade && apk add --no-cache nodejs npm


WORKDIR /app

COPY package.json package-lock.json ./
COPY scripts ./scripts
COPY abis ./abis

RUN npm install

COPY . .

WORKDIR /

ENTRYPOINT ["/bin/sh", "/app/scripts/deploy.sh"]
