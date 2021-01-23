// creo variabili che contengono gli elemnti HTML
var checkIngredients = document.getElementsByName('ingredient');
var burgherLabel = document.getElementById('obligatory-label');
var minIngLabel = document.getElementById('minim-ingedients');
var priceHtml = document.getElementsByClassName('price')[0];
var createBurgher = document.getElementsByClassName('name-burgher')[0];
var couponUser = document.getElementById('code-coupone');

// creo un'array contenente i coupon
var coupon = ['123FEF12sdcsa', '332dfsaaf32sa33', 'asdcca322ERFVBEBE']

// nascondo elemnti HTML di avviso
minIngLabel.style.display = "none";
burgherLabel.style.display = "none";

// creo una costante del prezzo
var totalPrice = 10;
priceHtml.innerText = totalPrice;

// creo una funzione dove sommerò i prezzi degli ingredienti selezionati
document.getElementById("button-price").addEventListener("click", function() {
  // resetto le variabili ogni inizio ciclo
  totalPrice = 10;
  var burgherName = '';
  var minIngredients = 0;

  // creo un ciclo dove sommare tutti i check selezionati
  for (var i = 0; i < checkIngredients.length; i++) {
    if (checkIngredients[i].checked) {
      ++minIngredients;
      totalPrice += parseInt(checkIngredients[i].value);
    }
  }

  // verifico che sia inserito il nome del burger e selezionata piu di una checkbox
  burgherName = createBurgher.value;
  if (burgherName.length === 0) {
    burgherLabel.style.display = "block";
  } else if (minIngredients < 2) {
    minIngLabel.style.display = "block";
    burgherLabel.style.display = "none";
    priceHtml.innerText = totalPrice;
  } else {
    minIngLabel.style.display = "none";
    burgherLabel.style.display = "none";

    // creo una variabile per contenere il coupon dell'utente
    var couponeValid = false;


    // confronto il coupon con l'array, se è valido applico lo sconto
    if (coupon.indexOf(couponUser.value) !== -1) {
      couponeValid = true;
    }

    if (couponeValid) {
      priceHtml.innerText = totalPrice - ((totalPrice * 20) / 100);
    } else {
      priceHtml.innerText = totalPrice;
    }
  }
})

