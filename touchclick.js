!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(){},{}],2:[function(a){/*!
Copyright (c) 2013 Derek Petersen https://github.com/tuxracer/touchclick MIT License
*/
var b,c,d,e,f,g,h,i,j,k;b="function"==typeof jQuery?jQuery:a("jquery"),c="touchactive",h=!1,g=0,f=function(a){var b,c;return b=Math.round((new Date).getTime()/1e3),c=b-g,a.type.match("touchstart|touchmove|touchend")&&(g=b),3>c&&a.type.match("mouse")},e=function(a){var c,d;return c=b(a),d=c.closest('*[data-touchclick="true"]'),d.length?d:c},k=function(a){return f(a)?void 0:e(a.target).addClass(c)},j=function(a){return e(a.target).removeClass(c)},i=function(a){var b;return b=e(a.target),b.hasClass(c)&&!f(a)?(a.type="touchclick",b.trigger(a).removeClass(c)):void 0},d=function(a){var c;return c=b(this),h&&c[a]("click",function(a){return a.preventDefault()}),window.navigator.msPointerEnabled?(c[a]("MSPointerDown",k),c[a]("MSPointerUp",i)):(c[a]("touchstart mousedown",k),c[a]("touchmove mouseout",j),c[a]("touchend mouseup",i))},b.event.special.touchclick={setup:function(){return d.call(this,"on")},teardown:function(){return d.call(this,"off")}}},{jquery:1}]},{},[2]);