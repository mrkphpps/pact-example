var pact = require('@pact-foundation/pact-node');
var path = require('path');

var opts = {
    providerBaseUrl: 'http://localhost:3000', //API host endpoint
    pactUrls: [path.resolve(__dirname, './tmp/pacts/country-consumer-country-provider.json')] //path to pact files
};

pact.verifyPacts(opts).then(function(){
    console.log('SUCCESS!')
}).catch(function(error){
    console.log('failed', error)
});