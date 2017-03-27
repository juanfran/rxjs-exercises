/*
  <button class="button-a">A</button>
  <button class="button-b">B</button>
  <button class="button-c">C</button>

  <button class="button-normal">Normal</button>
  <button class="button-behavior">Behavior</button>
  <button class="button-replay">Replay</button>
  <button class="button-async">Async</button>
*/

function getDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();  

    return `${hours}:${minutes}:${seconds}`;
}

var observable = Rx.Observable.create((observer) => {
  let counter = 0;
  let interval = setInterval(() => {   
    counter++;
    observer.next(getDate());

    if (counter === 4) {
      clearInterval(interval);
      observer.complete();
    }
  }, 4000);
});

var subject;

document.querySelector('.button-normal').addEventListener('click', (num) => {
  subject = new Rx.Subject();

  observable.subscribe(subject);
});

document.querySelector('.button-behavior').addEventListener('click', (num) => {
  let date = getDate();
  subject = new Rx.BehaviorSubject(date);

  observable.subscribe(subject);
});

document.querySelector('.button-replay').addEventListener('click', (num) => {
  subject = new Rx.ReplaySubject(5);

  observable.subscribe(subject);
});

document.querySelector('.button-async').addEventListener('click', (num) => {
  subject = new Rx.AsyncSubject();

  observable.subscribe(subject);
});

document.querySelector('.button-a').addEventListener('click', () => {
  subject.subscribe((date) => {
    console.log('A: ' + date);
  });
});

document.querySelector('.button-b').addEventListener('click', () => {
  subject.subscribe((date) => {
    console.log('B: ' + date);
  });
});

document.querySelector('.button-c').addEventListener('click', () => {
  subject.subscribe((date) => {
    console.log('C: ' + date);
  });
});
