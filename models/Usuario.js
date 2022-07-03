class Usuario {
  id = Number;
  Nome = String;
  Email = String;
  Dia = Number;
  Data = String;
  Usuario = String;

  constructor(id, Nome, Email, Dia, Data, Usuario) {
    this.id = id
    this.Nome = Nome
    this.Email = Email
    this.Dia = Dia
    this.Data = Data
    this.Usuario = Usuario

  }
}

module.exports = Usuario
// { "id": 1, "Nome": "João", "Email": "Celica@hotmail.com", "Dia": 2022, "Data": "22-03-2022", "usuario": "Premium" },