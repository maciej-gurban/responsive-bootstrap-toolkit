/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   2.3.0 (2015-02-15)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
;var ResponsiveBootstrapToolkit = (function($){

    // Methods and properties
    var self = {

        /**
         * Determines default interval between firing 'changed' method
         */
        interval: 300,

        /**
         * Breakpoint aliases
         */
        breakpoints: {
            'xs': $('<div class="device-xs visible-xs"></div>').appendTo('body'),
            'sm': $('<div class="device-sm visible-sm"></div>').appendTo('body'),
            'md': $('<div class="device-md visible-md"></div>').appendTo('body'),
            'lg': $('<div class="device-lg visible-lg"></div>').appendTo('body')
        },

        /**
         * Used to calculate intervals between consecutive function executions
         */
        timer: new Date(),

        /**
         * Returns true if current breakpoint matches passed alias
         */
        is: function( alias ) {
            return self.breakpoints[alias].is(':visible');
        },

        /**
         * Returns current breakpoint alias
         */
        current: function(){
            var name = 'unrecognized';
            $.each(self.breakpoints, function(alias){
                if (self.is(alias)) {
                    name = alias;
                }
            });
            return name;
        },

        /*
         * Waits specified number of miliseconds before executing a function
         * Source: http://stackoverflow.com/a/4541963/2066118
         */
        changed: function() {
            var timers = {};
            return function(callback, ms) {
                // Get unique timer ID
                var uID = (!uID) ? self.timer.getTime() : null;
                if (timers[uID]) {
                    clearTimeout(timers[uID]);
                }
                // Use default interval if none specified
                if (typeof ms === "undefined") {
                    var ms = self.interval;
                }
                timers[uID] = setTimeout(callback, ms);
            };
        }()

    }

    return self;

})(jQuery);
