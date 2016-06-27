//  Autnor Arthur Hsu 2016/03/03
//  CopyRight 2016 Arhtur Hsu. All rights reserved.

// use modules
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var squel = require("squel");
var async = require('async');

var pool  = mysql.createPool({
  connectionLimit : 10,
  acquireTimeout: 60000,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'rootxxx123'
});

console.log('Run FirstSqlAPI \n');

router.post('/', function (req, res, next) 
{
	console.log(req.body.SendID);
	console.log(req.body.SendData);
	
	//var sqlString = "CALL ReportDB.GetRegionRevenueDistribution('{StartDate}', '{EndDate}', '{ProductID}')"; // stored procedure temp
	var sqlString = "select * from sqltest.myuser where ID = " + req.body.SendID;
	console.log(sqlString);
	var obj = {};
	pool.query(sqlString, function(err, results) {
    if (results.length < 1) { // err != null || 
      obj.ResultCode = '500';
      obj.ResultMsg = 'Data Not Found!!';
      
    } else{
		obj.ResultCode = '200';
		obj.ResultMsg = 'OK';
		for( var Key in results )
		{
			console.log(Key);
			obj['User'+Key] = results[Key];
			console.log(results[Key]);
			/* P.S The Word Has MatchCase
			console.log(results[Key].ID);
			console.log(results[Key].Name);
			*/
		}
    }
	res.json(obj);
    res.end();
    next();
  });
})

module.exports = router;