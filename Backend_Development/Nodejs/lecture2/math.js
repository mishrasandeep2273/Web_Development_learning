const sum = (a , b) => a + b;
const mul = (a ,b) => a*b ;
const g = 9.8;
const PI = 3.14;

// we can also export like this without use of module sentax
// exports.sum = (a , b) => a + b;
// exports.mul = (a ,b) => a*b ;
// exports.g = 9.8;
// exports.PI = 3.14;


// we can also use it like this 
// module.exports.sum = (a , b) => a + b;
// module.exports.mul = (a ,b) => a*b ;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;


// module.exports = 5 ; this is valid statement 
// exports = 5; but this is not valid statement 





let obj = {
    sum : sum,
    mul : mul ,
    g : g,
    PI : PI,
};

module.exports = obj;

// module.exports = {
//     sum : sum,
//     mul : mul ,
//     g : g,
//     PI : PI,
// }


