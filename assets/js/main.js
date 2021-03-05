// CREO UNA STRINGA "FIZZ" E LA SALVO IN UNA VARIABILE
var fizz = "Fizz";

// CREO UNA STRINGA "BUZZ" E LA SALVO IN UNA VARIABILE
var buzz = "Buzz";

// CREO UNA STRINGA "FIZZBUZZ" E LA SALVO IN UNA VARIABILE
var fizzbuzz = "FizzBuzz";

// SCORRO TUTTI I  NUMERI DA 1 A 100 E CONTROLLO SE I NUMERI SONO MULTIPLI DI 3 E 5(CONDIZIONE PIU' STRINGENTE), ALLORA STAMPO "FIZZBUZZ", SE SONO MULTIPLI DI 3 ALLORA STAMPO "FIZZ", SE SONO MULTIPLI DI 5, ALLORA STAMPO "BUZZ", ALTRIMENTI STAMPO I NUMERI PER COME SONO (i)
for (var i = 1; i <= 100; i++) {
if (!(i % 3) && !(i % 5)) {
    document.getElementById('lista-numeri').innerHTML += "<li><a>" + fizzbuzz + "</a></li>";
  } else if (!(i % 3)) {
    document.getElementById('lista-numeri').innerHTML += "<li><a>" + fizz + "</a></li>";
  } else if (!(i % 5)) {
    document.getElementById('lista-numeri').innerHTML += "<li><a>" + buzz + "</a></li>";
  } else {
    document.getElementById('lista-numeri').innerHTML += "<li><a>" + i + "</a></li>";
  }
}
// CREO UNA VARIABILE E GLI INSERISCO LA LISTA
var lista = document.getElementById('lista-numeri');

// TOGLIERE LIST-STYLE ALLA UL
lista.style.listStyle = "none";

// FAR CAMBIARE COLORE A FIZZ E BUZZ AL CLICK DEL MOUSE
// CREO UNA VARIABILE E GLI INSERISCO GLI LI DELLA LISTA
var elementiLista = document.getElementById("lista-numeri").children;
console.log(elementiLista);


// ALL'HOVER DEL MOUSE SULL'LI DESIDERATO CAMBIO IL COLORE
for (var i = 0; i < elementiLista.length; i++) {
  elementiLista[i].style.color = "#1c75bc";
  elementiLista[i].style.fontWeight = "700";
  elementiLista[i].addEventListener('click', function(e){
    e.target.style.color = "orange";
  })
}
