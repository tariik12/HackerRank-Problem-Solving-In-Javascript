/**
 * Solution for Problem Diagonal Difference
 * https://www.hackerrank.com/challenges/diagonal-difference/
 */
/**
 * input: Square Matrix
 * process: =>declare 2 variable to store left to right diagonal &      right to let diagonal.
 *          =>declare 2 for loop intialize; for left to right and reverse way for right to left.
 *          =>iterate matrix array using for looping.
 *          =>iterte arr[i] using looping; calculate left to right diagonal elements; break and again loopping and encourage 1 looping variable j; 
 *          => use revers looping for rite to left followed same formula. 
 *          =>
 * output: return absolute difference between the sums of its diagonals.
 */
function diagonalDifference(arr) {
    // Write your code here
    let leftToRight=0;
    let rightToLeft=0;
    let leftIndex=0;
    let rightIndex=arr.length;
    for(let i=0; i<arr.length;i++){
        
        for(let j=leftIndex; j<arr[i].length;j++){
            leftToRight = leftToRight +arr[i][j];
            leftIndex=leftIndex+1;
            break;
        }
        for(let k= rightIndex - 1; 0<=k; k-- ){
            rightToLeft = rightToLeft + arr[i][k];
            rightIndex = rightIndex-1;
            break;
        }
    }
    return Math.abs(leftToRight-rightToLeft);
}
