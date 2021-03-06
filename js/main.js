$(function() {

    "use strict";

    // Add hover functionality in mobile
    // $("body").bind("touchstart", function() {});

    // Scroll to # with easing
    function scrollTo( id ) {
        $("html, body").animate({
            scrollTop: $( id ).offset().top
        }, 500);
    }
    $("a.scroll-to").on("click", function() {
        var id = $(this).attr("href");
        scrollTo( id );
    });

    // .strengths navigation
    var iCurrent = 0;
    $(".strengths > ol > li").on("click", "h3", function() {
        iCurrent = $(this).closest("li").index();
        markCurrent();
    });
    $(".nav.dot").on("click", "li", function() {
        iCurrent = $(this).index();
        markCurrent();
    });

    $(".strengths .content").on( "swipeleft", function() {
        iCurrent = iCurrent+1;
        if (iCurrent >= 6) {
            iCurrent = 0;
        }
        markCurrent();
    });
    $(".strengths .content").on( "swiperight", function() {
        iCurrent = iCurrent-1;
        if (iCurrent <= -1) {
            iCurrent = 5;
        }
        markCurrent();
    });

    function markCurrent() {
        //console.log("iCurrent: " + iCurrent);
        $(".nav.dot > li, .strengths > ol > li").removeClass( "current" );
        $(".strengths > ol > li").eq( iCurrent ).addClass( "current" );
        $(".nav.dot > li").eq( iCurrent ).addClass( "current" );
        //
        scrollTo("#strengths");
    }

    // .team .member .links activate
    $(".links").on("click", "button", function() {
        $(this).closest("aside").toggleClass("active");
        //
        var id = $(this).closest("header").attr("id");
        scrollTo("#"+id);
    });
    // Click outside closes
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".links").length) {
            $(".links").removeClass("active");
        }
    });

    // Hide loading from jquery mobile
    $.mobile.loading().hide();

    // Say hi!
    var hi = ["hello", "olá", "moi"];
    var hiCounter = 0;

    setInterval(function(){
        $("#say-hi").html(hi[hiCounter]);
        hiCounter++;
        if(hiCounter >= hi.length) { hiCounter = 0; }

    }, 1500);

    //
    $(window).scroll( function() {

        if ( $("#strengths").visible( true, true ) ) {
            // console.log("visible");
            $("#nav-dot").css( "opacity", 1 );
        } else {
            $("#nav-dot").css( "opacity", 0 );
        }

    });

});
