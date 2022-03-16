const sum = (...param) => param.reduce((acc,val) => acc += val, 0);

console.log(sum(1, 2));