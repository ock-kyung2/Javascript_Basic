// typeof 안전 가드를 사용해서 변수 선언 여부 체크
// 여러 스크립트 파일의 변수들이 전역 네임스페이스(namespace)를 공유할때 사용.

// ex] 디버깅 작업
// : 최상위 전역 스코프에 var DEBUG = true라고 'debug.js'파일 선언 후, 개발/테스트 단계에서 이 파일을 브라우저가 로딩하면 된다.
// 그러나, 나머지 애플리케이션 코드에서 Reference Error가 나지 않게 DEBUG 전역변수를 체크해야한다. 이때, typeof 안전 가드가 제격.

// 이렇게 하면 에러가 난다.
// if(DEBUG){
//  console.log("디버깅을 시작합니다.");
// }

// typeof 을 이용해 안전하게 존재 여부를 체크할 수 있다.
if(typeof DEBUG !== "undefined"){
  console.log("디버깅을 시작합니다.");
}

// var atob; // if문 블록에 var atob로 선언하면, 전역 atob는 이미 존재하므로 선언자체가 최상위 스코프로 호스팅 된다. 특수 타입의 전역 내장변수를 중복선언하면 에러를 던지는 브라우저가 있기 때문에 var를 빼야 선언문이 호이스팅되지 않는다.

if(typeof atob === "undefined"){
  atob = function(){/* */};
}

// typeof 안전 가드 없이 전역변수를 체크하는 다른 방법
// 전역 변수가 모두 전역 객체(브라우저는 window)의 프로퍼티라는 점 이용.

if(window.DEBUG){
  //
}

if(!window.atob){

}

// 이런 방법은 전역 변수를 꼭 window 객체로만 호출하지 않는 다중 자바스크립트 환경(node.js)도 있기 때문에 가급적 삼가는 것이 좋다.
// 전역 변수를 사용하지 않을 때에도 유용
function doSomethingCool(){
  var helper =
      (typeof FeatureXYZ !== "undefined")?
      FeatureXYZ : 
      function(){/*....기본 XYZ 기능 .... */};

  var val = helper();
//...   
}
// Ex] 다른 사람이 나의 유틸리티 함수를 copy and paste 할때

(function(){
  function FeatureXYZ(){/*...나의 XYZ기능...*/}
  
  function doSomethingCool(){
	var helper =
      (typeof FeatureXYZ !== "undefined")?
      FeatureXYZ : 
      function(){/*....기본 XYZ 기능 .... */};

  	var val = helper();
	//...   
  }
  doSomethingCool();
})();
// FeatureXYZ()가 전역변수는 아니지만, window.--처럼 체크용도로 사용할 만한 객체가 없기 때문에 typeof를 사용하기 더 좋다.

// 명시적으로 의존 관계를 전달
// doSomethingCool() 바깥이나 주변에 정의되었는지 암시적으로 조사하는 대신, 명시적으로 의존 관계를 전달하는 방법도 있다.

function doSomethingCool(FeatureXYZ){
  var helper = FeatureXYZ ||
  	function(){
    /*...기본 XYZ 기능...*/
    
    var val = helper();
    //..
}
}