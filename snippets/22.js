var clicks = Rx.Observable.fromEvent(document, 'click');
var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
var firstOrder = higherOrder.mergeAll(2);
firstOrder.subscribe(x => console.log(x));

// click 
// 0
// 1
// 2
// click
// 0
// 3
// 1
// 4
// 2
// 5