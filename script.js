// a) Odd Numbers in an array

//Anonymous Function
var arr1 = []
var arr = [1,2,3,4,5]
var ans1 = function (){
    
    for (i=0;i<=arr.length;i++){
        if ( i%2 !== 0){
            arr1.push(i)
            
        }
       
    }
    console.log(arr1)
}
ans1();

// IIFE Function

var arr11 = []

var ans11 = (function () {for (i=0;i<=arr.length;i++){
    if ( i%2 !== 0){
        arr11.push(i)
        
    }
   
}
console.log(arr11)

})()

//b) Convert all string to titlecaps in a string array

// Anonymous Function
var ans2 = function (){
    const yourArray = ["apple","banana"];
    const upperCasedArray = String(yourArray).toUpperCase().split(",")
    console.log (upperCasedArray)}
    
ans2()

// IIFE Function

var ans21 = (function (){
    const yourArray = ["apple","banana"];
    const upperCasedArray = String(yourArray).toUpperCase().split(",")
    console.log (upperCasedArray)})()
    
//c) Sum of all numbers in a array

// Anonymous Function

var sum = function (){
    var arr = [1,2,3,4];
    add = 0
    for ( var i in arr){ add= add+arr[i]

    }
    console.log(add)
}
sum()

// IIFE

var sum2= (function (){
    var arr = [1,2,3,4];
    add = 0
    for ( var i in arr){ add= add+arr[i]

    }
    console.log(add)
}) ()


//d) Return all prime numbers in a array

// Anonymous Function

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

var isPrime = function(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) {
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime)

// IIFE



var Prime = (function(a){
    var  res="";
    for(i=0;i<a.length;i++){
        flag=0;
        for(j=1;j<a.length;j++){
            
            if(a[i]%j===0){
                flag++;
            }
            
        }
            
        if(flag==2){
                res+=a[i]+" ";
            
        }
    }
    console.log(res);
})
([1,2,3,4,5,6,7,8,9]);   


//e) Return all the pallendromes in an array

// Anonumous

var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

var arr = [];

var pallendromes = function (){
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");


for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
}
console.log(pallendromes())




// IIFE

var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

var arr = [];

var pallendromes = (function (){
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
})()

//g) Remove duplicates from an Array

//Anonymous

var arr = ["malathi", "adithi", "krishnan","malathi"]

  var remove_duplicates = function () {
    var obj = {};       
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}

console.log (remove_duplicates());

// IIFE
var arrrd = ["malathi", "adithi", "krishnan","malathi"]
var remove_duplicates = (function () {
    var obj = {};       
    var ret_arr = [];
    for (var i = 0; i < arrrd.length; i++) {
        obj[arrrd[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    console.log(ret_arr);
}) ()

//h) Rotate Array k times

// Anonymous

var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };

  console.log (rotate([3,4,5,6,7],2))

  // IIFE 

  var rotate = (function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   console.log(arr);
  })([3,4,5,6,7],2);

  //Return Median of two sorted array of same size
  // Anonymous
  let med1 = [0,2,3,5,9];
  let med2 = [1,4,7,8,9];
  const median = function (a1, a2){
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
 console.log(median(med1,med2));

 // IIFE

 const medianIF = (function (a1, a2){
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    console.log(len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)]);
 
  })(med1,med2)
