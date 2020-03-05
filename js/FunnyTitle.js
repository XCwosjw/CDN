var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '°(°ˊДˋ°) °你怎么走啦 ~';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(ฅ>ω<*ฅ) 噫你又回来啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
