
$(document).ready(function() {

    //************SLDER************** */
    $('.our-production__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        prevArrow: '<div class="prev"><img src="../img/svg/pre.svg" ></div>',
        nextArrow: '<div class="next"><img src="../img/svg/pre.svg" ></div>',
        responsive: [{
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

})