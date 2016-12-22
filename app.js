var express = require("express");
var app = express();
var path =require("path")

app.use(function(req, res, next){
	if(req.headers["x-forwarded-proto"] === "https"){		
		res.redirect("http://"+req.hostname+req.url);
	}else{		
		next();
	}
});

app.use(express.static(__dirname+"/public"));

app.get('*', function (request, response){	
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.set("port", process.env.PORT||5000);

app.listen(app.get("port"), function(){
	console.log("Server started");
})