module.exports = class DepthCalculator {
    calculateDepth(array) {
        array = array.filter((i) => typeof i === 'object');
        let j = Math.max(...(array.map((item => g(item)))));
        function g(arr) {
            let k = 1;

            return (function c(arr) {
                for (let i = 0; i < arr.length; i++) {

                    if (typeof arr[i] === 'object') {
                        k++;
                        return c(arr[i]);
                    }
                }
                return ++k;
            }(arr));

        };
        return array.length === 0 ? 1 : j;
    }
};