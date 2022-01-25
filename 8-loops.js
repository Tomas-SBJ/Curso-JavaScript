console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const destino = "Salvador";
let temPassagemComprada;
let contador = 0;
let destinoExiste = false;

console.log("\n Destinos possiveis:");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

while (contador < listaDestinos.length) {
    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log(`Destino existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
}
else {
    console.log("Desculpe tivemos um erro !");
}

for (let i = 0; i < listaDestinos.length; i++) {
    if (listaDestinos[i] == destino) {
        destinoExiste = true;
    }
}