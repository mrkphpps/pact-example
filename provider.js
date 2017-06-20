/**
 * Created by markphipps on 19/06/17.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/name/eesti', function (req, res) {
    var response = {reply: [{"name":"Estonia","topLevelDomain":[".ee"],"alpha2Code":"EE","alpha3Code":"EST","callingCodes":["372"],"capital":"Tallinn","altSpellings":["EE","Eesti","Republic of Estonia","Eesti Vabariik"],"region":"Europe","subregion":"Northern Europe","population":1315944,"latlng":[59.0,26.0],"demonym":"Estonian","area":45227.0,"gini":36.0,"timezones":["UTC+02:00"],"borders":["LVA","RUS"],"nativeName":"Eesti","numericCode":"233","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"et","iso639_2":"est","name":"Estonian","nativeName":"eesti"}],"translations":{"de":"Estland","es":"Estonia","fr":"Estonie","ja":"エストニア","it":"Estonia","br":"Estônia","pt":"Estónia"},"flag":"https://restcountries.eu/data/est.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}]}]};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(response));
});

app.get('/name/gb', function (req, res) {
    var response = {reply: [{"name":"United Kingdom of Great Britain and Northern Ireland","topLevelDomain":[".uk"],"alpha2Code":"GB","alpha3Code":"GBR","callingCodes":["44"],"capital":"London","altSpellings":["GB","UK","Great Britain"],"region":"Europe","subregion":"Northern Europe","population":65110000,"latlng":[54.0,-2.0],"demonym":"British","area":242900.0,"gini":34.0,"timezones":["UTC-08:00","UTC-05:00","UTC-04:00","UTC-03:00","UTC-02:00","UTC","UTC+01:00","UTC+02:00","UTC+06:00"],"borders":["IRL"],"nativeName":"United Kingdom","numericCode":"826","currencies":[{"code":"GBP","name":"British pound","symbol":"£"}],"languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"de":"Vereinigtes Königreich","es":"Reino Unido","fr":"Royaume-Uni","ja":"イギリス","it":"Regno Unito","br":"Reino Unido","pt":"Reino Unido"},"flag":"https://restcountries.eu/data/gbr.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}]}]};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(response));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});