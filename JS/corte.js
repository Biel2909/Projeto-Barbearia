fotos = [
    {
        "id": 1,
        "corte": "Moicano",
        "Foto":"https://i.ytimg.com/vi/B82jdAe2x_I/maxresdefault.jpg",
        "descricao": "Corte estiloso com laterais raspadas e topo mais longo."
    },


]
function corte(){
    fotos.forEach(element => {
        document.getElementById("cards-cabelo").innerHTML += `
        <div class="card-cabelo">
            <img src="../IMG/cortes/${element.id}.jpg" alt="${element.corte}">
            <h3>${element.corte}</h3>
        </div>
        `
    });
}    
corte();