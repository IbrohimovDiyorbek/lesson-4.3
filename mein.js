alert("Sizda hozir random sonlar chiqa boshlaydi");
let random = Math.trunc(101 * Math.random());
alert(random);
let plus = (2);
let minus = (2);
let bolish = (3);
let a = (random * plus);
let b =(a / minus);
let c =(b / bolish)
alert("Random son: " +  random + "\n" + "Random songa 2 Ko'paytirilganda: " +  a + "\n" + "Chiqqan sonni 2 ga bo'liganda: " + b + "\n" + "Chiqqan sonni 3 ga bo'lganda: " + c);