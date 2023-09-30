let permissao = 'gerente'

switch(permissao){
    case 'comum':
    console.log('usuário comum');
    break;

    case 'gerente':
    console.log('usuário gerente');
    break;

    case 'diretor':
    console.log('usuário diretor');
    break;

    default: 
    console.log('usuário não reconhecido!')
}

let idadeParaEntar = '17';

switch(idadeParaEntar){
    case idadeParaEntar > '18':
    console.log('Pode entrar');
    break;

    case idadeParaEntar < '18':
    console.log('Saia imediatamente!');
    break;

    default:
        console.log('Idade não reconhecida.');
}