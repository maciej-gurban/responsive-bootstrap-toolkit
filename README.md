# Responsive Bootstrap Toolkit


Responsive Bootstrap Toolkit provides an easy way of breakpoint detection in JavaScript, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

The SASS module enables quick and simple styling for elements needing different property values for each screen resolution.

Current version: 2.1.0

[See a live example on CodePen](http://codepen.io/dih/full/ivECj)

### JavaScript
#### Checking which breakpoint is active

````javascript
if (viewport.is('xs')) {
  // do stuff in the lowest resolutions only!
}

if (viewport.is('lg')) {
  // do stuff on huge screens only
}
````

#### Executing a script whenever window is resized
##### Default interval, 300 ms

````javascript
$(window).bind('resize', function() {
    viewport.changed(function() {
    
      // do some other stuff!
      
    })
});
````

##### Custom interval

````javascript
$(window).bind('resize', function() {
    viewport.changed(function() {
    
      // do some other stuff!
      
    }, 600)
});
````

### SASS
#### Set different CSS property value per breakpoint

````css
h1 {
    @include set(font-size, (xs: 20px, sm: 24px, md: 24px, lg: 30px) ); 
}
````

You don't need to specify a value for each of the breakpoints. One is enough, four is the max. Example below will work just as well:

````css
h1 {
    @include set(font-size, (xs: 20px, lg: 30px) );
}
````

Output:

````css
@media (max-width: 767px) {
  h1 {
    font-size: 20px;
  }
}
@media (min-width: 1200px) {
  h1 {
    font-size: 30px;
  }
}
````


### How do I include it in my project?
#### JavaScript

Include just before `</body>`

````html
<!-- Mandatory for Responsive Bootstrap Toolkit to operate -->
<div class="device-xs visible-xs"></div>
<div class="device-sm visible-sm"></div>
<div class="device-md visible-md"></div>
<div class="device-lg visible-lg"></div>

<!-- Responsive Bootstrap Toolkit -->
<script src="js/bootstrap-toolkit.min.js"></script>

<!-- Your scripts using Bootstrap Toolkit -->
<script src="js/main.js"></script>
````

#### SASS

Copy contents of `compass/bootstrap-toolkit` directory into your project. File `style.scss` contains lines that need to be in your own style.scss for the mixin to work. You'll need SASS 3.3+.


### Dependencies

**JavaScript features:**
  1. Bootstrap's responsive utility css classes included in its standard stylesheet package
  2. jQuery library

**CSS features:**
  1. SASS 3.3+
  2. Compass


