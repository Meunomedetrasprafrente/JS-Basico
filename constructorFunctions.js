//camelCase umDoisTresQuatro

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}

let celularTipo1 = criarCelular('Apple',7.5,2000);
console.log(celularTipo1)

//PascalCase UmDoisTresQuatro

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação...');
    }
}

const celular = new Celular('Samsung',5.7,5600);
console.log(celular)

