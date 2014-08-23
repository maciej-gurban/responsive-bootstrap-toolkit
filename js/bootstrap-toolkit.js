/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   2.0.0 (2014-08-23)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
;var ResponsiveBootstrapToolkit = (function($){

    // Methods and properties
    var self = {

        // Determines interval between firing 'changed' method
        interval: 300,

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
        changed: function() {
            var timers = {};
            return function (callback, ms) {
                // Get unique timer ID
                var uID = (!uID) ? self.timer.getTime() : null;
                if (timers[uID]) {
                    clearTimeout(timers[uID]);
                }
                // Use default interval if none specified
                if(typeof ms === "undefined") {
                    var ms = self.interval;
                }
                timers[uID] = setTimeout(callback, ms);
            };
        }()

    }

    return self;

})(jQuery);
