function lastKNumbersSequence(n, k) {
    let result = [1]; // Start with the first element as 1

    for (let i = 1; i < n; i++) {
        // Take the previous k elements (or all available if i < k)
        let start = Math.max(0, i - k);
        let previousKElements = result.slice(start, i);

        // Sum them
        let sum = previousKElements.reduce((acc, num) => acc + num, 0);

        // Push the new value to the result
        result.push(sum);
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));