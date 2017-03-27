let observable = Rx.Observable.fromEvent(document, 'mousemove')
  .map((e) => e.clientX)
  .pairwise()  
  .scan((acc, x) => acc + x[1] - x[0], 0)
  .takeWhile((x) => x < 500);

observable.subscribe({
  complete: () => console.log('completed!')
});
