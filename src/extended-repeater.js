module.exports = function repeater(str, options) {
    if (options.hasOwnProperty('addition')) {
        options.addition += '';
        if (options.hasOwnProperty('additionRepeatTimes') || options.hasOwnProperty('additionSeparator')) {
            options.addition = repeater(options.addition, { repeatTimes: options.additionRepeatTimes, separator: options.additionSeparator });
        }
        str += options.addition;
    }
    const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    const separator = options.hasOwnProperty('separator') ? options.separator : '+';
    return new Array(repeatTimes).fill(str).join(separator);
}