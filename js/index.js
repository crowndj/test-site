/* shirtNumber is what shirt you're on
1, 2, 3

function shirtSwitch
hides a shirt and shows a shirt based on the shirtNumber

if shirtNumber is 1: hide shirt 1, show shirt 2
switch shirtNumber to 2

else if shirtNumber is 2: hide shirt 2, show shirt 3
switch shirtNumber to 3

else: hide shirt 3, show shirt 1
switch shirtNumber to 1
*/
  var discountItem = 1;

  var item = function() {
    if (shirtNumber === 1) {
      hideShirt('shirt1');
      showShirt('shirt2');
      shirtNumber = 2;
    } else if (shirtNumber === 2) {
      hideShirt('shirt2');
      showShirt('shirt3');
      shirtNumber = 3;
    } else if (shirtNumber === 3) {
      hideShirt('shirt3');
      showShirt('shirt4');
      shirtNumber = 4;
    } else {
      hideShirt('shirt4');
      showShirt('shirt1');
      shirtNumber = 1
    }
  }

  var shirtBack = function() {
    if (shirtNumber === 1) {
      hideShirt('shirt1');
      showShirt('shirt4');
      shirtNumber = 4;
    } else if (shirtNumber === 4) {
      hideShirt('shirt4');
      showShirt('shirt3');
      shirtNumber = 3;
    } else if (shirtNumber === 3) {
      hideShirt('shirt3');
      showShirt('shirt2');
      shirtNumber = 2;
    } else {
      hideShirt('shirt2');
      showShirt('shirt1');
      shirtNumber = 1;
    }
  }

  shirtNumber = 5;

  var shirtSwitch2 = function() {
    if (shirtNumber === 5) {
      hideShirt('shirt5');
      showShirt('shirt6');
      shirtNumber = 6;
    } else if (shirtNumber === 6) {
      hideShirt('shirt6');
      showShirt('shirt7');
      shirtNumber = 7;
    } else if (shirtNumber === 7) {
      hideShirt('shirt7');
      showShirt('shirt8');
      shirtNumber = 8;
    } else {
      hideShirt('shirt8');
      showShirt('shirt5');
      shirtNumber = 5;
    }
  }

  var shirtBack = function() {
    if (shirtNumber === 5) {
      hideShirt('shirt1');
      showShirt('shirt4');
      shirtNumber = 4;
    } else if (shirtNumber === 4) {
      hideShirt('shirt4');
      showShirt('shirt3');
      shirtNumber = 3;
    } else if (shirtNumber === 3) {
      hideShirt('shirt3');
      showShirt('shirt2');
      shirtNumber = 2;
    } else {
      hideShirt('shirt2');
      showShirt('shirt1');
      shirtNumber = 1;
    }
  }

  var hideShirt = function(id) {
    document.getElementById(id).style.visibility = "hidden";
  }

  var showShirt = function(id) {
    document.getElementById(id).style.visibility = "visible";
  }
