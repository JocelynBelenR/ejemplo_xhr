const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

//llamada a xhr
const getJSON = (url, callback) => { //dos parametros
  //crear instancia del objeto xmlhttprequest
  const request = new XMLHttpRequest();

  request.onload = () => { //verifica si se hizo la condicion correctamente
    if (request.readyState === 4 && request.status === 200) { //metodo de la llamada de ajax..si devuelve 4 la respues esta lista
      callback(request.responseText);
    }
  }
  //open
  request.open('GET', url);
  //send
  request.send();
}

btn.addEventListener('click', () => {
  getJSON(url, response => {
    let doggie = JSON.parse(response).message;//para transformar de json a un objeto manipulable
    console.log(doggie);
    img.scr = doggie;
  })
});


//esta estructura no cambia, siempre se usa lo mismo