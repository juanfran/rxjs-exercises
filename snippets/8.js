var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log('a: ', x));

setTimeout(() => {
  var subscription = observable.subscribe(x => console.log('b: ', x));
}, 1000);

// a:  0
// a:  1
// b:  0
// a:  2
// b:  1
// a:  3
// b:  2
// etc
