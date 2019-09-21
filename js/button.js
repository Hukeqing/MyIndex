function fullScreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
//********* 锁屏DIV ***************************
function LockScreen(tag) {
    if (tag) //锁屏
    {
        var lockdiv = document.getElementById("lockscreen");
        lockdiv.style.display = "block";
        fullScreen();
    } else {
        //解屏
        var lockdiv = document.getElementById("lockscreen");
        lockdiv.style.display = "none";
        exitFullscreen();
    }
}
function UNLockScreen() {
    LockScreen(false);
}