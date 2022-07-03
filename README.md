### API Planium

Para iniciar o servidor, depois de baixar as dependência "npm i -y", digite "npm start".

o servidor local vai abrir no localhost:8000.

As seguintes rotas GET foram configuradas:

/put
para atualizar os dados
/delete
para deletar um usuário
/post
para adicionar um novo usuário
A rota POST (/add_usuario) recebe a seguinte estrutura baseada em informações das rotas :

{

"Usuários": [

​ { "id":22,"Nome":"aaa","Email":"aaa@g.com","Ano":2021,"Data":"00-00-0000","usuario":"Premium" }

​ ],

}


### consumindo a API ###
/get

![API_get](https://user-images.githubusercontent.com/83413866/177044718-4748a7ac-51fd-405f-9fc3-db741e433a4b.gif)

/put

![API_put](https://user-images.githubusercontent.com/83413866/177044831-9d776596-823f-4008-9cb7-7e566b9fc1d1.gif)

/delete

![API_delete](https://user-images.githubusercontent.com/83413866/177044868-19396435-12b1-4e34-bbd3-2153302a4bc2.gif)

/post

![API_post1](https://user-images.githubusercontent.com/83413866/177044780-3f789940-ee2f-4dce-9bee-03497d378a53.gif)




