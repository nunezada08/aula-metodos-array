let playlist = ["funk", "hip-hop", "pop"]

console.log("Antes do shift:");
console.table(playlist)

//removendo a primeira musica
let estiloRemovido = playlist.shift()

console.log("depois do shift")
console.table(playlist)