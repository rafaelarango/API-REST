const express = require('express');
const app = express();

const usuarios = require('./data')

const port = 3000;



// get
app.get('/', (req, res) => {
    res.send("Hello");
})

// get ruta user
app.get('/user', (req, res) => {
    res.json(usuarios)

})



// configurar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

 