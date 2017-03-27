Rx.Observable.prototype.higherThanTen = function() {
  var input = this;
  return Rx.Observable.create(function subscribe(observer) {
    input.subscribe((num) => {
      if (num > 10) {
        observer.next(num);
      }
    });
  });
}

var observable = Rx.Observable.from([10, 2, 33, 4, 20]).higherThanTen();

observable.subscribe(x => console.log(x));
