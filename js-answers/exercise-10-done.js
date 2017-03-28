 //<div class="box"></div>
 
let box = document.querySelector('.box');

let observable = Rx.Observable.fromEvent(box, 'mousedown')
  .switchMap((e) => {
    let boxTarget = e.currentTarget;

    let left = parseInt(window.getComputedStyle(boxTarget).left, 10);
    let top = parseInt(window.getComputedStyle(boxTarget).top, 10);

    let initX = e.clientX - left;
    let initY = e.clientY - top;

    let mouseup = Rx.Observable.fromEvent(boxTarget, 'mouseup');

    return Rx.Observable.fromEvent(box, 'mousemove')
    .takeUntil(mouseup)    
    .map(((e) => {
      return {
        x: e.clientX - initX,
        y: e.clientY - initY
      }
    }))
    .forEach((cords) => {
        boxTarget.style.top = cords.y;
        boxTarget.style.left = cords.x;
    })
  });


observable.subscribe();
