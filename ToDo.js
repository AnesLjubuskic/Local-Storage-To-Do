let obaveza = document.getElementById("unos");
let dugmeSpasi = document.getElementById("spasi");
let dugmeIzbrisiSve = document.getElementById("izbrisiSve");
let liste = document.getElementById("lista");
document.addEventListener("DOMContentLoaded", prikaz());

dugmeSpasi.addEventListener("click", () => {
  /*let trenutno = obaveza.value;
  if (trenutno.trim() != 0) {
    return;
  } else {
    document.getElementById(
      "lista"
    ).innerHTML += `<li>${trenutno}<button id='izbrisi'>Delete</button></li>`;
  }*/
  let trenutno = obaveza.value;
  if (trenutno.trim() != 0) {
    let getLocalStorage = localStorage.getItem("Novi");
    if (getLocalStorage == null) {
      lista = [];
    } else {
      lista = JSON.parse(getLocalStorage); //lista dobija trenutni storage
    }
    lista.push(trenutno); //gura u storage
    localStorage.setItem("Novi", JSON.stringify(lista));
  } else return;
  prikaz();
  obaveza.value = "";
});

function prikaz() {
  let getLocalStorage = localStorage.getItem("Novi");
  if (getLocalStorage == null) {
    lista = [];
  } else {
    lista = JSON.parse(getLocalStorage);
  }
  let noviLi = "";
  lista.forEach((element, index) => {
    noviLi += `<li class="spisak">${element}<button onclick="izbrisi(${index})">Delete</button></li>`;
  });
  liste.innerHTML = noviLi;
}

function izbrisi(index) {
  let getLocalStorage = localStorage.getItem("Novi");
  lista = JSON.parse(getLocalStorage);
  lista.splice(index, 1); //na mjestu index prvi li
  localStorage.setItem("Novi", JSON.stringify(lista)); //setta bez obrisanog li
  prikaz(); //refresh prikaza
}

dugmeIzbrisiSve.addEventListener("click", () => {
  window.localStorage.clear();
  prikaz();
});
