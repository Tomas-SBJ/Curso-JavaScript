console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = false;

listaDestinos.push(`Curitiba`);

console.log("Destinos possiveis:");
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem !!");
    listaDestinos.splice(1, 1);
}
else {
    console.log("Comprador menor de idade.")
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem !!");
}
else {
    console.log("Você não pode embarcar");
}

console.log(listaDestinos);