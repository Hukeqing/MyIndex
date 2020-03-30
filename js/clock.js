// clock
var flushWaitTime = 0.01;       // 时钟刷新时间，时钟精确到多少秒
var lastSecond = new Date().getSeconds();   // 秒数，精确到小数

var mode = 0;
var week = ["日", "一", "二", "三", "四", "五", "六"];

// clock 中间显示
function getFormat() {
    var date = new Date();
    if (mode === 0) {
        if (date.getMinutes() >= 10)
            return date.getHours() + ':' + date.getMinutes();
        else
            return date.getHours() + ':0' + date.getMinutes();
    } else if (mode === 1) {
        return (date.getMonth() + 1) + '.' + date.getDate() + '';
    } else if (mode === 2) {
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
    };
    sp.onmouseout = function () {
        if (mode !== 0)
            mouseMoveOut = setTimeout("mode = 0;", 1000);
    };
    sp.onmouseover = function () {
        if (mode !== 0)
            clearTimeout(mouseMoveOut);
    };
    // 时钟 value 更新
    setInterval(function () {
        lastSecond += flushWaitTime;
        if (lastSecond >= 60) {
            lastSecond = 0;
        }
        radialObj.value(lastSecond);
    }, 1000 * flushWaitTime);
}
