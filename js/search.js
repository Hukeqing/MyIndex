let defaultSel = 1;
let dislikeSearch = 0;
let search_unextend = 0;

let SearchEg = [];
let curSearch = 0;

function createSearchEg(name, urls, se) {
    let object = {};
    object.name = name;
    object.urls = urls;
    object.search_engine = se;
    return object;
}

function search_data_init() {
    initSearchCookie();
    SearchEg.push(createSearchEg("Google", "https://www.google.com/search?q=", "Search in Google"));
    SearchEg.push(createSearchEg("百度", "https://www.baidu.com/#ie={inputEncoding}&wd=", "Search in Baidu"));
    SearchEg.push(createSearchEg("谷歌翻译", "https://translate.google.com/?source=osdd#auto|auto|", "Google Translate"));
    SearchEg.push(createSearchEg("百度翻译", "https://fanyi.baidu.com/#auto/auto/", "Baidu Translate"));
    SearchEg.push(createSearchEg("GitHub", "https://github.com/search?q=", "Search in GitHub"));
    SearchEg.push(createSearchEg("BiliBili", "https://search.bilibili.com/all?keyword=", "哔哩哔哩 (゜-゜)つロ 干杯~"));
    SearchEg.push(createSearchEg("维基百科", "https://zh.wikipedia.org/wiki/", "维基百科-中文"));
    SearchEg.push(createSearchEg("Wikipedia", "https://en.wikipedia.org/wiki/", "Wikipedia-English"));
    SearchEg.push(createSearchEg("CSDN", "https://so.csdn.net/so/search/s.do?q=", "Search in CSDN"));
    SearchEg.push(createSearchEg("CPP", "https://zh.cppreference.com/mwiki/index.php?search=", "Search in CPP"));
    SearchEg.push(createSearchEg("OEIS", "http://oeis.org/search?q=", "1,2,3,6,11,23,47,106,235"));
}

function search_init() {
    search_data_init();
    curSearch = defaultSel;
    But = document.getElementById("button");
    Inp = document.getElementById("input");
    Sel = document.getElementById("selects");

    for (var i = 0; i < SearchEg.length; ++i) {
        if ((1 << i) & dislikeSearch) continue;
        Sel.innerHTML += '<option value="' + i + '">' + SearchEg[i].name + '</option>'
    }
    Sel.value = defaultSel;
    changes();
    if (search_unextend === 1) {
        document.getElementById('search-div').style.width = '400px';
        document.getElementById('selects').style.width = '100px';
        document.getElementById('input').style.width = '240px';
    }
}

function searchs() {
    But.href = SearchEg[curSearch].urls + encodeURIComponent(Inp.value);
    Inp.value = "";
    Sel.value = defaultSel;
    curSearch = defaultSel;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}

function changes() {
    curSearch = Sel.value;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}

function initSearchCookie() {
    dislikeSearch = getCookie('dislikeSe');
    defaultSel = getCookie('defaultSel');
    search_unextend = getCookie('search_unextend');
    if (dislikeSearch === "") dislikeSearch = 0;
    else setCookie('dislikeSe', dislikeSearch);
    if (defaultSel === "") defaultSel = 1;
    else setCookie('defaultSel', defaultSel);
    if (search_unextend === "") search_unextend = 0;
    else setCookie('search_unextend', search_unextend);
}

function search_preference_init() {
    let i;
    search_data_init();
    let html_in = document.getElementById("search_preference");
    let str = '';
    for (i = 0; i < SearchEg.length; ++i) {
        str += '<label><input type="checkbox" name="search_pre" value="' + i + '" ' + (((1 << i) & dislikeSearch) ? '' : 'checked') + ' />' + SearchEg[i].name + '</label><br>';
    }
    str += '<hr>默认搜索引擎：<select id="defaultSel">';
    for (i = 0; i < SearchEg.length; ++i) {
        str += '<option value="' + i + '">' + SearchEg[i].name + '</option>'
    }
    str += '</select><br><label><input type="checkbox" id="search_unextend" ' + (search_unextend === 1 ? 'checked' : '') + '>搜索框不再缩放</label>';
    html_in.innerHTML = str;
    document.getElementById("defaultSel").value = defaultSel;
}

function save_search_preference() {
    var check = document.getElementsByName("search_pre");
    dislikeSearch = 0;
    for (var i = 0; i < check.length; ++i) {
        if (!check[i].checked) {
            dislikeSearch += (1 << i);
        }
    }
    defaultSel = parseInt(document.getElementById("defaultSel").value);
    if ((1 << defaultSel) & dislikeSearch) {
        window.alert('哎呀呀，你选择的默认搜索引擎却不在勾选的列表里啊');
        return false;
    }
    setCookie('dislikeSe', dislikeSearch);
    setCookie('defaultSel', defaultSel);
    setCookie('search_unextend', document.getElementById('search_unextend').checked ? 1 : 0);
    return true;
}
