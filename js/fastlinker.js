var fastlinkerNum = 0;
var fastlinkerList = new Array();
var dislikefastlinker;

function createFastlinker(name, urls, iconName) {
    var object = {};
    object.name = name;
    object.urls = urls;
    object.iconName = iconName;
    return object;
}

function initFastlinkerCookie() {
    dislikefastlinker = getCookie('dislikeFa');
    if (dislikefastlinker === "") {
        dislikefastlinker = new Array();
        for (var i = 22; i < fastlinkerList.length; ++i)
            dislikefastlinker.push(i);
        setCookie('dislikeFa', dislikefastlinker.join(','));
    } else {
        setCookie('dislikeFa', dislikefastlinker);
        dislikefastlinker = dislikefastlinker.split(',');
    }
}

function fastlinker_data_init() {
    fastlinkerList.push(createFastlinker('Baidu', 'https://www.baidu.com', 'baidu'));
    fastlinkerList.push(createFastlinker('Bilibili', 'https://www.bilibili.com', 'bilibili'));
    fastlinkerList.push(createFastlinker('GitHub', 'https://github.com', 'github'));
    fastlinkerList.push(createFastlinker('百度翻译', 'https://fanyi.baidu.com/?aldtype=16047#auto/zh', 'baidutranslate'));
    fastlinkerList.push(createFastlinker('iCloud', 'http://icloud.com/', 'icloud'));
    fastlinkerList.push(createFastlinker('Apple', 'https://www.apple.com', 'apple'));
    fastlinkerList.push(createFastlinker('Google', 'https://www.google.com', 'google'));
    fastlinkerList.push(createFastlinker('牛客', 'https://www.nowcoder.com', 'nowcoder'));
    fastlinkerList.push(createFastlinker('CSDN', 'https://www.csdn.net', 'csdn'));
    fastlinkerList.push(createFastlinker('菜鸟教程', 'https://www.runoob.com', 'runoob'));
    fastlinkerList.push(createFastlinker('HDUOJ', 'http://acm.hdu.edu.cn', 'hduoj'));
    fastlinkerList.push(createFastlinker('教务网', 'http://124.160.64.163/jwglxt', '124.160.64.163'));
    fastlinkerList.push(createFastlinker('谷歌翻译', 'https://translate.google.com/?source=osdd#auto|auto|', 'googletranslate'));
    fastlinkerList.push(createFastlinker('洛谷', 'https://www.luogu.com.cn/', 'luogu'));
    fastlinkerList.push(createFastlinker('OEIS', 'http://oeis.org/', 'oeis'));
    fastlinkerList.push(createFastlinker('desmos', 'https://www.desmos.com/calculator', 'desmos'));
    fastlinkerList.push(createFastlinker('Youtube', 'https://youtube.com/', 'youtube'));
    fastlinkerList.push(createFastlinker('Twitter', 'https://twitter.com/home/', 'twitter'));
    fastlinkerList.push(createFastlinker('博客园', 'https://www.cnblogs.com', 'cnblogs'));
    fastlinkerList.push(createFastlinker('VJ', 'https://vjudge.net', 'virtualjudge'));
    fastlinkerList.push(createFastlinker('Miku', 'https://tools.imiku.me', 'imiku'));
    fastlinkerList.push(createFastlinker('CF', 'http://codeforces.com', 'codeforces'));
    fastlinkerList.push(createFastlinker('微博', 'https://weibo.com/', 'weibo'));
    initFastlinkerCookie();
}

function fastlinker_init() {
    fastlinker_data_init();
    fl = document.getElementById("fastlinker");
    for (var i = 0; i < fastlinkerList.length; ++i) {
        if (dislikefastlinker.indexOf(i) != -1) continue;
        fl.innerHTML += '<div><a href="' + fastlinkerList[i].urls + '" target="_blank"><img src="img/' + fastlinkerList[i].iconName + '.ico" class="radiuscenter" /><p>' + fastlinkerList[i].name + '</p></a></div>';
        fastlinkerNum++;
    }
    startresize();
}

function startresize() {
    var minwidth = 70;
    var maxmum = Math.floor(document.body.clientHeight / 90);
    var curwidth = Math.ceil(fastlinkerNum / maxmum) * minwidth;
    document.getElementById('fastlinker').style.width = curwidth.toString() + "px";
}

function fastlinker_preference_init() {
    fastlinker_data_init();
    var html_in = document.getElementById("fastlinker_preference");
    var str = '';
    for (var i = 0; i < fastlinkerList.length; ++i) {
        str += '<label><input type="checkbox" name="fastlinker_pre" value="' + i + '" ' + (dislikefastlinker.indexOf(i.toString()) == -1 ? 'checked' : '') + ' />' + fastlinkerList[i].name + '</label><br>';
    }
    html_in.innerHTML = str;
}

function save_fastlinker_preference() {
    var check = document.getElementsByName("fastlinker_pre");
    dislikefastlinker = new Array();
    for (var i = 0; i < check.length; ++i) {
        if (!check[i].checked) {
            dislikefastlinker.push(i);
        }
    }
    console.log(dislikefastlinker);
    setCookie('dislikeFa', dislikefastlinker.join(','));
    return true;
}
