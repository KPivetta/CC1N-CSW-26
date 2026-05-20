var issoeumastring = 'Isso é uma string';
let issoeumnumero = 4;
const issoeumboleano = true;
let issotambemeumastring = '4';

console.log(issoeumnumero == issoeumastring);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);

console.log(typeof issoeumastring == typeof issoeumnumero);
console.log(typeof issoeumnumero);
console.log(typeof issotambemeumastring);

console.log(issoeumnumero + issotambemeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
sum

//numeros pares de 0 a 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0); {
        console.log(i) };
}


//Gerendo com while os impares
let j = 0;
while (j = 10) {
    if(j % 2 !== 0) {
        console.log(j);
    }
    j++
}

console.log(j)