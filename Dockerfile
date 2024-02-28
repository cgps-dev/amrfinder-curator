FROM node:20-alpine

WORKDIR /src/

COPY ./ /src/

RUN npm install

ARG TAXID

ENV taxid=$TAXID

ENTRYPOINT [ "node", "/src/cli/index.js" ]
