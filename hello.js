var chart = require('chart.js'); 
console.log("Beginning js script");

function f(x) {
    return x*x;
}

var x_vec = [1,2,3,4];
var y_vec = x_vec.map(function(x) {return Math.pow(x,2)})

console.log(x_vec);
console.log(y_vec);



