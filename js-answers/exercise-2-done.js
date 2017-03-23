/*      
<button class="subscribe" type="text">subscribe</button>
<button class="cancel" type="text">cancel</button>        
*/

var observable = Rx.Observable.create((observer) => {
  let event = (e) => {
    observer.next({x: e.clientX, y: e.clientY});
  };
  
  document.addEventListener('mousemove', event);

  return function() {
    document.removeEventListener('mousemove', event);
  };
});

var subscribe = document.querySelector('.subscribe');
var cancel = document.querySelector('.cancel');
var subscription = null;

subscribe.addEventListener('click', () => {
  subscription = observable.subscribe((x) => console.log(x));
});

cancel.addEventListener('click', () => {
  subscription.unsubscribe();
});

