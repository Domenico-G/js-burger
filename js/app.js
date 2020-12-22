// creo una variabile che contengono gli elemnti HTML
var checkIngredients = document.getElementsByName('ingredient');
var burgherLabel = document.getElementById('obligatory-label');
var minIngLabel = document.getElementById('minim-ingedients');
var priceHtml = document.getElementsByClassName('price')[0];
var burgherName = document.getElementsByName('name-burgher').value;

// creo un'array contenente i coupon
var coupon = ['123FEF12sdcsa', '332dfsaaf32sa33', 'asdcca322ERFVBEBE']

// nascondo elemnti HTML
minIngLabel.style.display = "none";
burgherLabel.style.display = "none";

// creo una funzione dove sommerò i check selezionati
document.getElementById("button-price").addEventListener("click", function() {
  var totalPrice = 0;
  var burgherName = '';
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
  } else if (minIngredients < 2) {
    minIngLabel.style.display = "block";
    burgherLabel.style.display = "none";
  } else {
    minIngLabel.style.display = "none";
    // creo una variabile per contenere il coupon dell'utente
    var couponUser = document.getElementById('code-coupone').value;
    var couponeValid = false;

    if (coupon.indexOf(couponUser) !== -1) {
      couponeValid = true;
    }

    if (couponeValid) {
      priceHtml.innerText = totalPrice - ((totalPrice * 20) / 100);
    } else {
      priceHtml.innerText = totalPrice;
    }
  }




})
