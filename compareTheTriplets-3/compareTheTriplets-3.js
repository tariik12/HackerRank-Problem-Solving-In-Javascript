/**
 * Solution for Problem-3
 * https://www.hackerrank.com/challenges/compare-the-triplets
 */
/**
 * input: 2 array using parameter a & b;
 * process: =>render 2 array to compares & counts alice & bob points
 *        =>condition:
 *          =>if both point are same neither receives point
 *          =>if alice>bob alice awarded a point
 *          =>if alice<bob bob awarder a point
 * output: return rating of Alice & bob as array;
 */
function compareTriplets(a, b) {
    const points=[0,0];
for (let i=0;i<a.length;i++){
    if(a[i]>b[i]){
        points[0] = points[0]+1; 
    }else if(a[i]<b[i]){
        points[1] = points[1]+1;
    }
}
return points
}
