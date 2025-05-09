/**
 * Solutions for Problem-8
 * https://www.hackerrank.com/challenges/mini-max-sum
 */
/**
 * input: five positive int as array;
 * process: => itreare array by forEach ;
 *          => find out max and mini number by Math.max and Math.min
 *          => sum minimum 4 numbers;
 *          => sum maximum 4 numbers;
 * output: print summing exactly four of the five inters minimum and maximum.
 * 
*/
function miniMaxSum(arr) {
    // Write your code here
   
    let totalSum = 0;
    arr.forEach((value) =>totalSum = totalSum+value);
    console.log(totalSum - Math.max(...arr), totalSum - Math.min(...arr));
   
}
