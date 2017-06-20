const EESTI_INFO = [{"name":"Estonia","topLevelDomain":[".ee"],"alpha2Code":"EE","alpha3Code":"EST","callingCodes":["372"],"capital":"Tallinn","altSpellings":["EE","Eesti","Republic of Estonia","Eesti Vabariik"],"region":"Europe","subregion":"Northern Europe","population":1315944,"latlng":[59.0,26.0],"demonym":"Estonian","area":45227.0,"gini":36.0,"timezones":["UTC+02:00"],"borders":["LVA","RUS"],"nativeName":"Eesti","numericCode":"233","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"et","iso639_2":"est","name":"Estonian","nativeName":"eesti"}],"translations":{"de":"Estland","es":"Estonia","fr":"Estonie","ja":"エストニア","it":"Estonia","br":"Estônia","pt":"Estónia"},"flag":"https://restcountries.eu/data/est.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}]}];

(function(){
    describe('Client', function(){
        var client, provider;

        beforeEach(function(){
            client = exampleApp.createServer('http://localhost:1234');
            provider = Pact.mockService({
                consumer: 'country-consumer',
                provider: 'country-provider',
                port: 1234,
                done: function(err){
                    expect(err).toBe(null);
                }
            })
        });


        it('should provide eesti country detail', function(done){
            provider
                .uponReceiving('a request for Estonia country information')
                .withRequest('get', '/name/eesti')
                .willRespondWith(200, {
                    'Content-Type': 'application/json'
                }, {
                    reply: EESTI_INFO
                });

            provider.run(done, function(complete){
                expect(client.getEstonia()).toEqual(EESTI_INFO);
                complete();
            })
        });
    })
})();