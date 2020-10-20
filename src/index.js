module.exports = function check(str, bracketsConfig) {
    while (true) {
        let flagCheckEnd = false;
        bracketsConfig.forEach(item => {
            if (str.includes(item[0] + item[1])) {
                str = str.replace(item[0] + item[1], '')
                flagCheckEnd = true;
            }
        })
        if (!flagCheckEnd) {
            break;
        }
    }
    return (str === '') ? true : false;
}
