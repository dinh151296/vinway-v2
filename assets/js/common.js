// common-js
$(document).ready(function(){
    // eyecatch-slider for pages
    $('.home-slide').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true
    });


    // popup

    $('.user-element-handle').on('click', function(e) {
        e.preventDefault();
        $('.popup-user-handle').toggleClass('active');

        
        // $('.user-popup').toggle();
    });
    

    $('.notification-element-handle').on('click', function(e) {
        e.preventDefault();
        $('.notification-handle').toggleClass('active');
    });

    // click outside close popup

    $(document).mouseup(function(e) 
    {
        let element01 = $(".notification-handle");
        let element02 = $('.popup-user-handle');

        // if the target of the click isn't the container nor a descendant of the container
        if (!element01.is(e.target) && element01.has(e.target).length === 0) 
        {   
            element01.removeClass('active');
        }
        if (!element02.is(e.target) && element02.has(e.target).length === 0) 
        {
            element02.removeClass('active');
        }
    });


    $('.user-popup-sp').on('click', function(e) {
        e.preventDefault();

        $('.notification__popup').hide();
        $('.user-popup').toggle();
        $('body, html').toggleClass('hide-scrool-y');
    })

    $('.notification__popup-sp').on('click', function(e) {
        e.preventDefault();

        $('.user-popup').hide();
        $('.notification__popup').toggle();
        $('body, html').toggleClass('hide-scrool-y');
    });

    $('.enter-show-phone').on('click' , function () {
        $(this).addClass('show');
        console.log("ss");
    });
    
    
    
});