/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   2.4.0 (2015-04-12)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
;var ResponsiveBootstrapToolkit = (function($){

    // Internal methods
    var internal = {

        /**
         * Determines whether passed string is a parsable expression
         */
        isAnExpression: function( str ) {
            return (str.charAt(0) == '<' || str.charAt(0) == '>');
        },

        /**
         * Splits the expression in into <|> [=] alias
         */
        splitExpression: function( str ) {
            // Used operator
            var operator = (str.charAt(0) == '<' || str.charAt(0) == '>') ? str.charAt(0) : false;
            // Include breakpoints equal to X? 
            var orEqual  = (str.charAt(1) == '=') ? true : false

            // Cast to boolean, then to integer
            var index = (!!operator ? 1 : 0) + (orEqual ? 1 : 0);

            /**
             * The remaining part of the expression, after the operator, will be treated as
             * breakpoint name to compare with
             */
            var breakpointName = str.slice(index);

            return {
                operator:       operator,
                orEqual:        orEqual,
                breakpointName: breakpointName
            };
        },

        /**
         * Returns true if currently active breakpoint matches the expression
         */
        isAnyActive: function( breakpoints ) {
            var found = false;
            $.each(breakpoints, function( index, alias ) {
                // Once first breakpoint matches, return true and break the out of the loop
                if( self.breakpoints[ alias ].is(':visible') ) {
                    found = true;
                    return false;
                }
            });
            return found;
        },

        /**
         * Determines whether current breakpoint matches the expression given
         */
        isMatchingExpression: function( string ) {

            var expression = internal.splitExpression( string );

            // Get names of all breakpoints
            var breakpointList = Object.keys(self.breakpoints);

            // Get index of sought breakpoint in the list
            var pos = breakpointList.indexOf( expression.breakpointName );

            // Breakpoint found
            if( pos !== -1 ) {

                var start = 0;
                var end   = 0;

                /**
                 * Parsing viewport.is('<=md') we interate from smallest breakpoint ('xs') and end
                 * at 'md' breakpoint, indicated in the expression,
                 * That makes: start = 0, end = 2 (index of 'md' breakpoint)
                 *
                 * Parsing viewport.is('<md') we start at index 'xs' breakpoint, and end at 
                 * 'sm' breakpoint, one before 'md'.
                 * Which makes: start = 0, end = 1
                 */
                if( expression.operator == '<' ) {
                    start = 0;
                    end   = expression.orEqual ? ++pos : pos;
                }
                /**
                 * Parsing viewport.is('>=sm') we interate from breakpoint 'sm' and end at the end
                 * of breakpoint list.
                 * That makes: start = 1, end = undefined
                 *
                 * Parsing viewport.is('>sm') we start at breakpoint 'md' and end at the end of 
                 * breakpoint list.
                 * Which makes: start = 2, end = undefined
                 */
                if( expression.operator == '>' ) {
                    start = expression.orEqual ? pos : ++pos;
                    end   = undefined;
                }

                var acceptedBreakpoints = breakpointList.slice(start, end);

                return internal.isAnyActive( acceptedBreakpoints );                

            }
        },

    };

    // Public methods and properties
    var self = {

        /**
         * Determines default interval between firing 'changed' method
         */
        interval: 300,

        /**
         * Breakpoint aliases, listed from smallest to biggest
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
        is: function( str ) {

            if( internal.isAnExpression( str ) ) {
                return internal.isMatchingExpression( str );
            }

            return self.breakpoints[ str ].is(':visible');
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
