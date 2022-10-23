function carga(){
    let userURL = localStorage.getItem("urlGlobal");

    var xhr = new XMLHttpRequest();
    const URL = userURL
    const contenedorPrincipalDos = document.querySelector("#contenedorUser");

    xhr.open("GET", URL, true);
    xhr.onload = function(){
        const datos = xhr.response;
        const datosObject = JSON.parse(datos);

        let pNombre, pEmail, textNombre, textEmail, divContain;

        divContain = document.createElement('div');
        pNombre = document.createElement('p');
        pEmail = document.createElement('p');

        contenedorPrincipalDos.appendChild(divContain);
        divContain.appendChild(pNombre);
        divContain.appendChild(pEmail);

        textNombre = document.createTextNode(datosObject.data.first_name + ' ' +datosObject.data.last_name)
        pNombre.append(textNombre);
        textEmail = document.createTextNode(datosObject.data.email);
        pEmail.append(textEmail);
    };
    xhr.send();
}