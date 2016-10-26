var expect = require('chai').expect;
var each = require('../../lib/index');

describe('Entry Point', function () {
    it('Should properly export', function () {
        expect(each).is.function;
    });
});

describe('Test timer constructors', function () {
    it('Should create timer contructors object', function () {
        var timer = each(100);
        expect(timer).is.object;
        expect(timer).has.property('milliseconds');
        expect(timer).has.property('seconds');
        expect(timer).has.property('minutes');
        expect(timer).has.property('hours');
    });

    it('Should create timer for miliseconds', function () {
        var timer = each(10).milliseconds();
        expect(timer.getTimeoutTime()).is.equal(10);
    });

    it('Should create timer for seconds', function () {
        var timer = each(10).seconds();
        expect(timer.getTimeoutTime()).is.equal(10 * 1000);
    });

    it('Should create timer for minutes', function () {
        var timer = each(10).minutes();
        expect(timer.getTimeoutTime()).is.equal(60 * 10 * 1000);
    });

    it('Should create timer for hours', function () {
        var timer = each(10).hours();
        expect(timer.getTimeoutTime()).is.equal(60 * 60 * 10 * 1000);
    });

    it('Should create timer with 1 unit if called without params', function () {
        var timer = each().milliseconds();
        expect(timer.getTimeoutTime()).is.equal(1);
    });
});

describe('Execution tests', function () {
    it('Should throw exception when passed non function to perform', function () {
        var timer = each(10).milliseconds();
        expect(timer.perform).to.throw('Callback must be provided');
    });

    it('Should perform callback', function (done) {
        var timer = each(10).milliseconds().perform(function () {
            done();
            return false;
        });
    });

    it('Should perform while callback return true', function (done) {
        var countdown = 10;
        var timer = each(10).milliseconds().perform(function () {
            if (countdown-- <= 0) {
                done();
                return false;
            }

            return true;
        });
    });
});
