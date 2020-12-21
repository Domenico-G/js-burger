// creo una variabile che rappresenta tutti i miei check-ingredients

var checkIngredients = document.getElementsByName('ingredient');

// preparo una variabile totale dell'ordine

var totalPrice = 0;

// creo un'array contenente i coupon

var coupon = ['123FEF12sdcsa', '332dfsaaf32sa33', 'asdcca322ERFVBEBE']

// creo una variabile per contenere il coupon dell'utente


// creo una variabile di conferma del couponUser




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
     console.log(totalPrice);

    var couponUser = document.getElementById('code-coupone').value;

    for (var i = 0; i <= coupon.length; i++) {
      var couponeValid = false;
      if (coupon[i] === couponUser) {
        couponeValid = true;
      }
      console.log(couponeValid);
    }

    if (couponeValid) {
      priceHtml.innerText = (totalPrice + 20) / 100;
    } else {
      priceHtml.innerText = totalPrice;
    }
 })
