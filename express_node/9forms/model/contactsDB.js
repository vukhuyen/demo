var contactsDB = {}
var id = 0;
exports.getContacts = function() {
    console.log(contactsDB);
	return contactsDB;	
}

exports.newContact = function(contact) {
	id++;
	contact.id = id;
	contactsDB[id] = contact;
}

exports.getContact = function(id) {
	return contactsDB[id];
}

