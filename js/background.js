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

function initValue() {
    getCookie();
    for (var i = 0; i < len; ++i) {
        if ((1 << i) & dislikeBG) continue;
        dict.push(i);
    }
    changeBackground();
}

function addDislike() {
    if (dict.length == 1) {
        window.alert("没有更多的壁纸啦！")
    } else {
        dislikeBG |= 1 << cur;
        setCookie();
        var index = dict.indexOf(cur)
        dict.splice(index, 1);
        cur = -1;
        changeBackground();
        console.log(dict);
    }
}

function clearCookie() {
    document.cookie = "";
    window.location.reload();
}

function downloadImg() {
    window.open('basic/background/' + cur + '.jpg');
}

function setCookie() {
    document.cookie = 'version=' + version.toString() + ';dislike=' + dislikeBG.toString();
}

function logNewVersion() {
    window.alert("版本：1，更新公告：\n增加了添加不喜欢的壁纸功能，点击左下角的“dislike”按钮就可以添加当前壁纸哦。\n如果想要清空之前的选择，可以点击左下角的“clear”按钮就可以清空哦")
}

function getCookie() {
    if (document.cookie != 0) {
        data = document.cookie;
        if (version != data[0].split('=')[1]) {
            logNewVersion();
            setCookie();
        }
        dislikeBG = data[1].split('=')[1];
    } else {
        logNewVersion();
        setCookie();
        dislikeBG = 0;
    }
}
