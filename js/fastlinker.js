var fastlinkerNum = 0;
var fastlinkerData = new Array();
var fastlinkerList;

function createFastlinker(name, urls, iconName) {
    var object = {};
    object.name = name;
    object.urls = urls;
    object.iconName = iconName;
    return object;
}

function initFastlinkerCookie() {
    fastlinkerList = getCookie('FL');
    if (fastlinkerList === "") {
        fastlinkerList = new Array();
        for (var i = 0; i < 22; ++i)
            fastlinkerList.push(i);
        setCookie('FL', fastlinkerList.join(','));
    } else {
        setCookie('FL', fastlinkerList);
        fastlinkerList = fastlinkerList.split(',');
        for (var i = 0; i < fastlinkerList.length; ++i) {
            fastlinkerList[i] = parseInt(fastlinkerList[i]);
        }
    }
}

function fastlinker_data_init() {
    fastlinkerData.push(createFastlinker('Baidu', 'https://www.baidu.com', 'baidu'));
    fastlinkerData.push(createFastlinker('Bilibili', 'https://www.bilibili.com', 'bilibili'));
    fastlinkerData.push(createFastlinker('GitHub', 'https://github.com', 'github'));
    fastlinkerData.push(createFastlinker('百度翻译', 'https://fanyi.baidu.com/?aldtype=16047#auto/zh', 'baidutranslate'));
    fastlinkerData.push(createFastlinker('iCloud', 'http://icloud.com/', 'icloud'));
    fastlinkerData.push(createFastlinker('Apple', 'https://www.apple.com', 'apple'));
    fastlinkerData.push(createFastlinker('Google', 'https://www.google.com', 'google'));
    fastlinkerData.push(createFastlinker('牛客', 'https://www.nowcoder.com', 'nowcoder'));
    fastlinkerData.push(createFastlinker('CSDN', 'https://www.csdn.net', 'csdn'));
    fastlinkerData.push(createFastlinker('菜鸟教程', 'https://www.runoob.com', 'runoob'));
    fastlinkerData.push(createFastlinker('HDUOJ', 'http://acm.hdu.edu.cn', 'hduoj'));
    fastlinkerData.push(createFastlinker('教务网', 'http://124.160.64.163/jwglxt', '124.160.64.163'));
    fastlinkerData.push(createFastlinker('谷歌翻译', 'https://translate.google.com/?source=osdd#auto|auto|', 'googletranslate'));
    fastlinkerData.push(createFastlinker('洛谷', 'https://www.luogu.com.cn/', 'luogu'));
    fastlinkerData.push(createFastlinker('OEIS', 'http://oeis.org/', 'oeis'));
    fastlinkerData.push(createFastlinker('desmos', 'https://www.desmos.com/calculator', 'desmos'));
    fastlinkerData.push(createFastlinker('Youtube', 'https://youtube.com/', 'youtube'));
    fastlinkerData.push(createFastlinker('Twitter', 'https://twitter.com/home/', 'twitter'));
    fastlinkerData.push(createFastlinker('博客园', 'https://www.cnblogs.com', 'cnblogs'));
    fastlinkerData.push(createFastlinker('VJ', 'https://vjudge.net', 'virtualjudge'));
    fastlinkerData.push(createFastlinker('Miku', 'https://tools.imiku.me', 'imiku'));
    fastlinkerData.push(createFastlinker('CF', 'http://codeforces.com', 'codeforces'));
    fastlinkerData.push(createFastlinker('微博', 'https://weibo.com/', 'weibo'));
    fastlinkerData.push(createFastlinker('百度网盘', 'https://pan.baidu.com/', 'baiduwanpan'));
    initFastlinkerCookie();
}

function fastlinker_init() {
    fastlinker_data_init();
    fl = document.getElementById("fastlinker");
    // TODO: add support for new fastlinker
    for (var i = 0; i < fastlinkerList.length; ++i) {
        var cur = fastlinkerList[i];
        fl.innerHTML += '<div><a href="' + fastlinkerData[cur].urls + '" target="_blank"><img src="img/' + fastlinkerData[cur].iconName + '.ico" class="radiuscenter" /><p>' + fastlinkerData[cur].name + '</p></a></div>';
        fastlinkerNum++;
    }
    // for (var i = 0; i < fastlinkerList.length; ++i) {
    //     if (dislikefastlinker.indexOf(i) == -1) continue;
    //     fl.innerHTML += '<div><a href="' + fastlinkerList[i].urls + '" target="_blank"><img src="img/' + fastlinkerList[i].iconName + '.ico" class="radiuscenter" /><p>' + fastlinkerList[i].name + '</p></a></div>';
    //     fastlinkerNum++;
    // }
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
    var str = '<ul id="sortable">';
    for (var i = 0; i < fastlinkerList.length; ++i) {
        var cur = fastlinkerList[i];
        str += '<li class="sort" name="fastlinker_pre" value=' + cur + '><img src="img/' + fastlinkerData[cur].iconName + '.ico" class="radiuscenter" />' + fastlinkerData[cur].name + '</li>';
    }
    str += '<li style="border: 5px solid red; width: 250px; cursor:pointer;" name="fastlinker_pre" value=-1>————以上的图标将会显示————<ul>'
    str += '</ul>'
    for (var i = 0; i < fastlinkerData.length; ++i) {
        if (fastlinkerList.indexOf(i) != -1) continue;
        str += '<li class="sort" name="fastlinker_pre" value=' + i + '><img src="img/' + fastlinkerData[i].iconName + '.ico" class="radiuscenter" />' + fastlinkerData[i].name + '</li>';
    }
    html_in.innerHTML = str;
}

function save_fastlinker_preference() {
    var check = document.getElementsByName("fastlinker_pre");
    fastlinkerList = new Array();
    for (var i = 0; i < check.length; ++i) {
        if (check[i].value == -1) break;
        fastlinkerList.push(check[i].value);
    }
    console.log(fastlinkerList);
    setCookie('FL', fastlinkerList.join(','));
    return true;
}
