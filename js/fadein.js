// スクロール時のイベント
$(window).scroll(function () {
    $(".fade-in").each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fade-inクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();

        // 要素が画面内に入ったら表示
        if (scroll > target - windowHeight + 10) {
            $(this).css("opacity", "1");
        }
    });
});
