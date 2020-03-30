var len = 10;
var cur = -1;
var dislikeBG = 0;
var dict = new Array();
var version = 1;
function changeBackground() {
    var ans = Math.floor(Math.random() * dict.length);
    while (ans == cur) {
        ans = Math.floor(Math.random() * dict.length);
    }
    console.log(dict[ans])
    document.getElementById("body").style.backgroundImage = "url('basic/background/" + dict[ans] + ".jpg')"
    cur = dict[ans];
}

function initBG() {
    initCookie();
    for (var i = 0; i < len; ++i) {
        if ((1 << i) & dislikeBG) continue;
        dict.push(i);
    }
    changeBackground();
}

function addDislike() {
    if (dict.length == 1) {
        window.alert("没有更多的壁纸啦！");
    } else {
        dislikeBG |= 1 << cur;
        setCookie('dislike', dislikeBG);
        var index = dict.indexOf(cur)
        dict.splice(index, 1);
        cur = -1;
        changeBackground();
        console.log(dict);
    }
}

function clearCookie() {
    var data = document.cookie.split(';');
    for (var item in data) {
        deleteCookie(data[item].split('=')[0]);
    }
    window.location.reload();
}

function downloadImg() {
    window.open('basic/background/' + cur + '.jpg');
}

function setCookie(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = ";expires=" + d.toUTCString();
    document.cookie = name + '=' + value + expires;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

function logNewVersion() {
    window.alert("版本：1，更新公告：\n增加了添加不喜欢的壁纸功能，点击左下角的“dislike”按钮就可以添加当前壁纸哦。\n如果想要清空之前的选择，可以点击左下角的“clear”按钮就可以清空哦")
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function initCookie() {
    if (getCookie('version') != version) {
        logNewVersion();
        setCookie('version', version);
    }
    dislikeBG = getCookie('dislike');
}
