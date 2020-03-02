module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-prev':
                if (i - 1 >= 0) result.pop();
                break;
            case '--discard-next':
                if (i + 1 <= arr.length - 1) i++;
                break;
            case '--double-prev':
                if (i - 1 >= 0) result.push(arr[i - 1]);
                break;
            case '--double-next':
                if (i + 1 <= arr.length - 1) result.push(arr[i + 1]);
                break;
            default: result.push(arr[i]);
        }
    }
    return result;
};