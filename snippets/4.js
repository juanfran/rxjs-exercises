var observable = Rx.Observable.create(function subscribe(observer) {
  // Keep track of the interval resource
  var intervalID = setInterval(() => {
      observer.next('hi');
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
      clearInterval(intervalID);
  };
});

var subscription = observable.subscribe((text) => {
    console.log(text);
});

subscription.unsubscribe();
