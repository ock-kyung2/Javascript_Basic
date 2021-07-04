// 문자열 in javascript != 문자 배열

var a = "foo";
var b = ["f","o","o"];

// 문자열은 유사배열 둘다 length 프로퍼티, indexOf()메서드(ES% 배열에만 있음), concat()메서드를 가진다.

console.log(a.length); // 3
console.log(b.length); // 3

console.log(a.indexOf("o")); // 1
console.log(b.indexOf("o")); // 1

var c = a.concat("bar");
console.log(c); // foobar

var d = b.concat("b","a","r");
console.log(d); // [ 'f', 'o', 'o', 'b', 'a', 'r' ]

console.log(a===c); // false
console.log(b===d); // false

console.log(a); // foo
console.log(b); // [ 'f', 'o', 'o' ]


// a, b 모두 문자의 배열일까? XXX

// **문자열 : 불변 값(Immutable)**
// : 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환

// **배열 : 가변 값 (Mutable)**
// : 그 자리에서 곧바로 원소를 수정.


a[1] = "0";
b[1] = "0";

console.log(a); // foo
console.log(b); // [ 'f', '0', 'o' ]

c = a.toUpperCase();
console.log(a === c); // false
console.log(a); // foo
console.log(c); // FOO

b.push("!");
console.log(b); // [ 'f', '0', 'o', '!' ]

// 배열 메서드 -> 문자열 X
// 불변 배열 메서드는 빌려쓸 수 있다.

console.log(a.join);
console.log(a.map);

var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map.call(a, function(v){
  return v.toUpperCase()+".";
}).join("");

console.log(c);
console.log(d);

// 배열 .reverse() 가변 메서드O, 문자열X

a.reverse; // undefined
console.log(b.reverse()); // [ '!', 'o', '0', 'f' ]
console.log(b); // [ '!', 'o', '0', 'f' ]

// 문자열 -> 배열 -> 작업 ->문자열
// 가변메서드를 사용한 것처럼 만드는 Hack

var c = a
// 'a'를 문자의 배열로 분할한다.
.split('')
//  문자 배열의 순서를 거꾸로 뒤집는다.
.reverse()
//  문자 배열을 합쳐 다시 문자열로 되돌린다.
.join("");

console.log(c); // oof

