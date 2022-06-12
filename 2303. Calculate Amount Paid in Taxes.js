/*
https://leetcode.com/problems/calculate-amount-paid-in-taxes/

*/


var calculateTax = function(brackets, income) {
    let tax=0
    let prevBound = 0
    let i = 0
        while(i<brackets.length){
            if(income>brackets[i][0]){
                tax += (brackets[i][0]-prevBound) * brackets[i][1]/100
            }else{
                tax += (income - prevBound) * brackets[i][1] /100
                return tax
            }
            prevBound = brackets[i][0]
            i++
        }
};