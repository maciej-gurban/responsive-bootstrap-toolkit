// Your own scripts inside
(function($, document, window, view){


    function resizeTopBar() {

        var $topBar  = $('.site-topbar');
        var compact  = $topBar.attr('data-compact-height');
        var fullsize = $topBar.attr('data-fullsize-height');

        var $toBeAnimated = $('.site-topbar, .site-topbar h5');

        if (view.is('xs')) {
            $toBeAnimated.animate({
                    'height':      compact,
                    'line-height': compact
                }, 
                view.clock.fast
            );
        }
        else {
            $toBeAnimated.animate({
                    'height':      fullsize,
                    'line-height': fullsize
                }, 
                view.clock.fast
            );
        }
    }
  

  // DOM has been loaded
  $(document).ready(function() {

        resizeTopBar();

  });

 
  // Insert scripts that are supposed to be executed upon each window resize
  $(window).bind('resize', function() {
      view.refreshed(function() {

        resizeTopBar();

      }, view.clock.fast, view.timer.getTime())
  });

  
  // Insert scripts that are supposed to be executed upon each orientation change.
  $(window).bind('orientationchange', function() {
      view.refreshed(function() {

        // resizeTopBar();

      }, view.clock.fast, view.timer.getTime())
  });

  
})(jQuery, document, window, ResponsiveBootstrapToolkit);
