FROM node:20-alpine

WORKDIR /src/

COPY ./parser/ /src/parser/
COPY ./cli/ /src/cli/
COPY ./amrfinder-review/curated_mechanisms.json /src/amrfinder-review/curated_mechanisms.json

ARG TAXID

ENV taxid=$TAXID

ENTRYPOINT [ "node", "/src/cli/index.js" ]
