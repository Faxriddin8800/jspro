

let sim = '🟥';
let size = 10;

let res = '';

for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
        if (i == 0 || i == size || j == 0 || j == size || j == i || j == size - i) {
            res += sim;
        } else {
            res += '⬛';
        }
    }
    res += '\n';
}

console.log(res);
