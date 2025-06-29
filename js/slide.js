$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,      // 同時に見せる画像枚数
        slidesToScroll: 1,    // 1回のスライドで進む枚数
        autoplay: true,       // 自動再生
        autoplaySpeed: 2000,  // 自動再生のスピード（ミリ秒）

        responsive: [
            {
                breakpoint: 768, // スマホ（768px以下）
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
});