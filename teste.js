const numbers = [5, 9, 3, 19, 70, 8, 100, 35, 2 , 27]
let numerosMaiores = []
for (let index = 0; index < numbers.length; index++) {
 if (numbers[index]>5) {
   numerosMaiores.push(numbers[index])
 }   
    
}
console.log(numerosMaiores.length)
console.log(numerosMaiores.sort((a, b) => b - a))