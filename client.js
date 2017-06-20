/**
 * Created by markphipps on 19/06/17.
 */
var exampleApp = exampleApp || {};

(function(){
    var baseUrl;

    this.createServer = function(url){
        baseUrl = url;
        return this;
    };

    this.getEstonia = function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', baseUrl + '/name/eesti', false);
        xhr.send();

        return JSON.parse(xhr.responseText).reply;
    };
}).apply(exampleApp);
