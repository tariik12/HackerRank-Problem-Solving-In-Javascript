/**
 * Solution for problem-9
 * https://www.hackerrank.com/challenges/birthday-cake-candles
 */
/**
 * 
 * input: arry of integers;
 * process: => declare 2 variable count and max value;
 *          => iterate by for of loop;
 *          => check max value and count 1
 *          => else if check  have any same value if get count 1;   
 * output: return number of max candles;
 * 
 */
function birthdayCakeCandles(candles) {
  
    let max=0;
    let count = 0;
    for(let c of candles){
      if(c>max){
          max=c;
          count =1;
      }else if(c === max){
          count++;
      }
    }
  //   candles.filter(c => c === Math.max(...candles)).length;
      return count;
  }
  