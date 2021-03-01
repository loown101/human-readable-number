let arr = [
    ["", " one", " two", " three", " four", " five", " six",
    " seven", " eight", " nine", " ten", " eleven",
    " twelve", " thirteen", " fourteen", " fifteen",
    " sixteen", " seventeen", " eighteen", " nineteen"],
    
    ["",""," twenty", " thirty", " forty", " fifty", " sixty",
    " seventy", " eighty", " ninety"],
    
    ["","one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
]

        module.exports = function toReadable (number) {
            number = parseInt(number, 10);
            if (number == 0) {
                return 'zero'
            } else if (number < 20) {
                return arr[0][number].trim();
            } else if (number > 19 && number < 100) {
                return (arr[1][parseInt(number / 10) % 10] + arr[0][number % 10]).trim();
            } else {
                let n = parseInt(number/10) % 10;
                if (n == 1) {
                    return (arr[2][parseInt(number / 100) % 100] + arr[0][number % 100]).trim();
                } else {
                    return (arr[2][parseInt(number / 100) % 100] + arr[1][parseInt(number / 10) % 10]+ arr[0][number % 10]).trim();
                }
            }
        }
