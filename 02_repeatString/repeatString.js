const repeatString = (val, period) =>
{
    let word = '';
    if(period < 0){
        return 'ERROR';
    }
    for (let i = 0; i < period; i++)
    {
        word += val;
    }
    return word;
};
// Do not edit below this line
module.exports = repeatString;
