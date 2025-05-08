/**
 *Solution for prolem no 2: simple array sum
 *  https://www.hackerrank.com/challenges/simple-array-sum
 */
/**
 * input: an array of integers
 * process: => declare a variable to store summation
 *          => render array to sum each element using for or forEach method
 *          => return summation.
 * output:the sum of array elements
*/
function simpleArraySum(ar) {
    // Write your code here
    let sum =0
    // for(let i=0; i<ar.length; i++){
        //     sum +=ar[i];
        // }
        ar.forEach((value)=>sum = sum + value)
        return sum;
        
    }
    
    const ar=[1, 2, 3, 4, 10, 11];
const result= simpleArraySum(ar);
console.log(result);