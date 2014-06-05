// Your own scripts
(function($, dom, w, BS){



    function resizeTopBar() {

        var $topBar  = $('.site-topbar');
        var compact  = $topBar.attr('data-compact-height');
        var fullsize = $topBar.attr('data-fullsize-height');

        var $toBeAnimated = $('.site-topbar, .site-topbar h5');

        if (BS.isBreakpoint('xs')) {
            $toBeAnimated.animate({
                    'height':      compact,
                    'line-height': compact
                }, 
                BS.clock.fast
            );
        }
        else {
            $toBeAnimated.animate({
                    'height':      fullsize,
                    'line-height': fullsize
                }, 
                BS.clock.fast
            );
        }
    }
  
  

  // DOM has been loaded
  $(dom).ready(function() {

        resizeTopBar();

  });

 
  // Insert scripts that are supposed to be executed upon each window resize
  $(w).bind('resize', function() {
      BS.waitForFinalEvent(function() {

        resizeTopBar();

      }, BS.clock.fast, BS.timeString.getTime())
  });

  
  // Insert scripts that are supposed to be executed upon each orientation change.
  $(w).bind('orientationchange', function() {
      BS.waitForFinalEvent(function() {

        // resizeTopBar();

      }, BS.clock.fast, BS.timeString.getTime())
  });

  
})(jQuery, document, window, ResponsiveBootstrapToolkit);
