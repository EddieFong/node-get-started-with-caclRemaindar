// Write your cade below:
function caclRemaindar(a,b) {
    return a%b;

};

function caclSum(numArray1) {
    return sum = numArray1.reduce((a, b) => a + b, 0);
};

function caclSumInConditon(numArray1,a) {
    return numArray1.filter(x=>(x<a)).reduce((a, b) => a + b, 0);
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}