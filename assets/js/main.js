// CREO UNA STRINGA "FIZZ" E LA SALVO IN UNA VARIABILE
var fizz = "Fizz";

// CREO UNA STRINGA "BUZZ" E LA SALVO IN UNA VARIABILE
var buzz = "Buzz";

// CREO UNA STRINGA "FIZZBUZZ" E LA SALVO IN UNA VARIABILE
var fizzbuzz = "FizzBuzz";

// SCORRO TUTTI I  NUMERI DA 1 A 100 E CONTROLLO SE I NUMERI SONO MULTIPLI DI 3 E 5(CONDIZIONE PIU' STRINGENTE), ALLORA STAMPO "FIZZBUZZ", SE SONO MULTIPLI DI 3 ALLORA STAMPO "FIZZ", SE SONO MULTIPLI DI 5, ALLORA STAMPO "BUZZ", ALTRIMENTI STAMPO I NUMERI PER COME SONO (i)
for (var i = 1; i <= 100; i++) {
if (!(i % 3) && !(i % 5)) {
    document.getElementById('lista-numeri').innerHTML += "<li>" + fizzbuzz + "</li>";
    console.log(fizzbuzz);
  } else if (!(i % 3)) {
    document.getElementById('lista-numeri').innerHTML += "<li>" + fizz + "</li>";
    console.log(fizz);
  } else if (!(i % 5)) {
    document.getElementById('lista-numeri').innerHTML += "<li>" + buzz + "</li>";
    console.log(buzz);
  } else {
    document.getElementById('lista-numeri').innerHTML += "<li>" + i + "</li>";
    console.log(i);
  }
}
