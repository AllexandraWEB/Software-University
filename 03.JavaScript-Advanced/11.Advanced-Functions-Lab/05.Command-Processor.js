function solution() {
    let stringState = "";

    return {
        append,
        removeStart,
        removeEnd,
        print 
    };

    function append(str) {
        stringState += str;
    }

    function removeStart(num) {
        stringState = stringState.slice(num);
    } 

    function removeEnd(num) {
        stringState = stringState.slice(0, -num);
    }

    function print() {
        console.log(stringState);
    } 
}

let { append, removeStart, removeEnd, print } = solution();

append('hello');

append('again');

removeStart(3);

removeEnd(4);

print();