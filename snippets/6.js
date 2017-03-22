var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));

subscription.unsubscribe();
