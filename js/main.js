$(document).ready( function() {
    'use strict';

    // ===== mobile responsive nav background change js start here =====
    var navBg = $('.nav-bg');
    if ( matchMedia('(max-width: 767px)').matches ) {
        navBg.removeClass('bg-transparent')
            .addClass('bg-primary');
    } else {
        $(window).scroll(function () {
            //if you hard code, then use console
            //.log to determine when you want the
            //nav bar to stick.
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() > 115) {
                navBg.addClass('bg-dark')
                     .removeClass('bg-transparent');
            }
            if ($(window).scrollTop() < 116) {
                navBg.addClass('bg-transparent')
                     .removeClass('bg-dark');
            }

        });
    }

    // ================ burger menu js for startup one start here ==================
    var hamCross = $( ".cross" ),
        hamMenu = $( ".menu" ),
        hamBurger = $( ".hamburger" );
    hamCross.hide();
    hamMenu.hide();
    hamBurger.on('click', function() {
        hamMenu.slideToggle( "slow", function() {
            hamBurger.hide();
            hamCross.show();
        });
    });
    hamCross.on('click', function() {
        hamMenu.slideToggle( "slow", function() {
            hamCross.hide();
            hamBurger.show();
        });
    });
    // ============= burger menu js for startup one end here ===============

    // ================ burgermenu js start ===================
    $('.menuBtn').on('click', function (e) {
        e.preventDefault();
        $('#swipeNav').removeClass('animated slideOutRight').addClass('animated slideInRight');
    });
    $('.menu-cross-btn').on('click', function (e) {
        e.preventDefault();
        $('#swipeNav').removeClass('animated slideInRight').addClass('animated slideOutRight');
    });
    // ================ burgermenu js end =====================

    // ========== venobox light box js here ==============
    var mixVenobox = $('.venobox');
    mixVenobox.venobox({
        titlePosition: 'bottom'
    });
    // ========== venobox light box js here ==============

    // ============text rotator js start ===============
    var mixRotate = $(".rotate");
    if ( mixRotate && typeof $.fn.textrotator === 'function' ) {
        mixRotate.textrotator({
            animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 2000 // How many milliseconds until the next word show.
        });
    }
    // ============text rotator js start ===============

    // =================== wow js start here ========================
    if($('.wow') && typeof WOW === 'function' ) {
        var wow = new WOW({});
        wow.init();
    }
    // =================== wow js end here ==========================

    /*=====================  simplycountdown js start here =========================*/
    var simplyCount = $('.simply-countdown');
    if (simplyCount && typeof $.fn.simplyCountdown === 'function') {
        simplyCount.simplyCountdown({
            year: 2018, // required
            month: 5, // required
            day: 6, // required
            hours: 23, // Default is 0 [0-23] integer
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: 'Day',
                hours: 'Hr',
                minutes: 'Min',
                seconds: 'Sec',
                pluralLetter: 's'
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: true,
            onEnd: function () {

                simplyCount.fadeOut();

                return;

            },
            refresh: 1000, //default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
            zeroPad: false
        });
    }
    /*=====================  simply count down js end here =========================*/

    //================= masonary plugin gallery ======================
    var mixMasonry = $('.masonary');
    if ( mixMasonry && typeof $.fn.masonry === 'function' ) {
        mixMasonry.imagesLoaded(function(e) {
            mixMasonry.masonry({
                itemSelector: '.grid_item',
                // use element for option
                columnWidth: '.col-xs-3',
                percentPosition: true
            });
        });
    }
    //================= masonary plugin gallery ========================

    /*============== filterizd js start ==================*/
    //You can override any of these options and then call...
    $('.sorting-menu .dropdown-menu').on('click', function (e) {
        e.preventDefault();
    });
    //Default options
    var options = {
        animationDuration: 0.5, //in seconds
        filter: 'all', //Initial filter
        delay: 0, //Transition delay in ms
        delayMode: 'alternate', //'progressive' or 'alternate'
        easing: 'ease-out',
        filterOutCss: { //Filtering out animation
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: { //Filtering in animation
            opacity: 1,
            transform: 'scale(1)'
        },
        layout: 'sameSize', //See layouts
        selector: '.gallery-body',
        setupControls: true
    };
    //You can override any of these options and then call...
    var threeColGallery = $('.gallery-body');
    if ( threeColGallery.length ){
        threeColGallery.imagesLoaded(function(e) {
            var filterizd = threeColGallery.filterizr();
            filterizd.filterizr('setOptions', options);
        });
    }
    /*============== filterizd js end ==================*/

    // ================= counterup js start here ==================
    var mixCounter = $('.counter');
    if ( mixCounter && typeof $.fn.counterUp === 'function' ) {
        mixCounter.counterUp({
            delay: 10,
            time: 1100
        });
    }
    // ================= counterup js end here ==================

    // ========== selsct2 js here ==============
    var footerSelect = $('.footer-form-select');
    footerSelect.select2({
        minimumResultsForSearch: Infinity
    });
    // ============== select2 js end here ================

    /******************** CONTACT FORM  js start********************/
    // Function for email address validation and contact form ajax code
    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
    /******************** CONTACT FORM ********************/
    var contactForm = $('#contact-form');
    var errorForm = $('#form_errors');
    contactForm.on('submit', function(e) {
        e.preventDefault();
        errorForm.addClass('hide');
        var data = $(this).serialize();
        if (validateEmail( $(this).find('input[name="email"]').val() )) {
            $.ajax({
                type: "POST",
                url: $(this).attr('action'),
                data: data,
                success: function(res) {
                    res = $.parseJSON(res);
                    if(res.status) {
                        $('#form_success').html(res.message).removeClass('hide');
                        contactForm.addClass('hide');
                    } else {
                        errorForm.html(res.message).removeClass('hide');
                    }
                }
            });
        } else {
            errorForm.html('Please give a valid email address').removeClass('hide');
        }

        return false;
    });
    /******************** CONTACT FORM js end********************/

    // =========== testimonial  slider javascript ============
    var testimonial =  $('.testimonial-one');
    testimonial.owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ],
        dots:true,
        lazyLoad: true,
        center:false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1600:{
                items:3
            }
        }
    });
    // =========== testimonial slider slider javascript ============


    //================ header banner down-arrow js start here =================
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
        speed: 900, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 50, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });
    //================ headder banner down-arrow js end here =================


    /* ================================ preloder js start here ======================================== */
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    /* ================================ preloder js end here ======================================== */


});