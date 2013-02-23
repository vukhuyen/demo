var db = require('./../model/contactDB');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Express'
  	 });
};















/* 
, 
  	message: 'there are two ways to show model data',
  	contacts: db.listContacts()

  	*/