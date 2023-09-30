function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 =  criarCelular('Zenfone',5.5,5000);
console.log(celular1)

function criarRoupa(marcaDaRoupa,corDaRoupa,tipoDeroupa,tamanhoDaRoupa){
    return{
        marcaDaRoupa,
        corDaRoupa,
        tipoDeroupa,
        tamanhoDaRoupa,
    }
}

const roupaTipo1 = criarRoupa('Black Sabbath', 'Preto','Camiseta','GG')
console.log(roupaTipo1)