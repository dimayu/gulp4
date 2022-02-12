$(document).ready(function () {

    //************SLDER************** */
    $('.faq__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        prevArrow: '<div class="prev"><img src="images/dest/icon-prev.svg" ></div>',
        nextArrow: '<div class="next"><img src="images/dest/icon-prev.svg" ></div>',
        responsive: [{
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //FAQ ACCORDION
    let action = "click";
    let speed = "500";
    $(document).ready(function () {
        $('.reference__items__item').on(action, function () {
            $(this).toggleClass('active');
            $(this).next()
                .slideToggle(speed)
                .siblings('.reference__items__item-hidden')
                .slideUp();
        });
    });

})