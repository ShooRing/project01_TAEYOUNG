//비쥬얼배너
// 타이머, pagingli
const mainBanner = () => {
    let swiper = new Swiper('.mainVisual', {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,

        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
        },
    });
};
//이벤트배너 (hover 및 con1~4 기타 javascript 기능)
const eventBanner = () => {
    let btns = document.querySelectorAll('.main .about .aboutCon .btns li');
    let txt = document.querySelectorAll('.main .about .aboutCon .txt');
    let img = document.querySelectorAll('.main .about .aboutCon img');

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            txt.forEach((txtItem) => {
                txtItem.classList.remove('on');
            });
            txt[index].classList.add('on');

            img.forEach((imgItem) => {
                imgItem.classList.remove('on');
            });
            img[index].classList.add('on');

            btns.forEach((btnItem) => {
                btnItem.classList.remove('on');
            });
            btns[index].classList.add('on');
        });
    });
    //--------------------------------------------------con1

    let busconlis = document.querySelectorAll('.main .business .busCon li');

    busconlis.forEach((li) => {
        li.addEventListener('click', () => {
            busconlis.forEach((liItem) => {
                liItem.classList.remove('on');
            });
            li.classList.add('on');
        });
    });

    //--------------------------------------------------con2
    let newsli = document.querySelectorAll('.main .news .newsCon li');
    let newsMore = document.querySelectorAll('.main .news .newsCon li .more');

    newsli.forEach((more, index) => {
        more.addEventListener('click', () => {
            newsli.forEach((item) => {
                item.classList.remove('on');
            });
            newsli[index].classList.add('on');
        });
    });
    //--------------------------------------------------con3

    let reportNum1 = document.querySelector('.main .report .reportCon li span:nth-child(1)');

    let count = 0,
        timer1 = null;

    reportNum1.textContent = count;
    timer1 = setInterval(make1, 5);
    function make1() {
        count++;
        reportNum1.textContent = count;
        if (count === 612) {
            clearInterval(timer1);
        }
    }

    //con4
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
};

//즉시실행
(() => {
    mainInit();
})();
