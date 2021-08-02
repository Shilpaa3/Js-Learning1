//Given an Array, Find number of working days. Consider Saturday, Sunday as non-working days
//var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday']
//expected output => 2

var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday'];

let WDCount = 0;

workingDays.forEach(e => {
    
    if(e != 'Saturday' && e != 'Sunday')
    {
        WDCount++;
    }
});

console.log(WDCount);