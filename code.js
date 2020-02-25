
$(document).ready(function() {
    var NavY = $('#menu').offset().top;
      
    var stickyNav = function(){
    var ScrollY = $(window).scrollTop();
           
    if (ScrollY > NavY) { 
        $('#menu').addClass('sticky');
    } else {
        $('#menu').removeClass('sticky'); 
    }
    };
      
    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});

$(function(){
    $('#d1').hover(function()
    {
        $(this).addClass('active');
    },
    function()
    {
        $(this).removeClass('active');
    }
    );
});

$(function(){
    $('#d2').hover(function()
    {
        $(this).addClass('active');
    },
    function()
    {
        $(this).removeClass('active');
    }
    );
});


$(function(){
    if(window.location.pathname == "/")
    {
        $('#menu ol li a').each(function() {
            if ($(this).attr('href') == "index.html")
            {
                $(this).addClass('current');
            }
        });
      return;
    }

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

    if( pathname.indexOf('.html') >= 0){
      // Found
    }
    else
    {
        pathname += '.html';
    }

    $('#menu ol li a').each(function() {
        if ($(this).attr('href') == pathname)
        {
            $(this).addClass('current');
        }
    });
});
