var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('a: ' + v)
});

subject.subscribe({
  next: (v) => console.log('b: ' + v)
});

var observable = Rx.Observable.interval(1000);

observable.subscribe(subject); // You can subscribe providing a Subject

// a: 0
// b: 0
// a: 1
// b: 1
// a: 2
// b: 2
// a: 3
// b: 3
