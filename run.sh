#!/bin/bash

env $(curl -X POST http://host.docker.internal:8000 -H "Content-Type: text/plain" --data-binary @.env.local) "$@"