var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
};

observable.subscribe(observer);
// también puedo ser un solo callback que se asignará al next
observable.subscribe(x => console.log('Observer got a next value: ' + x));
