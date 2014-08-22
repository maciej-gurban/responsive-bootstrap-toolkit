/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   1.5.1 (2014-08-22)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */

var ResponsiveBootstrapToolkit = (function($){

    // Methods and properties
    var self = {

        // Used by animations and timeouts
        clock: {
            'express': 150,
            'fast':    300,
            'medium':  450,
            'slow':    600
        },

        // Used to calculate intervals between consecutive function executions
        timer: new Date(),

        // Returns true if current breakpoint matches passed alias
        is: function( alias ) {
            return $('.device-' + alias).is(':visible');
        },

        /* 
         * Waits specified number of miliseconds before executing a function
         * Source: http://stackoverflow.com/a/4541963/2066118
         */
        refreshed: function() {
            var timers = {};
            return function (callback, ms, uID) {
                var uID = (!uID) ? "I'm a banana!" : null;
                if (timers[uID]) {
                    clearTimeout(timers[uID]);
                }
                timers[uID] = setTimeout(callback, ms);
            };
        }()

    }

    return self;

})(jQuery);







