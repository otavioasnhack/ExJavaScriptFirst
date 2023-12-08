// const frutas = ['banana','pera','uva','goiaba']
// console.log(frutas[3])
// for (let index = 0; index < frutas.length; index++) {
//   const element = frutas[index];
// console.log(element)  
// }

// for (const fruta of frutas) {
//   console.log(fruta)

// }
// for (const key in frutas) {
//   console.log(key)
// }
// const computador = {
//   memoriaRam : '16GB',
//   processador : 'i9 13th',
//   placaMae: 'ASRock H310CM',
//   placaDeVideo: 'MSI RADEON RX 580 ARMOR 8G',
// }
// for (const peca of Object.values(computador)) {
//   console.log(Object.values(computador))
// }
// computador.fonte = '750w'
// computador['monitor'] = 'LG 39\''
// let key = 'teclado'
// console.log(computador[key])
// frutas.push('maracuja')
// frutas.unshift('tomate')
// console.log(frutas)
// const saladaFrutas = [...frutas]
// saladaFrutas.push('leite condensado')
// frutas.pop()
// // console.log(frutas)
// for (let index = 0; index < 10; index++) {
//   console.log(index)
  
// // }
// const numbers = [5, 9, 3, 19, 70, 8, 100, 35, 2 , 27]
// let sum = 0
// let maiorNumero = numbers[0]
// let numerosImpares = 0
// for (let index = 0; index < numbers.length; index++) {
  // sum+=numbers[index]
// if (maiorNumero<numbers[index]) {
//   maiorNumero = numbers[index]
// else {
//   console.log('Nenhum valor ímpar encontrado')
// }
// if (numbers[index] % 2 !== 0 ) {
  // numerosImpares +=1
// }
// }
// console.log(numerosImpares)


// }
// console.log(maiorNumero);
// const mediaAritmetica = sum / numbers.length
// if (mediaAritmetica>20) {
//   console.log('O valor da média aritmética é maior que 20')
// }
// else{
//   console.log('O valor da média aritmética é menor ou igual a 20')
// }

// const fatorial = 5
// let resultado = 1
// for (let index = fatorial; index > 1; index=index-1) {
//   resultado *= index
// }
// console.log(resultado)
// let word = 'otavio nepomuceno'
// let invertida = word.split("").reverse().join('')
// console.log(invertida)
// const n = 5
// let asteriscos = ''
// for (let linha = 1; linha <= n; linha+=1) {
//   let distancia = ''
//   for (let espacos = linha; espacos <= n; espacos+=1) {
//     distancia += ' '
//   }
//   asteriscos += '*'
//   console.log(distancia + asteriscos)
// // }
//  function reverte(contrario) {
  
//  }
// .split('').reverse().join('')
function inverterSemMetodos(palavra) {
  if (palavra.length > 1) {
    let letras = ''
    // for (let index = palavra.length - 1; index >= 0; index-=1) {
    //   letras+=palavra[index]
    // }
    for (let index = 0; index < palavra.length; index+=1) {
      letras = palavra[index] + letras
    }
    return letras
  } 
  return 'O número de caracteres não satisfaz a condição'
}
console.log(inverterSemMetodos('paralelepipedo'))
// console.log(inverterSemMetodos(''))
