var MongoClient = require('mongodb').MongoClient

const nombreBD = 'test_next_u' 

var url = 'mongodb://localhost';

var client = MongoClient.connect(url, function(err, client){
	if (err){
		console.log('ERROR-->', err);
	}
	else {
		console.log('Conectado');
		let db = client.db(nombreBD)
		let usuarios = db.collection('usuarios');
		usuarios.deleteMany({}, (error, result) => {
			console.log('Resultado delete usuarios = ', result.deletedCount);
		});
		usuarios.insertMany([
				{nombre: 'Sebastian', email:'sebastian@prueba.cl', clave: '123456'},
				{nombre: 'Luciano', email:'luciano@prueba.cl', clave: '123456'},
				{nombre: 'Karen', email:'karen@prueba.cl', clave: '123456'}
			], (error, result) => {
				console.log('Resultado insert usuarios', result.toString());
		});
		client.close()
	}
});
