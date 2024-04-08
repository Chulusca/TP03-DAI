/* Exporto desde el módulo "matematicas" la constante PI,
la funciones sumar y multiplicar */

const PI = 3.14;

function sumar(x, y) {
    return x+y;
}

const multiplicar = (a, b) => {
    return a*b;
};

function dividir(divisor, dividendo){
    return divisor/dividendo;
};

function restar(a, b){
    return a-b;
};

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar, dividir, restar};
