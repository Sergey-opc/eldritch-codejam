function setButtonMode(e, itemType) {

    var els = document.getElementsByClassName("pushed");
  
    Array.prototype.forEach.call(els, function(el) {
      el.classList.remove('pushed');
    });
  
    document.getElementById(itemType).classList.add('pushed');
  
  }