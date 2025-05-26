
/**
 * Problem Solutions Apple and Orange
 * https://www.hackerrank.com/challenges/apple-and-orange
 */
/**
 * * PSA *
 * Sam's house stratpoint express by = a & endpoint express by b;
 * The house left is the apple tree starting point is a & right is the orange tress starting point is the b; 
 * Fruits distance from tree express by d where x-axis positive value is right & negetive value is left; 
 * 
 * provide the value of d for m apples and n oranges. determine how many aplles & oranges will fall on Sam's house in the inclusive range [s,t]?;
 * 
 * PSSC *
 * input argument of fuction s, t, a, b, apples, oranges
 * process:
 *      declare 2 variable countedApples & countedOranges where initial value is 0 using local scope let;
 *      iterate apples.length;
 *      compute for apples let distance = a + apples[i] & check if (distance>=a && distance<=b)  countedApples +=1;
 *      iterate oranges.length;
 *      compute for oranges let distance = b + oranges[i] & check if _(distance>=a && distance<=b) countedOranges +=1;
 *      console.log(countedApples, '\n', countedOranges)
 * 
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countedApples =0;
    let countedOranges =0;
    
    for(let i = 0; i<apples.length; i++){
        const distance = a + apples[i];
        if(distance>=s && distance<=t){countedApples +=1;}
    } 
    
    for(let i=0; i<oranges.length;i++){
        const distance = b + oranges[i];
        if(distance>=s && distance<=t){countedOranges +=1;}
    }
    console.log(countedApples);
    console.log(countedOranges);

}
