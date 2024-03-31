
//random numbers
// let randomInputArray= [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

// function generatePrimeNumbers(array){
//   let result = [];

//   for( value of array){

//     if((value % 2) > 0 && (value % 3) > 0  && value!== 1 || value=== 3 || value=== 2)
      
//     //if conditions are met push value to the result array
//       {  result.push(value) }
//     }
//     return result;
// }
// console.log(generatePrimeNumbers(randomInputArray))



// random numbers
let randomInputArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19];
function generatePrimeNumbers(array) {
    let result = [];

    for (value of array) {

        //if conditions are met push value to the result array
        if ((value === 2 || value === 3) || (value > 3 && value % 2 !== 0 && value % 3 !== 0)) {
            
            result.push(value);
        }
    }
    
    return result;
}


console.log(generatePrimeNumbers(randomInputArray)); 
