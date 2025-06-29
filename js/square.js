//サブタイトルの正方形の動き
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rotateSquare(entry.target);
                observer.unobserve(entry.target); // 一度だけ回転するように監視解除
            }
        });
    }, {
        threshold: 0.2 // 要素の20％が画面に入ったら発火
    });

    squares.forEach(square => {
        observer.observe(square);
    });

    function rotateSquare(box) {
        let angle = 0;
        let steps = 4;
        let stepDeg = 90 / steps;
        let interval = 350;
        let count = 0;

        let timer = setInterval(() => {
            angle += stepDeg;
            box.style.transform = `rotate(${angle}deg)`;
            count++;
            if (count >= steps) {
                clearInterval(timer);
            }
        }, interval);
    }
});