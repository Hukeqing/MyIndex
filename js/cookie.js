version = "2.0";

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
    window.alert("版本：2.0，更新公告：\n增加了完整的偏好设置系统，现在可以根据自己的需要个性化本主页啦~\n所有的设置数据会被保存在本地，数据仅保留7天，超过7天后会被自动删除。")
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
