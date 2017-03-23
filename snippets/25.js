var clicks = Rx.Observable.fromEvent(document, 'click');
var higherOrder = clicks.mergeMap((ev) => Rx.Observable.interval(1000).take(10));

higherOrder.subscribe(x => {
  console.log(x);
});
