import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
import  {sumar, restar, dividir, multiplicar} from './modules/matematica.js'

const app = express();
const port = 3000;

// Agrego los Middlewares

app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

//
// Aca pongo todos los EndPoints
//


app.get('/', (req, res) => { // EndPoint "/"
    res.status(200).send('Ya estoy respondiendo (200)!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.status(200).send('Hola ' + req.params.nombre + ' (200)');
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => { 
    
    let fecha = new Date(req.params.ano, req.params.mes - 1, req.params.dia);
    if(!isNaN(fecha)){
        res.status(200).send();
    }
    else{
        res.status(400).send();
    }
})

app.get('/matematica/sumar', (req, res) => {
    let suma = sumar(req.query.n1, req.query.n2);
     
})

// Inicio el server.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
