//mi servidor web
// Modulos
//---------------------------------------------
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
//---------------------------------------------

// Funciones
//---------------------------------------------
var generarUsuario1 = function(){
	var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	return {
		nombre : randomName,
		email : randomEmail,
		imagen : randomImage,
	}
}

var generarUsuario2 = function(){
	var randomId = faker.internet.ip();
	var randomName = faker.name.findName();
	var randomContenido = faker.commerce.product();
	var randomFecha = faker.date.recent();
	var randomImage = faker.image.avatar();

	return {
		id : randomId,
		nombre : randomName,
		contenido : randomContenido,
		fecha : randomFecha,
		imagen : randomImage 
	}
}
//---------------------------------------------


// Main  
//---------------------------------------------
app.get('/',function(req,res){
	res.send('Mi primer servidor!');
})

app.get('/Amigos', function(req,res){
	var cantidad = _.random(5,10);
	var usuarios = _.times(cantidad,generarUsuario1);
	res.json(usuarios);
})

app.get('/posts', function(req,res){
	var cantidad = _.random(5,10);
	var usuarios = _.times(cantidad,generarUsuario2);
	res.json(usuarios);
})


app.listen(3000);
