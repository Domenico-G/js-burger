// creo una variabile che rappresenta tutti i miei check-ingredients

var checkIngredients = document.getElementsByName('ingredient');

// preparo una variabile totale dell'ordine

var totalPrice = 0;

// cree una variabile per contenere il nome del panino

var burgherName;

var burgherLabel = document.getElementById('obligatory-label');

burgherLabel.style.display = "none";

// creo un'array contenente i coupon

var coupon = ['123FEF12sdcsa', '332dfsaaf32sa33', 'asdcca322ERFVBEBE']

// creo una label dove inserire la verifica di ingredienti minimi

var minIngLabel = document.getElementById('minim-ingedients');
minIngLabel.style.display = "none";

// creo una variabile dove inseriro il totale nell'html

var priceHtml = document.getElementsByClassName('price')[0];

var burgherName = document.getElementsByName('name-burgher').value;

// creo una funzione dove sommerò i check selezionati

document.getElementById("button-price").addEventListener("click", function() {
  totalPrice = 0;
  urgherName = '';
  var minIngredients = 0;

  for (var i = 0; i < checkIngredients.length; i++) {
    if (checkIngredients[i].checked) {
      ++minIngredients;
      totalPrice += parseInt(checkIngredients[i].value);
    }
  }

  var createBurgher = document.getElementsByClassName('name-burgher')[0];
  burgherName = createBurgher.value;

  if (burgherName.length === 0) {
    burgherLabel.style.display = "block";
  } else if (minIngredients < 2 ) {
    burgherLabel.style.display = "none";
    minIngLabel.style.display = "block";
  } else {
    minIngLabel.style.display = "none";

    // creo una variabile per contenere il coupon dell'utente
    var couponUser = document.getElementById('code-coupone').value;
    var couponeValid = false;

    for (var i = 0; i <= coupon.length; i++) {
      if (coupon[i] === couponUser) {
        couponeValid = true;
      }
    }

    if (couponeValid) {
      priceHtml.innerText = totalPrice - ((totalPrice * 20) / 100);
    } else {
      priceHtml.innerText = totalPrice;
    }
  }

})
