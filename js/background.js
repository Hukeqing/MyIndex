let len = 16;
let cur = -1;
let dislikeBG = 0;
const dict = [];

function changeBackground() {
    var ans = Math.floor(Math.random() * dict.length);
    while (ans === cur) {
        ans = Math.floor(Math.random() * dict.length);
    }
    console.log(dict[ans])
    document.getElementById("body").style.backgroundImage = "url('basic/background/" + dict[ans] + ".jpg')"
    cur = dict[ans];
}

function initBG() {
    initBGCookie();
    for (let i = 0; i < len; ++i) {
        if ((1 << i) & dislikeBG) continue;
        dict.push(i);
    }
    changeBackground();
}

function addDislike() {
    if (dict.length === 1) {
        window.alert("没有更多的壁纸啦！");
    } else {
        dislikeBG |= 1 << cur;
        setCookie('dislikeBG', dislikeBG);
        var index = dict.indexOf(cur)
        dict.splice(index, 1);
        cur = -1;
        changeBackground();
        console.log(dict);
    }
}

function downloadImg() {
    window.open('basic/background/' + cur + '.jpg');
}

function initBGCookie() {
    dislikeBG = getCookie('dislikeBG');
    setCookie('dislikeBG', dislikeBG);
}
