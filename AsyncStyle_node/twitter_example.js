var twitter = require('ntwitter');

//your secret keys go here
var twit = new twitter({
  consumer_key: 'jAn4JNC1w',
  consumer_secret: 'dJBlWoUvQK5KokueQKljNSfx35Y',
  access_token_key: '15182YvrTYnaM1nqLJsSlwqW5l',
  access_token_secret: '03Vb19tlhA3smNer3E9jxxI'
});

twit.stream('statuses/sample', function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});

