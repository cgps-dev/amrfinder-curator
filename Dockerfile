FROM node:20-alpine

WORKDIR /src/

COPY ./parser/ /src/parser/
COPY ./cli/ /src/cli/
COPY ./curated-mechanisms.json /src/curated-mechanisms.json

ARG TAXID

ENV taxid=$TAXID

ENTRYPOINT [ "node", "/src/cli/index.js" ]
