import util from './util.js';

x = 3;
y = 4;
z = 6;

// call site of our function
area = util.getRectArea(x, y);

volume = area * z;

console.log('area is:', area); // 12
console.log('volumne is:', volume); // 60

