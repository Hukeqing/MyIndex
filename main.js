var num = 0;
function cnt() {
    var img_obj = document.getElementsByTagName("img")
    for (var i = 0; i < img_obj.length; i++) {
        if (img_obj.item(i).className == "radiuscenter") {
            num++;
        }
    }
}
var lastSecond = new Date().getSeconds();
window.onresize = function () {
    var minwidth = 70;
    var maxmum = Math.floor(document.body.clientHeight / 90);
    var curwidth = Math.ceil(num / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
}
function startresize() {
    var minwidth = 70;
    var maxmum = Math.floor(document.body.clientHeight / 90);
    var curwidth = Math.ceil(num / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
}
var flushWaitTime = 0.01;
document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        lastSecond = new Date().getSeconds();
    }
});