// add(a,b){
//     return a + b;
// }

// add(a,b){
//     if( /[0-9]/.test(a) && /[0-9]/.test(b)){
//         return a + b;
//     }
//     return 'Enter valid numbers.';
// }

const calculator = {
    validity(a,b){
        if( /[0-9]/.test(a) &&
            /[0-9]/.test(b) &&
            typeof(a) === "number" &&
            typeof(b) === "number"
        ){
            return true;
        }
        return false;
    },
    
    add(a,b){
        if(this.validity(a,b)) return a + b;
        return 'Enter valid numbers.';
    },

    subtract(a,b){
        if(this.validity(a,b)) return a - b;
        return 'Enter valid numbers.';
    },

    multiply(a,b){
        if(this.validity(a,b)) return a*b;
        return 'Enter valid numbers.';
    },

    divide(a,b){
        if(this.validity(a,b)) return a/b;
        return 'Enter valid numbers.';
    }
};

module.exports = calculator;