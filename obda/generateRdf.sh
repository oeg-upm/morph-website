#!/bin/bash
path=$(pwd)
yarrrml-parser -i ${path}/mapping.working.yaml -o ${path}/mapping.ttl
docker rm -f rdfizerContainer
sleep 5
docker run --name rdfizerContainer -d -p 4000:4000 -v ${path}:/data rdfizer
sleep 5
curl http://localhost:4000/graph_creation/data/config.ini

