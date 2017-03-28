// <button class="btn">Get</button>

let btn = document.querySelector('.btn');
let ajax = Rx.Observable.ajax('https://jsonplaceholder.typicode.com/posts');

let observable = Rx.Observable.fromEvent(btn, 'click')
  .mergeMap((ev) => ajax)
  .map((it) => it.response)
  .scan((acc, curr) => acc.concat(curr), []);

observable.subscribe((x) => console.log(x.length));
