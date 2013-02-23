var db = require('./../model/contactsDB.js')

exports.index = function(req, res){
  res.render('contact/index', { 
  	title: 'Contacts',  
  	contacts:db.getContacts()});
};

exports.create = function(req, res) {
	res.render('contact/create', {title: 'New Contact'});
};

exports.createPost = function(req, res) {
	db.newContact({
		name: req.body.name,
		type: req.body.type,
		number: req.body.number
	});
	res.redirect('/contact')
}