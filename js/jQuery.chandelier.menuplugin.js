
"use-strict";
$(document).ready(function(){
    $('#chandelier-menu').highlightMenu({
        bgColor: '#32CD32',
        color:'#C80000'
    });
});
(function($){
    $.fn.highlightMenu = function(){
        var defaults = $.extend({
            'bgColor' : '#32CD32',
            'color': '#C80000',
        },);
        return this.each(function(){
            var items = $("li a");
            var o = defaults;
            items.css('font-family','ariel ,helvetica, sans-serif')
                .css('font-weight','bold')
                .css('text-decoration','none')
                .css('background-color',o.bgColor)
                .css('color',o.color)
                .css('list-style','none')
            items.mouseover(function(){
                $(this).css('background-color','#000')
                        .css('color','#fff')
            });

            items.mouseout(function(){
                $(this).css('background-color',o.bgColor)
                .css('color',o.color)
            });
        });
    }
})(jQuery);