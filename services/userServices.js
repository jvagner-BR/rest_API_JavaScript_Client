const fs = require("fs");
// const dataPlans = require('../db/plans.json')
// const dataPrices = require('../db/prices.json')
var databaseUsuarios = require("../usuarios.json");
var Usuario = require("../models/Usuario");

function adicionaUsuario(obj) {
//  console.log(obj) ;
const keys = {}
  if(
    obj
    )
    {
  let usuarioCriado = false
  let jsonArray = []
  databaseUsuarios.forEach((item) => {
    jsonArray.push(item);
  });
  const idDoUltimoUsuario =  databaseUsuarios[databaseUsuarios.length - 1].id
  console.log(`ADICIONOU com id: ${idDoUltimoUsuario} !!`)
  let newUser = new Usuario(
    idDoUltimoUsuario + 1,
    obj.Nome,
    obj.Email,
    obj.Dia,
    obj.Data,
    obj.Usuario
   )
    jsonArray.push(newUser)
    let dataJson = JSON.stringify(jsonArray);
   usuarioCriado = true
   fs.writeFile("usuarios.json", dataJson, "utf8", (err) => {
      console.log(`opa: ${err}`);
    });
  // ray.push(obj);

  // let dataJson = JSON.stringify(jsonArray);

  // fs.writeFile("usuarios.json", dataJson, "utf8", (err) => {
  //   console.log(err);
  // });
  return true;
  }
  return false;
};

function atualizarUsuario(obj) {

  let usuarioAtualizado = false;

  let jsonArray = [];
  for (let index = 0; index < databaseUsuarios.length; index++) {

    if (obj.id == databaseUsuarios[index].id) {
     let newUser = new Usuario(
        obj.id,
        obj.Nome,
        obj.Email,
        obj.Dia,
        obj.Data,
        obj.Usuario
       )

       usuarioAtualizado = true
       jsonArray.push(newUser)

    } else {
      jsonArray.push(databaseUsuarios[index]);
    }
  }
  if (usuarioAtualizado) {
    let dataJson = JSON.stringify(jsonArray);
    fs.writeFile("usuarios.json", dataJson, "utf8", (err) => {
      console.log(err);
    });
    console.log('ATUALIZOU!!!')
    return true
  } else {
    return false
  }
};

function deletarUsuario(id) {
  let jsonArray = databaseUsuarios.filter((item) => item.id != id)
  let dataJson = JSON.stringify(jsonArray);
    fs.writeFile("usuarios.json", dataJson, "utf8", (err) => {
      console.log(err);
    });
    console.log('DELETOU!!!!')
} 

module.exports = {
  adicionaUsuario,
  atualizarUsuario,
  deletarUsuario,
}
