# Responsive Bootstrap Toolkit


Responsive Bootstrap Toolkit provides an easy way of breakpoint detection in JavaScript, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

Current version: 2.0.0

[See a live example on CodePen](http://codepen.io/dih/full/ivECj)


### Dependencies

There are two:
  1. Bootstrap's responsive utility css classes included in its standard stylesheet package
  2. jQuery library


### How do I use it in my project?

Include just before `</body>`
```
  <!-- Mandatory for Responsive Bootstrap Toolkit to operate -->
  <div class="device-xs visible-xs"></div>
  <div class="device-sm visible-sm"></div>
  <div class="device-md visible-md"></div>
  <div class="device-lg visible-lg"></div>

  <!-- Responsive Bootstrap Toolkit -->
  <script src="js/bootstrap-toolkit.min.js"></script>

  <!-- Your scripts using Bootstrap Toolkit -->
  <script src="js/main.js"></script>
```


### Checking which breakpoint is active

    if (viewport.is('xs')) {
      // do stuff in the lowest resolutions only!
    }
   
    if (viewport.is('lg')) {
      // do stuff on huge screens only
    }
     

### Executing a script whenever window is resized

**Default interval, 300 ms**

    $(window).bind('resize', function() {
        viewport.changed(function() {
        
          // do some other stuff!
          
        })
    });


**Custom interval**

    $(window).bind('resize', function() {
        viewport.changed(function() {
        
          // do some other stuff!
          
        }, 600)
    });


### Changelog

**2.0.0**

Version 2.0.0 introduces internal method and property name changes. Using this version without making appropriate changes to your scripts will break them. Please proceed with caution.

| old name            | new name |
| ------------------- | -------- |
| method `isBreakpoint`        | `is`     |
| method `waitForFinalEvent`   | `changed`|
| property `clock`      | `interval`|
| property `timeString` | `timer`|

For your convenience, version 1.5.0 of Responsive Bootstrap Toolkit is still kept inside this repository. You can find it at https://github.com/maciej-gurban/responsive-bootstrap-toolkit/blob/master/js/bootstrap-toolkit-1.5.0.js

**1.5.0**

Name-spacing functionalities, code improvements.

**1.0.0**

Initial realease containing bare JavaScript functions.