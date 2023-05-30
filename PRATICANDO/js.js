function startCounter() {
    var inicio = document.querySelector('input#texnu').value;
    var fim = document.querySelector('input#texnum').value;
    var passo = document.querySelector('input#texnums').value;
    var res = document.querySelector('div#tex0');
 
    var i = incio
    var f = fim
    var p = passo
    

    for(var c = i; c <= f; c += p){
      res.innerHTML = `${c}`
    }
}
  