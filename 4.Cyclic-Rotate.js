//Given an array, cyclically rotate the array clockwise by one. 
//Input: [1, 2, 3, 4, 5]
//Expected Output: = [5, 1, 2, 3, 4]

var array = [1, 2, 3, 4, 5];
var a = array[array.length - 1];

for(let i = array.length-1 ; i>0; i--)
{
    array[i] = array[i - 1];
}
array[0] = a;

console.log(array);
