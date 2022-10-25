const valores = window.location.search;
const idUser = valores.replace(/[^0-9]+/g, "");
const URL = 'https://reqres.in/api/users/' + idUser;

var xhr = new XMLHttpRequest();

xhr.open("GET", URL, true);
xhr.onload = function(){
    const datos = xhr.response;
    const datosObject = JSON.parse(datos);

    let divImg, nombre, email, textNombre, textEmail, avatarImg;
 
    nombre = document.querySelector('#text-title'); 
    email = document.querySelector('#text-email'); 
    divImg = document.querySelector('#user-picture');

    textNombre = document.createTextNode(datosObject.data.first_name + ' ' +datosObject.data.last_name)
    nombre.append(textNombre);
    textEmail = document.createTextNode(datosObject.data.email);
    email.append(textEmail);

    avatarImg = datosObject.data.avatar;
    divImg.style.backgroundImage = 'url('+avatarImg+')';
};
xhr.send();