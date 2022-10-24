function carga(){

    const valores = window.location.search;
    const idUser = valores.replace(/[^0-9]+/g, "");
    const URL = 'https://reqres.in/api/users/' + idUser;

    var xhr = new XMLHttpRequest();
    const contenedorPrincipalDos = document.querySelector("#contenedorUser");

    xhr.open("GET", URL, true);
    xhr.onload = function(){
        const datos = xhr.response;
        const datosObject = JSON.parse(datos);

        let divContainCard, divImg, card, aNombre, pEmail, textNombre, textEmail, avatarImg;

        divContainCard = document.createElement('div');
        divContainCard.classList.add('containCard2');

        divImg =  document.createElement('div');
        divImg.classList.add('imagenProducto');

        card = document.createElement('div');
        card.classList.add('card1');

        aNombre = document.createElement('a');
        pEmail = document.createElement('p');

        contenedorPrincipalDos.appendChild(divContainCard);
        divContainCard.appendChild(divImg);
        divContainCard.appendChild(card);
        card.appendChild(aNombre);
        card.appendChild(pEmail);

        textNombre = document.createTextNode(datosObject.data.first_name + ' ' +datosObject.data.last_name)
        aNombre.append(textNombre);
        textEmail = document.createTextNode(datosObject.data.email);
        pEmail.append(textEmail);

        avatarImg = datosObject.data.avatar;
        divImg.style.backgroundImage = 'url('+avatarImg+')';
    };
    xhr.send();
}