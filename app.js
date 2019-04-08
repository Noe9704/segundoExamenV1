const express = require('express')
const app = express()
const met = require('./met.js')
const port = process.env.PORT || 3000

app.get('/students/:id',function(req,res){
	res.setHeader('Acces-Control-Allow-Origin','*')
	if(req.params.id != 'A00949282'){
		return res.send({
			error: 'Tienes que dar la matricula correcta'
		})


	}
		const response ={

  		"id": "A00949282",
  		"fullname": "Noe Flores Sifuentes",
  		"nickname": "Noe9704",
  		"age": 21

		}
		return res.send({
			students: response
		})

})

app.get('/met', function(req,res){
	res.setHeader('Acces-Control-Allow-Origin','*')
	if(!req.query.search){
		return res.send({
			error: 'Tienes que dar un objeto valido'
		})
	}
	met.object(req.query.search,function(error,response){
		if(error){
			return res.send({
				error: error
			})
		}

	})


})

app.get('/', function(req, res){
	res.send('Bienvenido a mi pagina web')

})

app.get('*', function(req,res){
	res.send({
		error: 'Esta ruta no existe'
	})
})

app.listen(port, function(){
	console.log('up and running')


})