gantt.filter('ganttColumnLimit', [ 'binarySearch', function (bs) {
    // Returns only the columns which are visible on the screen

    return function(input, scroll_left, scroll_width) {
        var cmp =  function(c) { return c.left; };
        var start = bs.getIndicesOnly(input, scroll_left, cmp)[0];
        var end = bs.getIndicesOnly(input, scroll_left + scroll_width, cmp)[1];
        return input.slice(start, end);
    };
}]);

gantt.filter('ganttMachineUI2Limit', [ '_', function(_) {
    return function(input, index) {
        return input;
    };
}]);

gantt.filter('ganttColumnPaginationLimit', [ '_', function(_) {
    return function(input, columnPagination, page) {
        if (page > 0 && columnPagination !== undefined && columnPagination[(page - 1)] !== undefined) {
         var _input = [];
         _.each(input, function(row) {
             if (columnPagination[(page - 1)].indexOf(row.id) >= 0) {
                 _input.push(row);
             }
         });
         return _input;
        } else {
         return input;
        }
    };
}]);