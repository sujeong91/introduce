// ES6 모듈
const test = 'es6 test';
console.log(test, 'sss');

// polyfill이 필요한 코드
console.log(new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
}));

// polyfill이 필요한 코드
console.log(Object.assign({}, { x: 1 }, { y: 2 }));

// polyfill이 필요한 코드
console.log(Array.from([1, 2, 3], v => v + v));
  