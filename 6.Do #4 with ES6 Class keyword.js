//Do #4 with new ES6 Class keyword
//Given an array, cyclically rotate the array clockwise by one. 
//Input: [1, 2, 3, 4, 5]
//Expected Output: = [5, 1, 2, 3, 4]

class CyclicRotate{
    constructor(array){
        this.array = array;
    }

    rotate( ){
        this.a = this.array[array.length - 1];
        for(let i = this.array.length-1 ; i>0; i--)
        {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] =this.a;
        return array;
    }
}

var array = [1, 2, 3, 4, 5];
var rotateObj = new CyclicRotate(array);
var op = rotateObj.rotate();

console.log(op);
