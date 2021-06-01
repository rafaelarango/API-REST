const express = require('express');
const app = express();




// get

app.get('/'), (req, res) => {
    res.send("Hello");
}



// configurar servidor
app.listen(app.get(3000), () => {
    console.log('Respuesta del servidor ');
})
