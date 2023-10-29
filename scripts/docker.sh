#!/bin/bash

TAG=`cat package.json | egrep '"name":' | sed 's/"name": "//;s/",//' | egrep -o '[a-z\-]+'`

docker build . -t "$TAG"

