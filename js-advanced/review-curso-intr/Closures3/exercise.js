function multiplyByTwo(value) {
  const number = 2;
  let result;
  function inner() {
    result = value * number;
    return result;
  };
  return inner;
}

console.log(multiplyByTwo(4)());
