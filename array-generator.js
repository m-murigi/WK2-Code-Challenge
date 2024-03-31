function generateAnArray(num1,num2){
     //an empty array that stores the generated numbers
let arr =[];
for(let i=num1;i<=num2;i++){
    arr.push(i);
}
    //return generated array
return arr;
}
console.log(generateAnArray (-4,7))
