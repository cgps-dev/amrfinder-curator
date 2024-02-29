#!/bin/bash

set -e

for TAXID in 1280 470 287 485
do
  docker build . \
    --build-arg TAXID=${TAXID} \
    --tag public.ecr.aws/e2u6m3q5/dev-tools:amrfinder-curator-${TAXID}
  docker push "$_"
done
