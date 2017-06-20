# README

## 1. Install Pre-requisites

(NB: this assumes you are setting up on a Mac)

Install Node Package Manager (npm) -> https://www.npmjs.com/package/download

Use npm to install Ruby, RubyGems, Karma and Jasmine

## 2. To execute the consumer tests and generate a pact file in the /tmp/ directory

In one terminal (in the root of the project folder)

    bundle exec pact-mock-service -p 1234 --pact-specification-version 2.0.0 -l log/pact.logs

    (confirm that this is working by browsing to http://localhost:1234/names/eesti - if all is setup correctly then the expected response from the endpoint will be displayed in the browser)

In another terminal (same root of project)

    karma start

This should execute the test and generate the pact file containing the request/response pair in tmp/ folder

To run the provider test

    node provider-client.js

