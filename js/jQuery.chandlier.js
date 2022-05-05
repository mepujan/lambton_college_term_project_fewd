
// Pujan Gautam - c0842623
"use-strict";

$(document).ready(function(){

    $('#specials button').click(function(){
        $(this).prev().toggleClass("hide");
        if($(this).prev().hasClass("hide")){
            $(this).text("Show more");
           }
        else{
            $(this).text("Show Less");
           }
    });

    //adding slider image to the page
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth:500
    });
    

    // displaying in large form when image is hover
    $('.images').hover(function(){

        $(this).css('width' , '500px');
        $(this).css('height' , '400px');
    },function(){
    
        $(this).css('width' , '400px');
        $(this).css('height' , '300px');
    });

  

    //getting employee json data
    $.getJSON("employee_data/employee.json",function(data){
        var employees = "";
        $.each(data.employees,function(key,value){
            employees += '<tr>';
            employees += '<td>' + value.name+'</td>';
            employees += '<td>' + value.title+'</td>';
            employees += '<td>' + value.department+'</td>';
            employees += '<td>' + value.bio+'</td>';
            employees += '</tr>';
        });
    $("#employee-table").append(employees);
    //setting even index data back ground color to gray
    $("#employee-table tr:even").css({'background-color':'gray'});
    }).fail(function(){
        console.log("Error in Fetching data.");
    });

    $(".search-form").submit(function(event){
        event.preventDefault();
        console.log($("#search").val());
        var name = $("#search").val()
        var url = "https://www.flickr.com/services/feeds/photos_public.gne?tags="+name+
                    "&format=json&jsoncallback=?";
    $.getJSON(url,function(data){
        var image = "";
        $.each(data.items,function(key,value){   
            image += "<img src=" + value.media.m + " width=300 height= 150>";
            image += "<h2>" + value.title + "</h2><br>";
        });
        $(".products").html(image);
    })
    });
});