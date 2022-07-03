const express = require('express')
const routes = express.Router()
const fs = require('fs')
const {adicionaUsuario, atualizarUsuario, deletarUsuario} = require('../services/userServices.js')

const dataUsuarios = require('../usuarios.json')
const { request } = require('http')
const { response } = require('express')
// const exceptionVidas = require('../services/exceptionvida')
// const exceptionRegistroNotFound = require('../services/exceptions')
// var verificaPlano = require('../services/plans')

//Buscar lista de usuarios
routes.get('/usuarios', (req, res) => {
  return res.json(dataUsuarios)
})


//Insere dados
routes.post('/usuario', (req, res) => {
  const body = req.body
  console.log(req.body)
  //adiciona
  try {
    const result = adicionaUsuario(req.body)
    return res.status(200).json({sucess: true})
  } catch (error) {
    console.log(error)
    return res.status(400).json({error})
  }
  // if(adicionaUsuario(req.body)){
  //   return res.json('adicionou com sucesso')
  // }
  // return res.status(400).json('falhou!!')
})

//atualizar
routes.put('/usuario', (req, res) => {
  const dataUsuarios = atualizarUsuario(req.body)
  return res.json(dataUsuarios)
})

//deletar
routes.delete('/usuario/:id', (req, res) => {
  const {id} = req.params
  console.log(id)
  deletarUsuario(id)
  return res.status(200).send('Deletou com sucesso.')
})

module.exports = routes
