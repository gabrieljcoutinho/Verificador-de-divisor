const num = 3;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisível por 3 e 5");
} else if (num % 5 === 0 && num % 3 !== 0) {
    console.log("Dividido apenas por 5");
} else if (num % 3 === 0 && num % 5 !== 0) {
    console.log("Dividido apenas por 3");
} else {
    console.log("Não é divisível por 3 nem por 5");
}
