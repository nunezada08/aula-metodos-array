let playlist = ["funk", "hip-hop", "pop"]

console.log("Antes do unshift:");
console.table(playlist)

//adicionando no estilo no enicio da playlist
playlist.unshift("rock")

console.log("depois do unshift")
console.table(playlist)