const reverseString = (str) =>
{
    let reversed = [];
    str.split('');
    for (let i = str.length; i >= 0; i--)
    {
        reversed.push(str[ i ]);
    }

    return reversed.join('');

};

// Do not edit below this line
module.exports = reverseString;
