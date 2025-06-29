$(function () {
    // モーダルを開く処理
    $('.item .button').on('click', function () {
        const $item = $(this).closest('.item'); // クリックされたli
        $item.find('.layer').addClass('open');  // その中の.layerを開く
    });

    // モーダルを閉じる処理
    $('.item .close-button').on('click', function () {
        const $item = $(this).closest('.item'); // ボタンの親のli
        $item.find('.layer').removeClass('open');
    });
});