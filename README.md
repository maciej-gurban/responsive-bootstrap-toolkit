# Responsive Bootstrap Toolkit


Responsive Bootstrap Toolkit provides an easy way of breakpoint detection in JavaScript, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

The SASS module enables quick and simple styling for elements needing different property values for each screen resolution.

Current version: **2.4.1**

### Table of Contents
* [Installation](#installation)
* [Live example](#live-example)
* [Migrating from an older version](#migrating-from-an-older-version)
* JavaScript features
    * [Basic usage](#basic-usage)
    * [Execute code on window resize](#execute-code-on-window-resize)
    * [Get alias of current breakpoint](#get-alias-of-current-breakpoint)
    * [Taking precautions](#taking-precautions)
    * [How do I include it in my project?](#how-do-i-include-it-in-my-project)
    * [Dependencies](#dependencies)
* SASS features
    * [Basic usage](#sass-features)
    * [How do I include it in my project?](#sass-instructions)
    * [Dependencies](#sass-dependencies)

### Installation

### Live example
````
bower install responsive-bootstrap-toolkit
````
Available on [CodePen](http://codepen.io/dih/full/ivECj)

### Migrating from an older version

Refer to the [changelog](https://github.com/maciej-gurban/responsive-bootstrap-toolkit/blob/master/CHANGELOG.md) for a list of improvements in each version of the library.

### JavaScript features
#### Basic usage:

````javascript
// Wrap IIFE around your code
(function($, viewport){

    // Executes only in XS breakpoint
    if( viewport.is('xs') ) {
        // ...
    }

    // Executes in SM, MD and LG breakpoints
    if( viewport.is('>=sm') ) {
        // ...
    }

    // Executes in XS and SM breakpoints
    if( viewport.is('<md') ) {
        // ...
    }

    // Execute code each time window size changes
    $(window).bind('resize', function() {
        viewport.changed(function(){
            if( viewport.is('xs') ) {
                // ...
            }
        });
    });

})(jQuery, ResponsiveBootstrapToolkit);
````

#### Execute code on window resize
Allows using custom debounce interval. The default one is set at 300ms.

````javascript
$(window).bind('resize', function() {
    viewport.changed(function() {

      // ...

    }, 600)
});
````

#### Get alias of current breakpoint
````javascript
$(window).bind('resize', function() {
    viewport.changed(function() {

        console.log( 'Current breakpoint: '+ viewport.current() );

    })
});
````

#### Taking precautions

In certain circumstances, it might be necessary to wait for certain events to happen before executing your scripts.
````javascript
// Execute code only when document has been loaded fully
$(document).ready(function() {
    if( viewport.is('xs') ) {
        // ...
    }
});
// Execute code only when all resouces have loaded
$(window).load(function() {
    if( viewport.is('xs') ) {
        // ...
    }
});
````

#### How do I include it in my project?

Paste just before `</body>`

````html
<!-- Responsive Bootstrap Toolkit -->
<script src="js/bootstrap-toolkit.min.js"></script>
<!-- Your scripts using Responsive Bootstrap Toolkit -->
<script src="js/main.js"></script>
````

#### Dependencies:
* jQuery
* Bootstrap's responsive utility css classes (included in its standard stylesheet package)



### SASS features
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


#### SASS Instructions
Copy contents of `compass/bootstrap-toolkit` directory into your project. File `style.scss` contains lines that need to be in your own style.scss for the mixin to work. You'll need SASS 3.3+.

To start working on project's SASS, run in project's root directory.
`compass watch compass/`


#### SASS Dependencies
* SASS 3.3+
* Compass
