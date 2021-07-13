
const Stack = require('../stack-and-queue/ stack-class ');
function validator(str) {
    const stack = new Stack();
    // let result;
    for (let i = 0; i < str.length; i++) {
        // let char = array[array.length - 1];
        // console.log('char', char);
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            ((str[i] === ')') || (str[i] === '}') || (str[i] === ']'))

            let ele;
            if (str[i] === ')') {
                ele = '(';
            } if (str[i] === '}') {
                ele = '{';
            } if (str[i] === ']') {
                ele = '[';
            } if (ele === stack.peek()) {
                stack.pop();
            } else {
                return false;
            }
        };
    }
    return stack.isEmpty() ? true : false;

}

module.exports = validator;