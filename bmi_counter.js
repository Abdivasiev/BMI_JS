// Insert your parameters here
function bmiFormula(m, h) {
    return m / (h ** 2);
}
let firstPerson = bmiFormula(110,1.75);
let secondPerson = bmiFormula(85,1.76);
console.log(firstPerson, secondPerson, firstPerson > secondPerson);
if (firstPerson>secondPerson){
   alert(`Firsts's BMI is higher than Seconds's! by ${firstPerson-secondPerson} score!`)
}
if (secondPerson>firstPerson){
    alert(`2's BMI is higher than 1's! by ${secondPerson-firstPerson} score`)
}