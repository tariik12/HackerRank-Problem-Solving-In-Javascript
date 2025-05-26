/**
 * Problem Solution of Grading Students-11
 * https://www.hackerrank.com/challenges/grading/problem
 */
/**
 * PSA *
 * student grade range 0 to 100;
 * less than 40 is fail;
 * each student grate will be round based  on 2 rules
 * the grade and the nex multiple of 5 is less than 3. the round grade up to the nex multiple of 5;
 * if the grade if less than 38 no rounding its fail;
 * input: the grades before rounding;
 * output: the grades after rounding;
 * 
 */

/**
 * pseudo  *
 * 
 * Declare empty array;
 * 
 * iterate grades
 * check if grades[i]<18 empty array.push grades[i];
 * esle
 * gradeRound = Math.ceil(grades[i]/5)*5;
 * check if (gradeRound-grades[i])<3 than empty arra.push gradeRound 
 * else
 * gradeRound.push(grades[i]);
 * retur round array arry;
 */

function gradingStudents(grades) {
    // Write your code here
    const roundedArray = [];
    for(let i=0; i<grades.length;i++){
        if(grades[i]<38){
            roundedArray.push(grades[i]);
        }else{
            const roundedNumber = Math.ceil(grades[i]/5)*5
            if((roundedNumber-grades[i])<3){
                roundedArray.push(roundedNumber);
            }else{
                roundedArray.push(grades[i]);
            }
        }
    }
return roundedArray;
}
