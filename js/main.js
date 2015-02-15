// Your own scripts
(function($, document, window, viewport){


    function resizeTopBar() {

        var $topBar  = $('.site-topbar');
        var compact  = $topBar.attr('data-compact-height');
        var fullsize = $topBar.attr('data-fullsize-height');

        var $toBeAnimated = $('.site-topbar, .site-topbar h5');

        if (viewport.is('xs')) {
            $toBeAnimated.animate(
                {
                  'height':      compact,
                  'line-height': compact
                },
                300
            );
        }
        else {
            $toBeAnimated.animate(
                {
                  'height':      fullsize,
                  'line-height': fullsize
                },
                300
            );
        }
    }



  // Executes once whole document has been loaded
  $(document).ready(function() {

        resizeTopBar();

        console.log( 'Current breakpoint:', viewport.current() );

  });


  // Executes each time window size changes
  $(window).bind('resize', function() {
      viewport.changed(function(){

        resizeTopBar();

        console.log( 'Current breakpoint:', viewport.current() );

      });
  });


})(jQuery, document, window, ResponsiveBootstrapToolkit);
