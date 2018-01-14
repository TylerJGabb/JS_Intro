var tester = document.createElement("div");
tester.style = "width:600px;height:250px;border-color:black"
tester.id = "tester";
document.body.appendChild(tester);

function squareArray(arr){
    var ret = [];
    for(var x in arr){
        ret.push(x*x);
    }
    return ret;
}

var data = [1,2,3,4,5,6,7,8,9,10];
var par = document.createElement("p");
par.innerHTML = data.toString() + "<br>" + squareArray(data).toString();
document.body.appendChild(par);

Plotly.plot(tester,
    [
        {
            x : data,
            y : squareArray(data)
        }
    ],
    {margin: {t : 1 } }
);
