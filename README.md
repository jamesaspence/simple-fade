# simple-fade
A lightweight, simple, and easy library
meant to replace the need for jQuery's
``fadeIn`` and ``fadeOut``.

# Examples
This library is very lightweight and easy to use.
Simply require, pass an element and the number of
milliseconds, and you're finished.

    var simpleFade = require('simple-fade');
    var element = document.querySelector('#testElement');

To fade out the element, for example:

    simpleFade.fadeOut(3000, element);

To fade it back in:

    simpleFade.fadeIn(3000, element);

simple-fade also supports simple hide / show:

    simpleFade.show(element);
    simpleFade.hide(element);