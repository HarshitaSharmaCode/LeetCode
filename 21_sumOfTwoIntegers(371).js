/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) 
{
    if(a === 0)
        {
            return b;
        }
    if(b === 0)
        {
            return a;
        }
    return getSum(a^b, (a&b) << 1);
};