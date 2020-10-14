// create map
const map = L.map('mapid').setView([-20.9401398,-48.4910493], 16);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // remove icon
    if (marker) {
        map.removeLayer(marker);
    }

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// add photo field
function addPhotoField() {
    // pegar container de fotos #images
    const container = document.querySelector('#images');

    // pegar container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if (input.value === '') {
        return;
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ''

    // adicionar o clone ao container #images
    container.appendChild(newFieldContainer);
}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = '';
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

// troca do sim e não
function toggleSelect(event) {
    // pegar o botão clicado
    const button = event.currentTarget;    

    // atualizar input hidden com valor selecionado
    const input = document.querySelector('[name = "open-on-weekends"]');
    
    input.value = button.dataset.value

    // retirar a classe .active
    document.querySelectorAll('.button-select button').forEach( button => {
        button.classList.remove('active');
    })

    // colocar a classe .active
    button.classList.add('active');
}