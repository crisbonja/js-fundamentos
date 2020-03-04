// declarando objetos
let person = {}; 

/*
 Declarando propriedades do meu objeto
*/
person = {
  name: 'Carlos Da Silva',
  age: 39,
  sex: 'male',
  single: false
};

  let cars = {
    company: 'Fiat',
    model: '147',
    sold: false,
    color: 'Blue',
    doors: 3
  }; 

  let cars2 = {
    company: 'Volks',
    model: 'Fusca',
    sold: true,
    color: 'black',
    doors: 3
  };


  function sayname(name) {
    return `Olá, ${name}`;
  }

  sayname('Carlos');

  function sum(a,b) {
    return a+b;
  }

  sum(0,9);

  var money = true;

  function sayMoney() {
     money = 'abacaxi';
    if(money) {
      return `Seu valor é ${money}`;
    }
    return `Não temos valor aqui!`;
  }

  var frutas = ['abacaxi', 'pera', 'tomate', 'abacate'];

  console.log(frutas);

// function anônima

  var soma = function(a,b) {
    return a + b;
  }

  var soma = (a,b) => {
    return a + b;
  }


let animal = 'cachorro';
typeof animal;

let verdadeiro = true;
typeof verdadeiro;

