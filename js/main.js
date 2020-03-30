document.onkeydown = function EnterPress(e) {
    if (e.keyCode === 13) {
        searchs();
        window.open(But.href);
    }
    // if (e.keyCode === 8 || e.keyCode === 27) {
    //     LockScreen(false);
    // }
};
// window.addEventListener('message', function (e) {
//     if (e.data === 'endLock') {
//         UNLockScreen();
//     }
// }, false);

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
