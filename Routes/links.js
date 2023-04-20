const express = require("express");
const app = express();
const linkRoute = express.Router();
const dbo = require("../db/mongo");

linkRoute.get("/google", function(req,res){
    let db_connect = dbo.getDb();
    let myquery = { header: "google" };
    db_connect
    .collection('test')
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

linkRoute.get("/linkedin", function(req,res){
    let db_connect = dbo.getDb();
    let myquery = { header: "linkedin" };
    db_connect
    .collection('test')
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

linkRoute.get("/whatsapp", function(req,res){
    let db_connect = dbo.getDb();
    let myquery = { header: "whatsapp" };
    db_connect
    .collection('test')
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = linkRoute;