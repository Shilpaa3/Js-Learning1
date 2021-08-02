//Given an Array, Replace non-working days with 'Holiday'. Consider Saturday, Sunday as non working days
//var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday']
//expected output => ['Holiday', 'Monday', 'Tuesday', 'Holiday']

var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday'];

let op = workingDays.map(x => (x === 'Sunday') || (x === 'Saturday') ? 'Holiday' : x);

console.log(op);

