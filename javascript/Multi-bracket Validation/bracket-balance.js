

function validator(str) {
    let array = [];
    // let result;
    for (let i = 0; i < str.length; i++) {
        // let char = array[array.length - 1];
        // console.log('char', char);
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            array.push(str[i]);
        } else {
            ((str[i] === ')') || (str[i] === '}') || (str[i] === ']'))

            let ele;
            if (str[i] === ')') {
                ele = '(';
            } if (str[i] === '}') {
                ele = '{';
            } if (str[i] === ']') {
                ele = '[';
            } if (ele === array[i]) {
                array.pop();
            } else {
                return false;
            }
        };
    }
    return array.length ? false : true;

}

module.exports = validator;