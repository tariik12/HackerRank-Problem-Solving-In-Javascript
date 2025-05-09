/**
 * Solution for problem-6 Plus Minus
 * https://www.hackerrank.com/challenges/plus-minus/
 */
/**
 * input:array of integers
 * process: =>declare an array of three index to count positive, negative and zero
 *          =>iterate array and check positive, negative and zero
 *          => count and store into declared array
 *          =>iterate declared array and fraction each value and 6 places 
 * output: renter ratios of positive, negative & zero. 
 */
function plusMinus(arr) {
    // Write your code 
    let CountNumber=[0,0,0];
    // let decimalNumber = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        CountNumber[2] = CountNumber[2] +1;
    }else if(arr[i]<0){
        CountNumber[1]=CountNumber[1] +1;
    }else if(arr[i]>0){
        CountNumber[0]= CountNumber[0]+1;
    }
}
for (let j=0; j<CountNumber.length; j++){
    console.log((CountNumber[j]/arr.length).toFixed(6))
}
// return decimalNumber.join('\n');
}