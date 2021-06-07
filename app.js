const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const usuarios = require('./data')

const port = 3000;

//middleware
app.use(bodyParser.json());

// get
app.get('/', (req, res) => {
    res.send("Hello");
})

// get ruta user
app.get('/user', (req, res) => {
    res.json(usuarios)
})


// post 
app.post('/user', (req, res) => {
    //console.log("req.body", req.body)
    const { nombre, apellido, municipio} = req.body;
    if(nombre && apellido && municipio) {

        const id = usuarios.length +1;
        const newUsuario = {...req.body, id};
        //console.log(newUsuario);
        usuarios.push(newUsuario);
        res.json(usuarios);

    }else {
        res.status(400).json({error: 'Verificar los campos ingresados'})
    }
})


//patch
app.patch('/user/:idUser', (req, res) => {
    // params son las variables que se envian por la ruta va despues de los :
    const {idUser} = req.params;
    const usuario = req.body;

    
        //recorremos el array
        const userData = usuarios.map(function(data) {

            if(data.id == idUser) {
                data.nombre = usuario.nombre;  
                data.apellido = usuario.apellido;
               return data;     
            }
            return data;
        } );  
        // llamamos el nuevo array con los cambios
        res.json(userData)  
    
} )


// configurar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

 