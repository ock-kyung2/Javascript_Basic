// 어떤 타입의 값이라도 담을 수 있는 그릇

var a = [1,"2",[3]];
console.log(a.length);
console.log(a[0]);
console.log(a[2][0]);

// 배열 크기는 미리 정하지 않고도 선언 가능하고, 추가할 수 있다.

var b = [];
console.log(b.length); // 0

b[0] = 1;
b[1]="2";
b[2]=[3];
console.log(b.length); // 3

// 구멍난 배열
var c = [];

c[0] =1 ;
// a[1] => 구멍
c[2]=[3];

console.log(c[1]); // undefined
console.log(c.length);
// c[1] 슬롯값은 명시적으로 c[1] = undefined 세팅한 것과 똑같지 않다.

// 배열 index는 숫자이지만, 하나의 객체이기 때문에 키/프로퍼티 문자열 추가 가능.
// But, 배열 length는 증가하지 않는다.

var d = [];

d[0] = 1;
d["foobar"] = 2;

console.log(d.length);    // 1
console.log(d["foobar"]); // 1
console.log(d.foobar);    // 2


// 문자열이 10진수로 들어가면 숫자키를 사용한 것으로 인지
var e = [];
e["10"] = 42;

console.log(e.length);

// 유사 배열
// 유사 배열 값을 진짜 배열로 바꾸고 싶을때
// : 배열 유틸리티 함수 indexOf(), concat(),forEach()등 사용해서 해결

// 유사 배열 값: 숫자 인덱스가 가리키는 값들의 집합.
// ex] 함수에서 arguments 객체를 사용하여 인자를 리스트로 가져오기
// -> slice() 함수릐 기능을 차용하는 방법 사용.

function foo(){
  var arr = Array.prototype.slice.call(arguments);
  // var arr = Array.from( arguments ); ES6부터
  arr.push("bam");
  console.log(arr);
}

console.log(foo("bar","baz"));
// slice() 함수에 인자가 없으면 기본 인자 값으로 구성된 배열을 복사한다.