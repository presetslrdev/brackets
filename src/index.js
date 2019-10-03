module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 0){
        let stack = [];
        let couples = {};
        bracketsConfig.forEach(el => couples[el[0]] = el[1]);
        str.split('').forEach((elem, index) => elem === stack[stack.length-1]||0 ? stack.pop() : stack.push(couples[elem]));
        return stack.length == 0 ? true : false;
    }
    return false;
}