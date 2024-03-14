const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express();

conectarBD();

app.use(cors());

app.use(express.json())

app.use('/api/productos', require('./routes/producto'));


/* app.get('/',(req,res) => {
    res.send(`<h1>Hello World!</h1>`);
}) */

app.listen(4000, () => {
    console.log('El puerto esta en http://localhost:4000');
})