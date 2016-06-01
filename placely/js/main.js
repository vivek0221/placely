$(document).ready(function(){

    // responsive nav
    var responsiveNav = $('#toggle-nav');
    var navBar = $('.nav-bar');

    responsiveNav.on('click',function(e){
        e.preventDefault();
        console.log(navBar);
        navBar.toggleClass('active')
    });

    // pseudo active
    if($('#docs').length){
        var sidenav = $('ul.side-nav').find('a');
        var url = window.location.pathname.split( '/' );
        var url = url[url.length-1];
        
        sidenav.each(function(i,e){
            var active = $(e).attr('href');

            if(active === url){
                $(e).parent('li').addClass('active');
                return false;
            }
        });
    }

    $('.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});

});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad(); 