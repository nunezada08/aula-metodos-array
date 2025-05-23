let playlist = ["funk", "hip-hop", "pop"]

console.log("Antes do pop:");
console.table(playlist)

//removendo a ultima musica
let estiloRemovido = playlist.pop()
console.log("depois do pop")
console.table(playlist)

console.log("Música removida:", estiloRemovido);