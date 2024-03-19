
/*
let paisDeOrigem = "Brasil"
if (paisDeOrigem === "Brasil"){
    console.log('brasileiro')
} else if (paisDeOrigem === 'EUA'){
    console.log('norte americano')
} else if(paisDeOrigem === 'Inglaterra'){
    console.log('inglês')
} else {
    console.log ('nacionalidade não encontrada')
}

*/


let paisDeOrigem = 'EUA'
switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
    break

    case 'EUA':
        console.log('americano')
    break

    case 'Inglaterra':
        console.log('inglês')
    break
    default:
        console.log('nacionalidade não encontrada')
}