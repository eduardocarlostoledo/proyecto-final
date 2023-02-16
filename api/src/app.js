const express = require('express');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.json())


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// --------passport--------------------------------------------------------------------------------------
//si se puede agarrar todo este codigo y mudarlo a otra carpeta mejor para q no este todo amontonado
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passportLocal = require('passport-local').Strategy;


server.use(express.urlencoded({extended: true}))// esto lee los inputs
server.use(cookieParser('aca va la pass'))//cookie
server.use(session({
    secret: 'la password', //configuraciones de la sesion no den bola
    resave: true,
    saveUninitialized: true
}));
server.use(passport.initialize()) //inicializa passport
server.use(passport.session()) //conecta express session con passport

passport.use(new passportLocal((username, password, done) => {//funcion que recibe user y pass (done es una funcion q da por realizado el login)

    if(username === 'laiamia' && password === '12345678'){ //harcodie pero aca deberia ir un find One a la base de datos buscar si existe y en ese caso tirar error caso contrario crearlo
        return done(null, {id: 1 , user: 'laiamia'}) //el segundo parametro de done guarda el usuario obtenido
    }else{
        done(null, false)
    }
}))

passport.serializeUser((user, done) => {//serealizacion es cuando se obtiene un dato especifico de un objeto de BDs para luego por ese dato allar el usuario
    done(null, user.id)
})
passport.deserializeUser((id, done) => {//deserealizacion hace el proceso inverso de la serealizacion
    done(null, {id: 1 , user: 'laiamia'})
})

server.get('/todobien', (req, res) => {//ruta q cree para ver si todo salio bien pero se puede borrar y redireccionar a la principal
  res.send('salio bien')
})

server.post('/login' , passport.authenticate('local',{//este post ejecuta la funcion de alla arriba q verifica si el usuario existe o no
    successRedirect: '/todobien', //si de esa funcion todo sale bien mandame a la ruta /todobien
    failureRedirect: '/login' //si el usuario y contra son incorrectos mandame nuevamente al login
}))
// -------------------------------------------------------------------------------------------------

module.exports = server;
