// lang button
$('.dropdown').click(
    function () {
        $(this).toggleClass('active');
    }
);


// switch button
$(function () {

    $('.switch-btn').click(function () {
        $(this).toggleClass('toggle');
    });

});

// PARALLAX
$('.s-1').parallax({imageSrc: './assets/img/section-1-bg.jpg'});
$('.faq-bg-top').parallax({imageSrc: './assets/img/section-1-bg.jpg'});
$('.s-4').parallax({imageSrc: './assets/img/s-4-bg.png'});
$('.s-1-get-credit').parallax({imageSrc: './assets/img/get-credit-bg-1.jpg'});
$('.s-2-get-credit').parallax({imageSrc: './assets/img/get-credit-bg-2.jpg'});
$('.doc-temp-bg-top').parallax({imageSrc: './assets/img/doc-tem-bg.jpg'});


// mob nav
$(function () {
    $(".menu").click(function () {
        if ($("#navigation").hasClass("hidden")) {
            $("#navigation").attr("class", "visible animated slideInLeft");
        } else {
            $("#navigation").attr("class", "hidden animated slideOutLeft");
        }
        $(this).toggleClass("open");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            if ($("#navigation").hasClass("visible")) {
                $(".menu").toggleClass("open");
            } else {
            }
            $("#navigation").attr("class", "slideOutLeft hidden");
        }
    });
});

// WOW ANIMATIONS
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

function slider() {
    var slides = document.querySelectorAll('.slider__item');
    var slidesArr = Array.prototype.slice.call(slides);
    var currentSlide = 0;
    // var slideInterval = setInterval(nextSlide, 4000);
    var nextBtn = document.getElementById('slider__arrow-right');
    var previousBtn = document.getElementById('slider__arrow-left');


    slidesArr[0].className = 'slider__item first';
    slidesArr[1].className = 'slider__item second';
    slidesArr[2].className = 'slider__item third';


    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slidesArr.forEach(function (value) {
            value.className = "slider__item"
        });


        slidesArr[0].className = 'slider__item first animated fadeOutUp';
        slidesArr[1].className = 'slider__item first';
        slidesArr[2].className = 'slider__item second';
        slidesArr[3].className = 'slider__item third';
        var slidesArrShifted = slidesArr.shift();
        slidesArr.push(slidesArrShifted);
        // if(slides[currentSlide - 1]){
        //     slides[currentSlide - 1].className = 'slider__item third';
        // }
        // slides[currentSlide].className = 'slider__item second';
        // currentSlide = (n + slides.length) % slides.length;
        // slides[currentSlide].className = 'slider__item first animated fadeInLeft';

    }

    function initEvents() {
        nextBtn.onclick = function () {
            nextSlide();
        };
        previousBtn.onclick = function () {
            previousSlide();
        };
    }

    initEvents();
}


// ANIMATE PROGRESS BAR FILL
$(".meter > span").each(function () {
    $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth")
        }, 1200);
});

// SLICK SLIDER
$('.slick-slider').on('init', function (event, slick) {
    var $items = slick.$dots.find('li');
    slick.$dots.addClass('slider-content-dots');
    $items.find('button').remove();
});
$(".slick-slider").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        // },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<img src="img/slick-slider-dot-img-1.png" alt="" class="slick-slider-dot-img">';
    }
});


$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: '<i class="fa fa-caret-right slick-arrow-right" aria-hidden="true">',
    prevArrow: '<i class="fa fa-caret-left slick-arrow-left" aria-hidden="true">',
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 680,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});


$(document).ready(function () {
    $(".my-project-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        infinite: true,
        responsiveClass: true,
        navText: ["<i class=\"fa fa-caret-right my-project-slider-arrow-left\" aria-hidden=\"true\">", "<i class=\"fa fa-caret-right my-project-slider-arrow-right\" aria-hidden=\"true\">"],
        responsive: {
            560: {
                items: 3,
                nav: true
            },
            800: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});

// COUNTER ANIMATION
$('.counter__number').counterUp({
    delay: 10,
    time: 1000
});

// TIMELINE
$(function () {

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        if ($('.timeline-content-img').hasClass('js--fadeInLeft-img')) {
            $('.timeline-content-img').removeClass('js--fadeInLeft-img').addClass('js--fadeInRight-img');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });

        sr.reveal('.js--fadeInLeft-img', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            delay: 100
        });
        sr.reveal('.js--fadeInRight-img', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            delay: 100
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });

        sr.reveal('.js--fadeInLeft-img', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            delay: 100
        });
        sr.reveal('.js--fadeInRight-img', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            delay: 100
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });

    sr.reveal('.js--fadeInLeft-img', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
        delay: 100
    });
    sr.reveal('.js--fadeInRight-img', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
        delay: 100
    });
});

//ACCORDEON
// accordion
function accordeon() {
    var acc = document.getElementsByClassName("faq-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }
}

accordeon();

$(document).ready(function () {
    $('.js-example-basic-single').select2({
        width: 'resolve',
        minimumResultsForSearch: -1
    });
});
