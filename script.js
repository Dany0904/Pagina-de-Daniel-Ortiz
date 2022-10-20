var xhr = new XMLHttpRequest();

const contenedorPrincipal = document.querySelector("#contenedorCards2");

xhr.open("GET", "https://reqres.in/api/users", true);
xhr.onload = function(){
    const datos = xhr.response;
    const datosObject = JSON.parse(datos);
    //document.getElementById('nombre').innerHTML = datosObject.data[0].first_name;
    /* for(dato of datosObject.data){
    
    } */
    //console.log(datosObject.data[0].first_name);
    let divContainCard = document.createElement('div');
    divContainCard.classList.add('containCard');

    let divImg =  document.createElement('div');
    divImg.classList.add('imagenproducto');
    divImg.classList.add('imagenUno');

    let card = document.createElement('div');
    card.classList.add('card1');

    let pNombre = document.createElement('p');
    let pEmail = document.createElement('p');

    contenedorPrincipal.appendChild(divContainCard);
    divContainCard.appendChild(divImg);
    divContainCard.appendChild(card);
    card.appendChild(pNombre);
    card.appendChild(pEmail);

    var textNombre = document.createTextNode(datosObject.data[0].first_name + ' ' +datosObject.data[0].last_name)
    pNombre.append(textNombre);
    var textEmail = document.createTextNode(datosObject.data[0].email)
    pEmail.append(textEmail);
    
    console.log(contenedorPrincipal);
};
xhr.send(); 