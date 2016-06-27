//  Autnor Arthur Hsu 2016/03/03
//  CopyRight 2016 Arhtur Hsu. All rights reserved.

// use modules
var express = require('express');
var router = express.Router();

console.log('Run FirstTestAPI \n');

router.post('/', function (req, res, next) {
	
	console.log(req.body.SendID);
	console.log(req.body.SendData);

	var obj = {};
	var ResultDeatile = {};
	var ResultDeatile = {};
	console.log('Run First API 11111\n');
	for( var i = 0; i < 2; i++)
	{
		ResultDeatile.ResultCode = '200';
		ResultDeatile.ResultMsg = 'OK';
		obj['aa'+i] = ResultDeatile;		
	}
	
    res.json(obj);
    res.end();
    next();  
});

module.exports = router;