/**
 * Solution for problem Staircase-07
 * https://www.hackerrank.com/challenges/staircase/
 */
/**
 * input:  size n;
 * process: => deaclare a variable of string;
 *          => iterate size of n; 
 *          => again iterate size of n inside of first loop
 *          => if iterate index <= concat inside of declarete #
 *          => other wise contact spase;
 * output:# staircase of size n;
 */

function staircase(n) {
    // Write your code here
for(let i=0; i<n; i++){
    let printStaircase="";
    for (let j=n-1; 0<=j; j--){
        if(i>=j){
        printStaircase = printStaircase.concat("#");
        }else {
        printStaircase= printStaircase.concat(" ");
        }
    }
console.log(printStaircase);
}
}