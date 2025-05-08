
/**
 * Solution for Problem-4: A Very Big Sum
 * https://www.hackerrank.com/challenges/a-very-big-sum
 */
/**
 * input: array;
 * process: declare a result variable to store each element summation
 *          render array and sum each element with previous element
 *  output: return summation of all elements;
 */
function aVeryBigSum(ar) {
    // Write your code here
    let result =0;
    ar.forEach((value)=>result = result+value);
return result;
}
