function argumentInfo(...args) { // Uses the rest parameter to gather all passed arguments into an array
    const typeCounts = new Map(); // Empty map to keep track of how many times each data type appears

    for(let arg of args) {
        const argType = typeof arg; // For each argument, this line gets its type using the typeof operator
        console.log(`${argType}: ${arg}`);

        if(!typeCounts.has(argType)) { // This checks if the type (argType) has already been seen in the map.
            typeCounts.set(argType, 0); // If not, its count is going to be 0
        }

        typeCounts.set(argType, typeCounts.get(argType) + 1); // This increments the count for this data type.
    }

    const sortedTypes = Array.from(typeCounts.entries()) // Tales all the entries from the map and puts them into an array like [["string", 1], ["number", 2], ["function", 1]]
    .sort((a, b) => b[1] - a[1]); // Descending order

    for(let [type, count] of sortedTypes) {
        console.log(`${type} = ${count}`);
        
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });