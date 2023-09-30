const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedade(filme);
function exibirPropriedade(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}

const meuObjeto = {
    nome: 'Kleber',
    idade: 44,
    cidade: 'Santo Amaro',
    email: 'kleberson666@gmail.com'
}

function mostrarStrings(objeto){
    for(const chave in objeto){
        if(typeof objeto[chave] === 'string'){
            console.log('chave' + ':' + objeto[chave])
        }
    }
}

mostrarStrings(meuObjeto);

const lapis = {
    cor: 'vermelha',
    largura: 3,
    espessura: 6,
    tamanho: 'alto'
}

exibirCaracteristica(lapis);

function exibirCaracteristica(lapisDePintar){
    for(caracteristica in lapisDePintar)
        if(typeof lapisDePintar[caracteristica] === 'string');
            console.log(lapisDePintar)
}

let frutas = {
    cor: 'verde amarelado',
    nome: 'manga',
    ano: 1995,
    comivel: 'não'
}

exibirFruta(frutas);
function exibirFruta(objFruta){
    for(propFruta in objFruta)
        if(typeof objFruta[propFruta] === 'string')
            console.log(objFruta[propFruta])
}
