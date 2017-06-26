var inlineStyles = [
    'b', 'big', 'small', 'i', 'tt', 'abbr', 'acronym', 'cite', 'code', 'dfn', 'em', 'kbd', 'strong',
    'samp', 'time', 'var', 'a', 'bdo', 'br', 'img', 'map', 'object', 'q', 'script', 'span', 'sub', 'sup',
    'button', 'input', 'label', 'select', 'textarea'
];

function getDisplayStyle(elementType) {
    if (inlineStyles.indexOf(elementType) > -1) {
        return 'inline';
    } else {
        return 'block';
    }
}

function fade(type, ms, el, cb) {
    var isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 50,
        gap = interval / ms;

    if(isIn) {
        el.removeAttribute('display');
        el.style.display = getDisplayStyle(el.tagName.toLowerCase());
        el.style.opacity = opacity;
    }

    function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        el.style.opacity = opacity;

        if(opacity <= 0) el.style.display = 'none';
        if(opacity <= 0 || opacity >= 1) {
            window.clearInterval(fading);
            if(cb) cb();
        }
    }

    var fading = window.setInterval(func, interval);

}

function show(el) {
    el.style.display = getDisplayStyle(el.tagName.toLowerCase());
}

function hide(el) {
    el.style.display = 'none';
}

module.exports = {
    fadeOut: function (ms, el, cb) {
        fade('out', ms, el, cb);
    },
    fadeIn: function (ms, el, cb) {
        fade('in', ms, el, cb);
    },
    fade: fade,
    hide: hide,
    show: show
};