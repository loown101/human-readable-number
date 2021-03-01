let arr = [
        ["zero", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", " ten", " eleven",
        "twelve", " thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", " eighteen", "nineteen"],
        
        ["","","twenty", "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety"],
        
        ["","one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
        ]; 
        
        module.exports = function toReadable (number) {
    if (num < 20) {
        return arr[0][num];
        } else if (20 <= num && num <= 100) {
        return (arr[1][parseInt(num / 10)] + ' ' + arr[0][num % 10]);
        } else {
        return (arr[2][parseInt(num / 100)] + ' ' + arr[1][parseInt(num / 10) % 10] + ' ' + arr[0][num % 10]);
        }
}
