// function analyzeArray(array){

//     return {
//         average: 2,
//         min:1,
//         max:3,
//         length:3
//     };
// }

// function analyzeArray(array){

//     const average = (array.reduce((total,num) => {return total + num;},0))/array.length;
//     const min = array.reduce((smallestNum , num) => {
//         if(smallestNum < num) return smallestNum;
//         return num;
//     });
//     const max = array.reduce((largestNum , num) => {
//         if(largestNum > num) return largestNum;
//         return num;
//     });
    
//     return {
//         average: average,
//         min:min,
//         max:max,
//         length:array.length
//     };
// }


function analyzeArray(array){
    if(!(array.every( (element) => typeof(element) === "number" ))) return 'Array should contain only numbers';
    
    const average = (array.reduce((total,num) => {return total + num;},0))/array.length;
    
    // we don't initialize the collector in the reduce method to
    // 0 in min and max as there can numbers where min can be
    // greater than 0 and max can be less than 0 in an array
    const min = array.reduce((smallestNum , num) => {
        if(smallestNum < num) return smallestNum;
        return num;
    });

    const max = array.reduce((largestNum , num) => {
        if(largestNum > num) return largestNum;
        return num;
    });
    
    return {
        average: average,
        min:min,
        max:max,
        length:array.length
    };
}

console.log(analyzeArray([1,8,3,4,2,6]));

module.exports = analyzeArray;