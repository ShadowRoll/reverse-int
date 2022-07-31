module.exports = function reverse(n) {
    let modul = Math.abs(n);
    let num = Array.from(modul.toString(), String); 
    let reversed = num.reverse();
    let result = Number(reversed[0] + reversed[1] + reversed[2]);

    return result;
}
