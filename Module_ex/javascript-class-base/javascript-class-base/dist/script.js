//객체 생성후 사용 방법1
let front = {
  a: "html",
  b: "css",
  c: "javascript",
};
let back = {
  a: "php",
  b: "asp",
  c: "jsp",
};
// console.log(front.a);

//객체 생성후 사용 방법2 함수로 객체 생성
function learnFront() {
  // 생성자 함수 선언, 객체를 생성하는 틀 역할
  this.a = "html"; // this 객체 자체
  this.b = "css";
  this.c = "javascript";
}
let frontLangs = new learnFront(); // new : 객체를 생성하는 키워드

//객체 생성후 사용 방법2-1 함수로 객체 생성
function learnFrontv2(x, y, z) {
  // 생성자 함수 선언, 객체를 생성하는 틀 역할
  this.a = x; // this 객체 자체
  this.b = y;
  this.c = z;
}
let frontLangs2 = new learnFrontv2("html", "css", "javascript"); // new : 객체를 생성하는 키워드
let backLangs = new learnFrontv2("php", "asp", "jsp");

//객체 생성후 사용 방법3 class
class Lang {
  // 초기값 생성 함수 - constructor
  constructor(x, y, z) {
    this.a = x;
    this.b = y;
    this.c = z;
  }
}
let frontLangs3 = new Lang("html", "css", "javascript"); // new : 객체를 생성하는 키워드
let backLangs3 = new Lang("php", "asp", "jsp");

//extends를 통한 클래스 상속(확장)
class Web {
  constructor(skill) {
    this.tech = skill; // 클래스 Web의 초기값은 속성명 tech = 값 skill, skill = 매개변수으로 받을거야
  }
  present() {
    return `당신은 ${this.tech}을 할 수 있다`; // 함수 present를 선언하고 클래스 값을 써서 메시지를 띄울래
  }
}

let mySkill = new Web("html"); // Web 클래스로 Web 객체를 생성해서 skill 인수로 html을 줄거야 -> 콘솔 : "당신은 html을 할 수 있다"

class Stack extends Web {
  constructor(skill, step) {
    super(skill); // 부모 클래스의 skill을 그대로 가져옴, this.tech = skill
    this.stage = step;
  }
  show() {
    return `${this.present()}, 그래서 ${this.stage}단계를 마스터 했다.`;
  }
}

// let firstStep = new Stack("html", 1);
export default Stack;
