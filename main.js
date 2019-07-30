var num = 14;
window.onresize = function () {
    var minwidth = 70;
    var maxmum = Math.floor(document.body.clientHeight / 90);
    var curwidth = Math.ceil(num / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
}
function startresize () {
    var minwidth = 70;
    var maxmum = Math.floor(document.body.clientHeight / 90);
    var curwidth = Math.ceil(num / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
}