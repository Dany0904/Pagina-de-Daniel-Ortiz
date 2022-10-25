var xhr = new XMLHttpRequest();

const URL = 'https://reqres.in/api/users'
const contenedorPrincipal = document.querySelector("#contenedorCards2");

const elementoVacio = "";

xhr.open("GET", URL, true);
xhr.onload = function(){
    const datos = xhr.response;
    const datosObject = JSON.parse(datos);

    let divContainCard, divImg, card, aNombre, pEmail, textNombre, textEmail, avatarImg;
    
    for(let i = 0; i < 6; i++) {
        divContainCard = document.createElement('div');
        divContainCard.classList.add('containCard');

        divImg =  document.createElement('div');
        divImg.classList.add('imagenProducto');

        card = document.createElement('div');
        card.classList.add('card1');

        aNombre = document.createElement('a');
        pEmail = document.createElement('p');

        contenedorPrincipal.appendChild(divContainCard);
        divContainCard.appendChild(divImg);
        divContainCard.appendChild(card);
        card.appendChild(aNombre);
        card.appendChild(pEmail);

        textNombre = document.createTextNode(datosObject.data[i].first_name + ' ' +datosObject.data[i].last_name)
        aNombre.append(textNombre);
        textEmail = document.createTextNode(datosObject.data[i].email);
        pEmail.append(textEmail);

        avatarImg = datosObject.data[i].avatar;
        divImg.style.backgroundImage = 'url('+avatarImg+')';
        aNombre.setAttribute('href','/indexUser.html?id='+(i+1));
        aNombre.setAttribute('target','_blanck')
        aNombre.setAttribute('class','nombre');
    }
    
};
xhr.send(); 