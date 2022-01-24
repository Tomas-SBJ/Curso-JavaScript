console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //Adicionando um item na lista

console.log("Destinos possveis:");
console.log(listaDestinos);

listaDestinos.splice(1, 1); //Deletando um item da lista.
console.log(listaDestinos);

console.log(listaDestinos[1]);
