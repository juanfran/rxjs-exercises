Rx.Observable.of(
    {
        name: "111",
        age: 12
    },
    {
        name: "222",
        age: 18
    },
    {
        name: "333",
        age: 21
    },
    {
        name: "444",
        age: 6
    },
    {
        name: "555",
        age: 33
    },    
)
.map((user) => user.age)
.filter((age) => age >= 18)
.scan((acc, age) => acc + age, 0)
.takeWhile((ages) =>  ages < 50)
.subscribe({
    next: x => console.log(x),
    complete: (x) => console.log('completado!')
});

/*
18
39
completado!
*/
