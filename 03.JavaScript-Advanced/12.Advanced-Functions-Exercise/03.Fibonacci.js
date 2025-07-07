function getFibonacciGenerator() {
    let a = 1;
    let b = 1;

    return function() {
        let next = a;
        [a, b] = [b, a + b];
        return next;
    }
}

const fib = getFibonacciGenerator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());