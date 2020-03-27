const http = require('http'),
			path = require('path'),
			express = require('express'),
			bodyParser = require('body-parser'),
			session = require('express-session'),
			Rutas = require('./server/rutas.js')

const PORT = 80
const app = express()

//creamos el server
const Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client'))


//HAbilita sesiones de usuarios (debe estar antes de las rutas)
app.use(session({
	secret: '2C44-4D44-WppQ38S',
	cookie: {maxAge: 72000000},
	resave: false,
	saveUninitialized: true
}));

app.use('/server', Rutas)

Server.listen(PORT, function(){
	console.log('Server iniciado en puerto ' + PORT)
})
