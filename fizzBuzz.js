// divisivel por 3 => fizz
// divisivel por 5 => buzz
// divisivel por 3 e 5 => fizzBuzz
// não  divisivel por 3 ou 5 => entrada
// não é um número => 'Não é um número'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 && entrada % 5 === 0);
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0);
        return 'Buzz';
    return entrada;
}