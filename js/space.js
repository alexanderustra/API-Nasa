document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('btnBuscar').addEventListener('click',()=>{
        document.getElementById("contenedor").innerHTML = '';
        let busqueda = document.getElementById('inputBuscar').value;
        let url = `https://images-api.nasa.gov/search?q=${busqueda}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
            for(let i = 0 ; i < data.collection.items.length  ; i++){
                let lista = document.createElement('DIV');
                lista.className = 'lista'
                let contenido = `<h2>${data.collection.items[i].data[0].title}</h2>
                                <p>${data.collection.items[i].data[0].description}</p>
                                <h3> Fecha : ${data.collection.items[i].data[0].date_created}</h3>
                                <img src= ${data.collection.items[i].links[0].href}> </img>`;
                lista.innerHTML += contenido;
                let contenedor = document.getElementById("contenedor");
                contenedor.appendChild(lista)
            }})
            .catch((error) => {
            // Handle any errors
            });
            })
            
});
