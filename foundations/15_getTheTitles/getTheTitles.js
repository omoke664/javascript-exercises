const getTheTitles = function(obj) {
    let arr = [];
    for(let i=0; i<obj.length; i++){
        arr.push(obj[i].title);
    }
    return arr;

};

// Do not edit below this line
module.exports = getTheTitles;
