logs

Estructura

    {
      "datetime": 11,
      "current_temperature": 11,
      "current_humidity": 11,
      "adjustment_temperature": 11,
      "pumb_state": true,
      "mHigh_state": true,
      "mLow_state": false,
      "autoMode_state":true
    }


https://mongodbutch.herokuapp.com/api/logs/post - Agrega un documento a la coleccion de logs 

https://mongodbutch.herokuapp.com/api/logs/getAll - Muestra todos los documentos de la coleccion de logs

https://mongodbutch.herokuapp.com/api/logs/getOne/id - Muestra un documento de la coleccion logs que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/logs/update/id - Actualiza un documento de la coleccion logs

https://mongodbutch.herokuapp.com/api/logs/delete/id - Elimina un documento de la coleccion de logs



users

Estructura

{
      "username":"Adrian",
      "email":"sergiogodina18@gmail.com",
      "name":"Sergio",
      "lastname":"Godina",
      "password":"123456",
      "rol":"Admin",
      "state": true 
   }


https://mongodbutch.herokuapp.com/api/users/post - Agrega un documento a la coleccion de users

https://mongodbutch.herokuapp.com/api/users/getAll - Muestra todos los documentos de la coleccion de users

https://mongodbutch.herokuapp.com/api/users/getOne/id - Muestra un documento de la coleccion users que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/users/update/id - Actualiza un documento de la coleccion users que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/users/delete/id - Elimina un documento de la coleccion de users que coincida con el parametro del id
