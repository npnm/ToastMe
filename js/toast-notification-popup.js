/*
 Toast notification popup jQuery plugin
 (c) 2016 Nupin Mathew <nupin_mathew@infosys.com>
 License: MIT
*/
$(function () {
    /*Method to show a toast notification like popup with a message which will be closed after a fixed time*/
    $.fn.showToast = function (options) {
        var defaults = {
            message: 'This is a toast notification!',
            timeout: 1500
        };
        var settings = $.extend({}, defaults, options);
        var self = this;
        var margin = 100;
        $(self).css("width", "auto");
        $(self).text(settings.message);
        var windowWidth = window.innerWidth;
        var toastWidth = $(self).innerWidth() + margin;
        if (toastWidth >= windowWidth) {
            toastWidth = windowWidth - margin;
            $(self).css("width", toastWidth);
        }
        else {
            toastWidth = $(self).innerWidth();
        }
        var left = (windowWidth - toastWidth) / 2.0;
        var leftInPercentage = left * 100 / windowWidth;
        $(self).css("left", leftInPercentage + "%");
        $(self).fadeIn(400);
        setTimeout(function () {
            $(self).fadeOut(600);
        }, settings.timeout);
    };
});