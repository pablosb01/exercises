function printAsyncName(name, callback) {
    setTimeout(() => {
      console.log(name);
    }, 2000);
      setTimeout(() => {
          callback;
    }, 1000);
  }
  
  callback = () => console.log('hello');
  printAsyncName('John', callback())