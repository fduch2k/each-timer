/**
 * @fileOverview Source code for elegant timer interface (Each-Timer)
 * @author Alexander Hramov <alexander.hramov@gmail.com>
 * @license MIT
 */


/**
 * Check if passed param is function
 * @param  {Any} param - Any variable to check
 * @return {Boolean}
 */
function isFunction(param) {
    var getType = {};
    return param && getType.toString.call(param) === '[object Function]';
}

/**
 * Timer constructor
 * @param {Function} timingFn - Function that get passsed time interval and return it as milliseconds
 */
function Timer(timingFn) {
    this.timerHandler = null;
    this.getTimeoutTime = timingFn;
}

/**
 * Set callback function for executing by timer
 * @param  {Function} Callback function. If it returns false execution of timer will be canceled. @see {@link restart}
 * @return {Timer} Object itself
 */
Timer.prototype.perform = function (callback) {
    if (isFunction(callback)) {
        var self = this;
        this.callback = function () {
            callback() ? self.restart() : self.stop();
        };

        this.restart();
        return this;
    }

    throw new Error('Callback must be provided');
};

/**
 * Stop timer execution
 * @return {Timer} Object itself
 */
Timer.prototype.stop = function () {
    if (this.timerHandler !== null) {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
    }

    return this;
};

/**
 * Restart timer execution flow
 * @return {Timer} Object itself
 */
Timer.prototype.restart = function () {
    var self = this;
    this.timerHandler = setTimeout(this.callback, this.getTimeoutTime());
    return this;
};

/**
 * Return timer constructors for specified interval
 * @param  {Integer} interval - Time interval for timer
 * @return {Object} Object with factory functions for interval units (milliseconds, seconds, minutes and hours)
 */
function each(interval) {
    interval = interval || 1;
    return {
        milliseconds: function () {
            return new Timer(function () {
                return interval;
            });
        },

        seconds: function () {
            return new Timer(function () {
                return interval * 1000;
            });
        },

        minutes: function () {
            return new Timer(function () {
                return interval * 60000;
            });
        },

        hours: function () {
            return new Timer(function () {
                return interval * 3600000;
            });
        }
    };
}

module.exports = each;
