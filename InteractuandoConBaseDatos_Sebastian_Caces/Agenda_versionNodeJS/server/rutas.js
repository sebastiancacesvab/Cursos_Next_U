const Router = require('express').Router(), ConexionBD = require('./conexion_bd.js')

Router.post('/login', function(req, res){
	console.log('*** [EJECUTANDO login] *******************************************************************************')
	console.log('REQ = ', req.body)
	ConexionBD.usuarioLogin(req.body.user, function(err, usuarios){
	console.log('usuario = ', usuarios)
	let respuesta = ''
	if (err) {
		respuesta = 'Error: ' + err
	}
	else if (usuarios.length == 0) {
		respuesta = 'Usuario incorrecto'
	}
	else if ( req.body.pass != usuarios[0].clave) {
		respuesta = 'Clave incorrecta'
	}
	else {
		respuesta = 'Validado'
		req.session.login = usuarios[0]['email']
		req.session.usuarioId = usuarios[0]['_id']
	}
	console.log('session = ', req.session)
	console.log('respuesta = ', respuesta)
	res.send(respuesta)
  })
})


Router.post('/logout', function(req, res){
	req.session.destroy(function(err) {
		if (err) {
			return res.status(500).send('Error al intentar cerrar la sesión')
		}else{
			req.session = null
			res.send('logout')
			res.end()
		}
	})
})

Router.get('/events/all', function(req, res){
	console.log('*** [EJECUTANDO events/all] *******************************************************************************')
	console.log('session = ', req.session)
	ConexionBD.eventosUsuario(req.session.usuarioId, function(err, eventos){
		console.log('eventos = ', eventos)
		let respuesta = ''
		if (err) {
			respuesta = 'Error: ' + err
			return res.status(500).send(respuesta)
		}
		else {
			res.json(eventos)
		}
	})
})

Router.post('/events/new', function(req, res){
	console.log('*** [EJECUTANDO events/new] *******************************************************************************')
	console.log('session= ', req.session)
	let nuevoEvento = {
		'title' : req.body.title,
		'start' : req.body.start,
		'end' : req.body.end
	}
	ConexionBD.eventosCrear(req.session.usuarioId, nuevoEvento, function(err, result){
		let respuesta = ''
		if (err) {
			respuesta = 'Error: ' + err
			return res.status(500).send(respuesta)
		}
		else {
			return res.status(200).send('El evento ha sido insertado correctamente')
		}
	})
})

Router.post('/events/update', function(req, res){
	console.log('*** [EJECUTANDO events/update] *******************************************************************************')
	console.log('session = ', req.session)
	let nuevoEvento = {
		'start' : req.body.start,
		'end' : req.body.end
	}
	let eventoID = req.body._id

	ConexionBD.eventosActualizar(req.session.usuarioId, eventoID, nuevoEvento, function(err, result){
		let respuesta = ''
		if (err) {
			respuesta = 'Error: ' + err
			return res.status(500).send(respuesta)
		}
		else {
			return res.status(200).send('El evento ha sido actualizado correctamente')
		}
	})
})

Router.post('/events/delete', function(req, res){
	console.log('*** [EJECUTANDO events/delete] *******************************************************************************')
	console.log('session = ', req.session)
	let eventoID = req.body.id
	ConexionBD.eventosEliminar(req.session.usuarioId, eventoID, function(err, result){
		let respuesta = ''
		if (err) {
			respuesta = 'Error: ' + err
			return res.status(500).send(respuesta)
		}
		else {
			return res.status(200).send('El evento ha sido eliminado correctamente')
		}
	})
})

module.exports = Router
