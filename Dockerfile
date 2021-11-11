FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
RUN npm install --save --legacy-peer-deps

EXPOSE 3000

COPY . /app

CMD ["react-scripts", "start"]