//array-2
const freind=["rajveer","nitesh","ritesh","nikhil"];
const freind2=["vikash","sachin","yogesh","vinod"];
// freind.push(freind2)
/*[
    'rajveer',
    'nitesh',
    'ritewsh',
    'nikhil',
    [ 'vikash', 'sachin', 'yogesh', 'vinod' ]
  ]*/
// console.log(freind);

//---merge array by concat

// let newarray=freind.concat(freind2);
// console.log(newarray);
/*[
  'rajveer', 'nitesh',
  'ritesh',  'nikhil',
  'vikash',  'sachin',
  'yogesh',  'vinod'
] */

  //--  merge array by using triple dot method

 /*
  let botharray=[...freind,...freind2]
  console.log(botharray);
  // ouput=  
  [
  'rajveer', 'nitesh',
  'ritesh',  'nikhil',
  'vikash',  'sachin',
  'yogesh',  'vinod'
]*/


//---using flat for merge sub-arrays in array
/* 
const arr=[2,3,4,[5,6,,7,,8],9,[10,11,[12,13,[22,32],34,33],14],15,16]
console.log(arr.flat(Infinity));

//[
   2,  3,  4,  5,  6,  7,  8,
   9, 10, 11, 12, 13, 22, 32,
  34, 33, 14, 15, 16
]
*/


//check array by using .isArray() method 

console.log(Array.isArray("hello"));//false
//convert into array 
console.log(Array.from("hello"));//[ 'h', 'e', 'l', 'l', 'o' ]

//multiple variable convert into array by using .of() method
let vlaue1=432;
let value2=523;
let value3=854;
let value4=526;
console.log(Array.of(vlaue1,value2,value3,value4));//[ 432, 523, 854, 526 ]





