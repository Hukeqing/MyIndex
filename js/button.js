// function fullScreen() {
//     var element = document.documentElement;
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen();
//     } else if (element.mozRequestFullScreen) {
//         element.mozRequestFullScreen();
//     } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen();
//     }
// }
// function exitFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//     } else if (document.mozCancelFullScreen) {
//         document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//     }
// }
// var reminds = [];
// reminds[0] = '';
// reminds[1] = '<h1 onclick="UNLockScreen()">记得打卡</h1>';
// reminds[2] = '<iframe src="iframe/lockclock/index.html" width="100%" height="100%" frameborder="0"><p>您的浏览器不支持  iframe 标签。</p></iframe>';
// //********* 锁屏DIV ***************************
// function LockScreen(tag, inner) {
//     if (tag) //锁屏
//     {
//         var lockdiv = document.getElementById("lockscreen");
//         lockdiv.style.display = "block";
//         if (inner !== -1) {
//             lockdiv.innerHTML = reminds[inner];
//         } else {
//             var DIYhint = document.getElementById("DIYhint");
//             lockdiv.innerHTML = '<h1>' + DIYhint.value + '</h1>';
//         }
//         // fullScreen();
//     } else {
//         //解屏
//         var lockdiv = document.getElementById("lockscreen");
//         lockdiv.style.display = "none";
//         // exitFullscreen();
//     }
// }
// function UNLockScreen() {
//     LockScreen(false);
// }