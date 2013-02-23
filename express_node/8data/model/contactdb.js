var contactDB = [
    {
    	"name": "John Smith",
        "type": "home",
        "number": "212 555-1234"
    },
    {
    	"name": "Anna George",
        "type": "fax",
        "number": "646 555-4567"
    }
]


exports.listContacts = function() {
	return contactDB;
}