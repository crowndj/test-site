/* itemNumber is what item you're on
1, 2, 3

function itemSwitch
hides a item and shows a item based on the itemNumber

if itemNumber is 1: hide item 1, show item 2
switch itemNumber to 2

else if itemNumber is 2: hide item 2, show item 3
switch itemNumber to 3

else: hide item 3, show item 1
switch itemNumber to 1
*/
  var discountItem = 1;

  var itemSwitch = function() {
    if (discountItem === 1) {
      hideItem('item1');
      showItem('item2');
      discountItem = 2;
    } else if (discountItem === 2) {
      hideItem('item2');
      showItem('item3');
      discountItem = 3;
    } else {
      hideItem('item3');
      showItem('item1');
      discountItem = 1
    }
  }

  var itemNumber = 1;

  var itemBack = function() {
    if (itemNumber === 1) {
      hideItem('item1');
      showItem('item3');
      itemNumber = 3;
    } else if (itemNumber === 3) {
      hideItem('item3');
      showItem('item2');
      itemNumber = 2;
    } else {
      hideItem('item2');
      showItem('item1');
      itemNumber = 1;
    }
  }

  var hideItem = function(id) {
    document.getElementById(id).style.visibility = "hidden";
  }

  var showItem = function(id) {
    document.getElementById(id).style.visibility = "visible";
  }
