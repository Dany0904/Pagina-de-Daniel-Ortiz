var xhr = new XMLHttpRequest();

const contenedorPrincipal = document.querySelector("#contenedorCards2");

xhr.open("GET", "https://reqres.in/api/users", true);
xhr.onload = function(){
    const datos = xhr.response;
    const datosObject = JSON.parse(datos);

    let divContainCard, divImg, card, pNombre, pEmail, textNombre, textEmail, avatarImg;

    for(let i = 0; i < 6; i++) {
        divContainCard = document.createElement('div');
        divContainCard.classList.add('containCard');

        divImg =  document.createElement('div');
        divImg.classList.add('imagenProducto');

        card = document.createElement('div');
        card.classList.add('card1');

        pNombre = document.createElement('p');
        pEmail = document.createElement('p');

        contenedorPrincipal.appendChild(divContainCard);
        divContainCard.appendChild(divImg);
        divContainCard.appendChild(card);
        card.appendChild(pNombre);
        card.appendChild(pEmail);

        textNombre = document.createTextNode(datosObject.data[i].first_name + ' ' +datosObject.data[i].last_name)
        pNombre.append(textNombre);
        textEmail = document.createTextNode(datosObject.data[i].email);
        pEmail.append(textEmail);

        avatarImg = datosObject.data[i].avatar;
        divImg.style.backgroundImage = 'url('+avatarImg+')';
        pNombre.style.fontWeight = "bold";
    }
};
xhr.send(); 