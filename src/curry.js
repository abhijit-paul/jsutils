const curry = (fn) => {
    if(curry.allArgs === undefined)    {
        curry.allArgs = [];
    }
    if(curry.fn === undefined)    {
        curry.fn = fn;
    }
    return function()    {
        Array.from(arguments).forEach(arg => {
            curry.allArgs.push(arg);
        });
        if(curry.allArgs.length < curry.fn.length)    {
            return curry.apply(this, arguments);
        }
        else {
            var thisArgs = curry.allArgs;
            curry.allArgs=[];
            return curry.fn.apply(this, thisArgs);
        }
    };
};

export default curry;
