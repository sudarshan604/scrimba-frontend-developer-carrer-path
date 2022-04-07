function arrarReplace(array, elementReplace, substitutionalElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementReplace) {
      array[i] = substitutionalElement;
    }
  }
}

let a = [3, 2, 3];
let e = 3;
let s = 5;

arrarReplace(a, e, s);

console.log(a);
