var os = require('os');
var database_uri;

console.log(os.hostname());

if (os.hostname() == 'LAPTOP-S2EVGDLT') {
	database_uri = 'mongodb://localhost:27017/todos';
	console.log('Banco local');
} else {
	database_uri = 'mongodb://anologicon:MBRmMfcvNvcSARM9@todolist-shard-00-00-wmz4g.mongodb.net:27017,todolist-shard-00-01-wmz4g.mongodb.net:27017,todolist-shard-00-02-wmz4g.mongodb.net:27017/test?ssl=true&replicaSet=todolist-shard-0&authSource=admin&retryWrites=true';
	console.log('Banco atlas');
}

module.exports = {
    DB: database_uri,
    APP_PORT: 7000,
}