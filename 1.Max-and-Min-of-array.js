//Given an array, write functions to find the minimum and maximum elements in it.
//var numbers = [7,3,5,6,8, 4]
//expected output : min: 3  max: 8
//hint: use .length for array elements count

var numbers = [7,3,5,6,8,4];

var max = numbers[0];
var min = numbers[0];

for(var i=0; i<numbers.length; i++)
{
    if(numbers[i]>max)
       max = numbers[i];

    if(numbers[i]<min)
        min = numbers[i];
}
var op = "min: " + min + "  max: " + max;

console.log(op);
