document.onkeydown = function EnterPress(e) {
    if (e.keyCode === 13) {
        searchs();
        window.open(But.href);
    }
};

// 防止因为标签页转换后，时钟不再刷新
document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        lastSecond = new Date().getSeconds();
    }
});

function init() {
    init_Cookie();
    search_init();
    startClock();
    fastlinker_init();
    initBG();
}

window.onresize = function () {
    let minwidth = 70;
    let maxmum = Math.floor(document.body.clientHeight / 90);
    let curwidth = Math.ceil(fastlinkerList.length / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
};
