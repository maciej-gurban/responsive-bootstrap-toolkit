# Responsive Bootstrap Toolkit


Responsive Bootstrap Toolkit provides an easy way of breakpoint detection in JavaScript, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

Current version: 2.0.0

[See a live example](http://codepen.io/dih/full/ivECj)

### Checking which breakpoint is active

    if (viewport.is('xs')) {
      // do stuff in the lowest resolutions only!
    }
   
    if (viewport.is('lg')) {
      // do stuff on huge screens only
    }
     
    
### Executing a script whenever window is resized

**Default interval, 300 ms**

    $( window ).bind('resize', function() {
        viewport.changed(function() {
        
          // do some other stuff!
          
        })
    });


**Custom interval**

    $( window ).bind('resize', function() {
        viewport.changed(function() {
        
          // do some other stuff!
          
        }, 600)
    });

