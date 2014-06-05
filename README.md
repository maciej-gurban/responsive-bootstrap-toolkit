# Responsive Bootstrap Toolkit


Responsive Bootstrap Toolkit provides an easy way of breakpoint detection in JavaScript, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

Current version: 1.5.0

[See a live example](http://codepen.io/dih/full/ivECj)

### Checking which breakpoint is active

    if (BS.isBreakpoint('xs')) {
      // do stuff in the lowest resolutions only!
    }
   
    if (BS.isBreakpoint('lg')) {
      // do stuff on huge screens only
    }
     
    
### Executing a script whenever window is resized

    $( w ).bind('resize', function() {
        BS.waitForFinalEvent(function() {
        
          // do some other stuff!
          
        }, 300, BS.timeString.getTime())
    });
