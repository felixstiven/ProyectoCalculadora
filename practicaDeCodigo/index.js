// console.log("hola mundo");
// numero = 3 
// typeof(numero);
// console.log("el tipo de dato es:", typeof(numero));

// cadenaDeTexto = "hola mundo";
// console.log("el tipo de dato es", typeof(cadenaDeTexto));

// booleano = true;
// console.log("the data type is: ", typeof(booleano));


// variable = 8;

// if(typeof(variable) == "number"){
//     resultado = variable*8
// }

// else if (typeof(variable) == "string"){
//     resultado = "estoy concatenando" + variable
// } else{
//     resultado = " no es ni sting ni number"
// }

// console.log(resultado)


const btn = document.querySelector("button");

function random(numero){
    return Math.floor(Math.random()*(numero +1))
}

btn.addEventListener("click", ()=>{
    const rdnColor = `rgb(${random(225)},${random(225)},${random(225)})`
    document.body.style.background = rdnColor;
});