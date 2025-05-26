/**
 * 
 * PRA *
 * The first kangaroo starts at location x1 & moves at a rate of V1;
 * The second kangaroo starts at location x2 & moves at a rate of v2;
 * -------------------
 *  if both way time is same print YES otherwise NO
 * -------------------
 * 
 * 
 */

/**
 * pseudo code *
 * declare 2 variable X1Position, X2Positon;
 * iterate 10000;
 * each iterate update position and check if X1Position>X2Position || X1Position>10000 || X2Position>10000 return NO;
 * else if X1Position === X2Position return Yes ;
 * else continue;
 * 
 */
function kangaroo(x1, v1, x2, v2) {

    

  let X1Position=x1;
   let X2Position=x2;
   if(0<=X1Position<X2Position<=10000  && 1<=v1<=10000 && 1<=v2<=10000){
    
for (let i=0; i<10001; i++){
  console.log(X1Position, v1,X2Position, v2)
  
 X1Position= X1Position+v1;
X2Position = X2Position+v2;
if(X1Position>X2Position || v1<=v2){
    return "NO";
}
else if(X1Position===X2Position){
  
    return "YES";
} 
else{
  continue;
}
}
   }else{
    return "NO"
   }

}
