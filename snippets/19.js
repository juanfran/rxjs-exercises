Rx.Observable
  .fromEvent(document, 'click')
  .map(e => e.clientX)
  .pairwise()
  .subscribe(pair => console.log(pair)); 

/*
en el primer click no pasa nada
[17, 1467]
[1467, 1109]*/