FROM node:20-alpine

WORKDIR /src/

COPY ./ /src/

RUN npm install

ENTRYPOINT [ "node", "/src/cli/index.js"]
