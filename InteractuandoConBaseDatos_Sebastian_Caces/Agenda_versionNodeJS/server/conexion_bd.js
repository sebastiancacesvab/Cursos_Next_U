const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

const url = 'mongodb://localhost'
const nombreBD = 'test_next_u' 

module.exports.usuarioLogin = function(login, callback) {
	console.log('Login = ' + login)
	var client = MongoClient.connect(url, function(err, client){
		if (err){
			console.log('ERROR-->', err);
		}
		else {
			console.log('conexion ok');	
			let db = client.db(nombreBD)
			let colUsuarios = db.collection('usuarios');
			colUsuarios.find({email: login}).toArray(function(err, docs){
				client.close()
				callback(err, docs);
			})
		}
	});
}

module.exports.eventosUsuario = function(usuarioID, callback) {
	console.log('UsuarioID = ' + usuarioID)
	var client = MongoClient.connect(url, function(err, client){
		if (err){
			console.log('ERROR-->', err);
		}
		else {
			console.log('conexion ok');
			let db = client.db(nombreBD)
			let colEventos = db.collection('eventos');
			colEventos.find({'usuarioID': usuarioID}).toArray(function(err, eventos){
				client.close()
				callback(err, eventos);
			})
		}
	});
}

module.exports.eventosCrear = function(usuarioID, evento, callback) {
	console.log('UsuarioID = ' + usuarioID)
	evento['usuarioID'] = usuarioID
	console.log('Nuevo Evento', evento)
	var client = MongoClient.connect(url, function(err, client){
		if (err){
			console.log('ERROR-->', err);
		}
		else {
			console.log('conexion ok');
			let db = client.db(nombreBD)
			let colEventos = db.collection('eventos');
			colEventos.insertOne(evento, (err, result) => {
				console.log('Resultado de insert', result.toString());
				client.close()
				callback(err, result);
			});
		}
	});
}

module.exports.eventosActualizar = function(usuarioID, eventoID, evento, callback) {
	console.log('UsuarioID', usuarioID, 'eventoID', eventoID)
	console.log('Evento', evento)
	var client = MongoClient.connect(url, function(err, client){
		if (err){
			console.log('ERROR-->', err);
		}
		else {
			console.log('conexion ok');
			let db = client.db(nombreBD)
			let colEventos = db.collection('eventos');
			colEventos.updateOne({'usuarioID':usuarioID, '_id':ObjectId(eventoID)}, {$set: evento}, (err, result) => {
				console.log('Resultado update ', result.toString());
				client.close()
				callback(err, result);
			});
		}
	});
}

module.exports.eventosEliminar = function(usuarioID, eventoID, callback) {
	console.log('UsuarioID', usuarioID, 'eventoID', eventoID)
	var client = MongoClient.connect(url, function(err, client){
		if (err){
			console.log('ERROR-->', err);
		}
		else {
			console.log('conexion ok');
			let db = client.db(nombreBD)
			let colEventos = db.collection('eventos');
			colEventos.deleteOne({'usuarioID':usuarioID, '_id':ObjectId(eventoID)}, (err, result) => {
				console.log('Resultado de delete', result.toString());
				client.close()
				callback(err, result);
			});
		}
	});
}
