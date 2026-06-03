// function func1() {
//   document.querySelector("#title1").textContent = "Hello";
// }
// const func2 = () => {
//   document.querySelector("#title2").textContent = "World";
// };

// export { func1 };
// export { func2 };

// let obj = {
//   func1: () => {
//     document.querySelector("#title1").textContent = "Hello";
//   },
//   func2: () => {
//     document.querySelector("#title2").textContent = "World";
//   },
// };

let obj = {
  func1: (target, content) => {
    document.querySelector(target).textContent = content;
  },
};
export default obj;
