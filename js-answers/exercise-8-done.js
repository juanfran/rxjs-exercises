/*
<input type="number" class="num1" />
<input type="number" class="num2" />
*/

let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');

let observable1 = Rx.Observable.fromEvent(num1, 'keyup')
  .map((e) => parseInt(e.currentTarget.value, 10));

let observable2 = Rx.Observable.fromEvent(num2, 'keyup')
  .map((e) => parseInt(e.currentTarget.value, 10));  

Rx.Observable.combineLatest(
    observable1,
    observable2
)
  .map((nums) => nums[0] + nums[1])
  .subscribe(all => console.log(all));  
