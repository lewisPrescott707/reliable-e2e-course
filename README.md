# End to End Tests in Microservices

This project is the supporting code for course [End to End Tests in Microservices](https://pactman-consulting.thinkific.com/courses/mini-end-to-end-tests-microservices).

## Prerequisites
1. Install [nodejs](https://nodejs.org/en/download/)
1. Pactflow [starter](https://pactflow.io/pricing/) account
1. [Docker](https://www.docker.com/products/docker-desktop/) (pact-cli)

## Setup
1. `npm install`

## Start App
1. `npm start`

## Start Server
1. `npm run start:server`

## Test

### Unit & Contract
1. `npm run react:test`
1. `npm run contract:test`
Note: contracts generated to `app/pact/pacts` folder

### Publish Contracts
See pact-cli [docs](https://hub.docker.com/r/pactfoundation/pact-cli)
1. `docker run -v $PWD/app:/app --rm pactfoundation/pact-cli:latest publish /app/pact/pacts/ -a <VERSION> -b <PACT_BROKER_BASE_URL> -k <PACT_BROKER_TOKEN>`

### End to End - Cypress
Start Server & Test Headless
1. `export NODE_OPTIONS=--openssl-legacy-provider`
1. `npm test`
