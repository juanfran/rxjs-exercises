//<input class="search" type="text" name="" value="">

let input = document.querySelector('.search');

var observable = Rx.Observable.fromEvent(input, 'keyup')
  .map((event) => {
    return event.currentTarget.value;
  })
  .distinctUntilChanged()  
  .filter((value) => {
    return value.indexOf('buscar') === 0;
  })
  .map((value) => {
    return value.replace('buscar', '');
  });

observable.subscribe((result) => {
  console.log(result);
});
