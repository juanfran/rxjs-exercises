const intervalOne$ = Rx.Observable.interval(1000);
const intervalTwo$ = Rx.Observable.interval(2000);

Rx.Observable.combineLatest(
    intervalOne$,
    intervalTwo$ 
).subscribe(all => console.log(all));

/*
[1, 0]
[2, 0]
[3, 0]
[3, 1]
[4, 1]
[5, 1]
[5, 2]
*/