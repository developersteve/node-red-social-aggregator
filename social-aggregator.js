module.exports = function(RED) {
    function SocialAggreg(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var output = [];
        node.on('input', function(msg) {

	        var Riv = require('riv-us');

	    	var riv = new Riv({"dataStore": {"type": "none"}, "providers": msg.payload});

		    riv.synchronize().then(function() {

		      riv.getFeed().then(function(posts) {
		      	msg.payload = posts;
		        node.send(msg);	
		      }, function(error) {
		      	msg.payload = error;
		        node.send(msg);
		      });

		    }, function(error) {
		      	msg.payload = error;
		        node.send(msg);
		    });
        });
    }
    RED.nodes.registerType("social-aggregator", SocialAggreg);
}