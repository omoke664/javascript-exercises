/*
CHECKING FOR LEAP YEAR
creation function leapYears(arg:year){
    if year % 4 === 0{
        return "true";
    }
    else{
        if year % 100 === 0 && year % 400 === 0{
            return "true";
        }
        eles{
            return "false";    
        }
        }
}
*/

const leapYears = function(year) {
    // 1. If it's divisible by 400, it is ALWAYS a leap year.
    if (year % 400 === 0) {
        return true;
    }
    // 2. If it's divisible by 100 but NOT 400, it is NOT a leap year.
    if (year % 100 === 0) {
        return false;
    }
    // 3. If it's divisible by 4 but not the above, it IS a leap year.
    if (year % 4 === 0) {
        return true;
    }
    // 4. Everything else is not a leap year.
    return false;
};

module.exports = leapYears;