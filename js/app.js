// creo una variabile che rappresenta tutti i miei check-ingredients

var checkIngredients = document.getElementsByClassName('ingredients-list')[0].getElementsByTagName('input');

// preparo una variabile totale dell'ordine

var totalPrice = 0;

// creo una variabile dove inseriro il totale nell'html

var priceHtml = document.getElementsByClassName('price')[0];

// creo una funzione dove sommerò i check selezionati

 document.getElementById("button-price").addEventListener("click", function() {
   totalPrice = 0;

   for (var i = 0; i < checkIngredients.length; i++) {
      if (checkIngredients[i].checked) {
        totalPrice += parseInt(checkIngredients[i].value);
      }
    }
     priceHtml.innerText =+ totalPrice;



 })
