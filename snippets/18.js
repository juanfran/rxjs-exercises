const getPostOne$ = Rx.Observable.timer(3000).mapTo(1);
const getPostTwo$ = Rx.Observable.timer(6000).mapTo(2);

Rx.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe(res => console.log(res)) 

/*[1, 2]*/