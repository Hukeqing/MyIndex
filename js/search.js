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