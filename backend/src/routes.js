const express = require('express');

const connection = require('./database/connection')
const OngsController = require('./controllers/OngCotroller')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionsController = require('./controllers/SessionsController')

const routes = express.Router();


routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);


routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionsController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;