let usuario = {
    name: 'Kalel',
    excluir: function(){
        console.log('O usuário ' + this.name + ' foi excluído!')
    }
}

usuario.excluir()