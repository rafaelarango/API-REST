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
    // destructuri js??
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



// configurar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

 