let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

console.log("Antes do splice:", playlist);

// removendo dois elementos a partir do indice

let elementosRemovidos = playlist.splice(2, 2)
console.log("depois do splice:", playlist)
console.log("elementos removidos:", elementosRemovidos)