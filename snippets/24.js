var clicks = Rx.Observable.fromEvent(document, 'click');
var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
result.subscribe(x => console.log(x));

// click 
// 0
// 1
// 2
// click
// 0
// 1
// 2
// 3
// 4

let ajax = Rx.Observable.ajax('https://jsonplaceholder.typicode.com/posts');

Rx.Observable.fromEvent(document, 'click')
  .debounceTime(400)  
  .switchMap(value => ajax.retry(3))
  .subscribe(x => console.log(x))
