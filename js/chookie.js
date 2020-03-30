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

function clearCookie() {
    if (confirm("确定清除您在本网页上的所有操作吗？")) {
        var data = document.cookie.split(';');
        for (var item in data) {
            deleteCookie(data[item].split('=')[0]);
        }
        window.location.reload();
    }
}

function init_Cookie() {
    if (getCookie('version') != version) {
        logNewVersion();
        setCookie('version', version);
    }
}
