var observable = Rx.Observable.create((observer) => {
  let numbers = [1, 2, 3, 4, 5];
  let interval = setInterval(() => {
    observer.next(numbers.shift());

    if (!numbers.length) {
      clearInterval(interval);
      observer.complete();
    }
  }, 1000);
});

observable.subscribe({
  next: (x) => console.log(x),
  complete: () => console.log('done!')
})
