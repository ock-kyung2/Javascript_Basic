console.log(typeof undefined); //undefined
console.log(typeof true); //true
console.log(typeof 42); //number
console.log(typeof "42");  //string
console.log(typeof {life: 42}); //object
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object

var a = null;
console.log(!a && typeof a ); // object
console.log(a && typeof a ); // null


console.log(typeof function a(){/* */}); // function

function foo(b,c){
  /* 호출가능한 객체라서 prop 둘 수 있다.  */
};
console.log(foo.length); // 2

console.log(typeof [1,2,3]); // object

var b = 42;
console.log(typeof b) // number

c = true;
console.log(typeof c) // boolean

console.log(typeof typeof 42) // string

// undefined vs undeclared

var d;
console.log(typeof d); // undefined

var e = 42;
var f;

e=f;
console.log(typeof e); // undefined
console.log(typeof f); // undefined

var g;
g; // undefined
// h; //ReferenceError: h is not defined != undefined

console.log(typeof g); // undefined
console.log(typeof h); // undefined
