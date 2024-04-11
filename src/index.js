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

//EndPoints que utilizan matematica.js

app.get('/matematica/sumar', (req, res) => {
    let suma = sumar(req.query.n1, req.query.n2);
    res.status(200).send(suma.toString());
})

app.get('/matematica/restar', (req, res) => {
    let resta = restar(req.query.n1, req.query.n2);
    res.status(200).send(resta.toString());
})

app.get('/matematica/multiplicar', (req, res) => {
    let producto = multiplicar(req.query.n1, req.query.n2);
    res.status(200).send(producto.toString());
})

app.get('/matematica/dividir', (req, res) => {
    let cociente = dividir(req.query.n1, req.query.n2);
    if(req.query.n2 == 0){
        res.status(400).send("El divisor no puede ser 0");
    }
    else{
        res.status(200).send(cociente.toString());
    }
})

//EndPoints que usan el modulo OMBDWrapper.js



// Inicio el server.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
