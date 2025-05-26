/**
 * Solution for Problem-10
 * https://www.hackerrank.com/challenges/time-conversion
 */
/**
 * input: string;
 * process: => slice last 2 string to identify PM/AM;
 * if AM again chcek fsat 2 string ===12 then fast 2 string replace00 else return value just remove last 2 index;
 * if PM slice first 2 string, convert number then summation 2;
 * retrun after replace first 2 digit and remove last 2 digit;
 * 
 * output:converted military time(24-hour)
 */
function timeConversion(s) {
   let collectLast2String = s.slice(-2);
let collectFast2String = s.slice(0,2);

if(collectLast2String==="AM"){
  
  if(collectFast2String==="12"){
 
    collectFast2String="00"
    return collectFast2String.toString().slice(0,2).concat(s.slice(2)).slice(0,-2);
  }else {

    return s.slice(0,-2);
  }
} else if(collectLast2String==="PM"){
  if(collectFast2String==="12"){
    
     return s.slice(0,-2);
  }else{
    
    let update = Number(collectFast2String)+12;
  
 return update.toString().slice(0,2).concat(s.slice(2)).slice(0,-2);
  }
}
}
