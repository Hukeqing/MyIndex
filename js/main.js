// search
var defaultsel = 1;
var SearchEg = new Array();
var curSearch = 0;
function createSearchEg(urls, se) {
    var object = new Object();
    object.urls = urls;
    object.search_engine = se;
    return object;
}
function search_init() {
    SearchEg[0] = createSearchEg("https://www.google.com/search?q=", "Search in Google");
    SearchEg[1] = createSearchEg("https://www.baidu.com/#ie={inputEncoding}&wd=", "Search in Baidu");
    SearchEg[2] = createSearchEg("https://translate.google.com/?source=osdd#auto|auto|", "Google Translate");
    SearchEg[3] = createSearchEg("https://fanyi.baidu.com/#auto/auto/", "Baidu Translate");
    SearchEg[4] = createSearchEg("https://github.com/search?q=", "Search in GitHub");
    SearchEg[5] = createSearchEg("https://search.bilibili.com/all?keyword=", "哔哩哔哩 (゜-゜)つロ 干杯~");
    SearchEg[6] = createSearchEg("https://zh.wikipedia.org/wiki/", "维基百科-中文");
    SearchEg[7] = createSearchEg("https://en.wikipedia.org/wiki/", "Wikipedia-English");
    SearchEg[8] = createSearchEg("https://so.csdn.net/so/search/s.do?q=", "Search in CSDN");
    SearchEg[9] = createSearchEg("https://zh.cppreference.com/mwiki/index.php?search=", "Search in CPP");
    SearchEg[10] = createSearchEg("http://oeis.org/search?q=", "1,2,3,6,11,23,47,106,235");
    But = document.getElementById("button");
    Inp = document.getElementById("input");
    Sel = document.getElementById("selects");
    Sel.value = defaultsel;
    changes();
}
function searchs() {
    But.href = SearchEg[curSearch].urls + Inp.value;
    Inp.value = "";
    Sel.value = defaultsel;
    curSearch = defaultsel;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}
function changes() {
    curSearch = Sel.value;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}
document.onkeydown = function EnterPress(e) {
    if (e.keyCode == 13) {
        searchs();
        window.open(But.href);
    }
    if (e.keyCode == 8) {
        LockScreen(false);
    }
}
// fastlinker
var num = 0;
function cnt() {
    var img_obj = document.getElementsByTagName("img")
    for (var i = 0; i < img_obj.length; i++) {
        if (img_obj.item(i).className == "radiuscenter") {
            num++;
        }
    }
}
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

// clock
var flushWaitTime = 0.01;       // 时钟刷新时间，时钟精确到多少秒
var lastSecond = new Date().getSeconds();   // 秒数，精确到小数
// 防止因为标签页转换后，时钟不再刷新
document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        lastSecond = new Date().getSeconds();
    }
});
var mode = 0;
var week = ["日", "一", "二", "三", "四", "五", "六"];
// clock 中间显示
function getFormat() {
    var date = new Date();
    if (mode == 0) {
        if (date.getMinutes() >= 10)
            return date.getHours() + ':' + date.getMinutes();
        else
            return date.getHours() + ':0' + date.getMinutes();
    } else if (mode == 1) {
        return (date.getMonth() + 1) + '.' + date.getDate() + '';
    } else if (mode == 2) {
        return "星期" + week[date.getDay()];
    }
}
function startClock() {
    // 定义时钟
    var radialObj = radialIndicator('#clock', {
        radius: 60,
        barWidth: 15,
        barColor: '#FF0000',
        minValue: 0,
        maxValue: 60,
        // fontWeight: 'normal',
        fontWeight: '700',
        roundCorner: true,
        format: function (value) {
            return getFormat();
        }
    });
    // div 点击事件，切换显示模式
    var sp = document.getElementById("clock");
    sp.onclick = function () {
        mode += 1;
        if (mode >= 3)
            mode = 0;
    }
    sp.onmouseout = function () {
        if (mode != 0)
            mouseMoveOut = setTimeout("mode = 0;", 1000);
    }
    sp.onmouseover = function () {
        if (mode != 0)
            clearTimeout(mouseMoveOut);
    }
    // 时钟 value 更新
    setInterval(function () {
        lastSecond += flushWaitTime;
        if (lastSecond >= 60) {
            lastSecond = 0;
        }
        radialObj.value(lastSecond);
    }, 1000 * flushWaitTime);
}
function init() {
    search_init();
    startClock();
    cnt();
    startresize();
}