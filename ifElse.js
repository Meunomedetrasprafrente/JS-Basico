//If, Else, Switch

//Se a hora estiver entre 06:00 até 12:00 : BOM DIA!
//Se estiver entre 12:00 até 18:00 : BOA TARDE!
//caso o contrário: BOA NOITE!
let hora = 19;


if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if(hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}