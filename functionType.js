function dizerNome(){
    console.log('Jonathan')
}
dizerNome()

function multiplicarPorDois(valor){
    return valor*2;
}

console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(6)

console.log(resultado)

function multiplicar(a,b){
    return a * b;
}

let resultadoDaMultiplicacao = multiplicar(3,8);
console.log(resultadoDaMultiplicacao)

const brinquedo = 'anabele';

switch (brinquedo){
    case 'buzz':
        console.log('É o Buzz LightYear')
        break;
    case 'woody':
        console.log('é o woody!!')
        break;
    case 'anabele':
        console.log('que medo!!!')
        break;
    default:
        console.log('brinquedo irreconhecível!')
}

