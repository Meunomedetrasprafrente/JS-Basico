const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal: 75,
        },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}

celular.tamanhoTela = 20,
console.log(celular.tamanhoTela)