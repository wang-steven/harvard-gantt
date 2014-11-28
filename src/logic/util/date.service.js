gantt.service('dateFunctions', [ function () {
    // Date calculations from: http://www.datejs.com/ | MIT License
    return {
        isNumber: function(n) { return !isNaN(parseFloat(n)) && isFinite(n); },
        isString: function(o) { return typeof o == "string" || (typeof o == "object" && o !== null && o.constructor !== undefined && o.constructor === String); },
        isDate: function(d) { return typeof d == "object" && d !== null && d.constructor === Date; },
        isNull: function(d) { return d === null || d === undefined; },
        clone: function(date) {
            if (this.isString(date)) {
                return moment(date, 'YYYY-MM-DDTHH:mm:ss').clone().toDate();
            } else if (this.isDate(date) || this.isNumber(date)) {
                return moment(date).clone().toDate();
            } else if (this.isNull(date)) {
                return null;
            } else {
                return moment(Date.now()).clone().toDate();
            }
        },
        setSecondsZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setSeconds(0);
            res.setMilliseconds(0);
            return res;
        },
        setMinutesZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMinutes(0);
            res.setSeconds(0);
            res.setMilliseconds(0);
            return res;
        },
        setTimeZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setHours(0);
            res.setMinutes(0);
            res.setMilliseconds(0);
            return res;
        },
        setTimeComponent: function(date, milliseconds) {
            return moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+
                '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+'T00:00:00.'+milliseconds).toDate();
        },
        setToFirstDayOfMonth: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(1);
            return res;
        },
        setToDayOfWeek: function(date, dayOfWeek, clone, orient) {
            var res = clone === true ? this.clone(date) : date;
            if (res.getDay() === dayOfWeek) {
                return res;
            } else {
                orient = orient || -1;
                var diff = (dayOfWeek - res.getDay() + 7 * (orient || +1)) % 7;
                return this.addDays(res, (diff === 0) ? diff += 7 * (orient || +1) : diff);
            }
        },
        addMonths: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(1);
            res.setMonth(res.getMonth() + val);
            return res;
        },
        addWeeks: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(res.getDate() + val * 7);
            return res;
        },
        addDays: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(res.getDate() + val);
            return res;
        },
        addHours: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setHours(res.getHours() + val);
            return res;
        },
        addMinutes: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMinutes(res.getMinutes() + val);
            return res;
        },
        addSeconds: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setSeconds(res.getSeconds() + val);
            return res;
        },
        addMilliseconds: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMilliseconds(res.getMilliseconds() + val);
            return res;
        },
        isSecondsZero: function(date) {
            return date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        isMinutesZero: function(date) {
            return date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        isTimeZero: function(date) {
            return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        getDaysInMonth: function(date) {
            return moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+'-01T00:00:00').daysInMonth();
        },
        getWeek: function(date) {
            /* Returns the number of the week. The number is calculated according to ISO 8106 */
            var $y, $m, $d;
            var a, b, c, d, e, f, g, n, s, w;

            $y = date.getFullYear();
            $m = date.getMonth() + 1;
            $d = date.getDate();

            if ($m <= 2) {
                a = $y - 1;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = 0;
                f = $d - 1 + (31 * ($m - 1));
            } else {
                a = $y;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = s + 1;
                f = $d + ((153 * ($m - 3) + 2) / 5) + 58 + s;
            }

            g = (a + b) % 7;
            d = (f + g - e) % 7;
            n = (f + 3 - d) | 0;

            if (n < 0) {
                w = 53 - ((g - s) / 5 | 0);
            } else if (n > 364 + s) {
                w = 1;
            } else {
                w = (n / 7 | 0) + 1;
            }

            $y = $m = $d = null;

            return w;
        }
    };
}]);
