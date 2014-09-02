gantt.service('binarySearch', [ function () {
    // Returns the object on the left and right in an array using the given cmp function.
    // The compare function defined which property of the value to compare (e.g.: c => c.left)

    return {
        getIndicesOnly: function(input, value, comparer) {
            var lo = -1, hi = input.length;
            while (hi - lo > 1) {
                var mid = ((lo + hi) / 2) | 0;
                if (comparer(input[mid]) <= value) {
                    lo = mid;
                } else {
                    hi = mid;
                }
            }
            if (input[lo] !== undefined && comparer(input[lo]) === value) hi = lo;
            return [lo, hi];
        },
        get: function(input, value, comparer) {
            var res = this.getIndicesOnly(input, value, comparer);
            return [input[res[0]], input[res[1]]];
        },
        containsKeyValue: function( obj, key, value ) {
            if (obj[key] === value) return true;

            var x, found = false;
            for (x in obj) {
                if (obj[x] !== null && obj[x][key] === value) {
                    return true;
                } else {
                    if (typeof obj[x] === 'object' && obj[x] !== null) {
                        found = containsKeyValue( obj[x], key, value);
                        if (found === true) return true;
                    }
                }
                return false;
            }
        },
        quickSort: function( arr ) {
            if (arr.length <= 1) return arr;

            var pivotIndex = (arr.length / 2) | 0;
            var pivot = arr.splice(pivotIndex, 1), left = [], right = [];

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].from < pivot[0].from) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }

            return this.quickSort(left).concat(pivot, this.quickSort(right));
        },
        inArray: function(needle, haystack, argStrict) {
            var key = '', strict = !! argStrict;
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) return true;
                }
            } else {
                for (key in haystack) {
                  if (haystack[key] == needle) return true;
                }
            }

            return false;
        }
    };
}]);