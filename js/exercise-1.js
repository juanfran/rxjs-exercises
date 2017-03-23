import Rx from 'rxjs/Rx';

var clicks = Rx.Observable.fromEvent(document, 'click');
var higherOrder = clicks.mergeMap((ev) => Rx.Observable.interval(1000).take(10));

higherOrder.subscribe(x => {
  console.log(x);
});

/*

var clicks = Rx.Observable.fromEvent(document, 'click');
var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
var firstOrder = higherOrder.mergeAll(2);
firstOrder.subscribe(x => console.log(x));


/*var firstOrder = higherOrder.mergeAll(2);
firstOrder.subscribe(x => console.log(x));*/

// Maps each value to an Observable, 
// then flattens all of these inner Observables using mergeAll.

/*const source = Rx.Observable.of('Hello');
//map to inner observable and flatten
const example = source.mergeMap(val => Rx.Observable.of(`${val} World!`));
//output: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val));
*/

/*
Map and flatten each letter to an Observable ticking every 1 second

var letters = Rx.Observable.of('a', 'b', 'c');
var result = letters.mergeMap(x =>
  Rx.Observable.interval(1000).map(i => x+i)
);
result.subscribe(x => console.log(x));
*/
