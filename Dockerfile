FROM node:16.17.1-buster

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . /app

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]