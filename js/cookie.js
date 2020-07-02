version = "2.4";

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = ";expires=" + d.toUTCString();
    document.cookie = name + '=' + value + expires;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

function logNewVersion() {
    // window.alert("版本：2.0，更新公告：\n增加了完整的偏好设置系统，现在可以根据自己的需要个性化本主页啦~\n所有的设置数据会被保存在本地，数据仅保留7天，超过7天后会被自动删除。");
    // window.alert("版本：2.1，更新公告：\n增加了5张星空风格的壁纸\n增加了一个快捷链接：微博\n如果有希望增加的壁纸、链接、搜索方式，可以通过我的邮箱来联系我哦~");
    // window.alert("版本：2.2，更新公告：\n增加了1张神山识的壁纸\n增加了一个快捷链接：百度网盘\n将设置中的快捷链接从列表改成了表格，这样看起来会更加的舒服和整洁\n如果有希望增加的壁纸、链接、搜索方式，可以通过我的邮箱来联系我哦~");
    // window.alert("版本：2.3，更新公告：\n现在允许搜索框不再进行缩放（点击左下角的偏好设置进行设置）\n如果有希望增加的壁纸、链接、搜索方式，可以通过我的邮箱来联系我哦~");
    window.alert("版本：2.4，更新公告：\n很抱歉，清空了您的快捷链接列表喜好，为此，我们增加了可调节位置的偏好设置，目前仅支持于快捷方式中。请前往偏好设置进行修改\n如果有希望增加的壁纸、链接、搜索方式，可以通过我的邮箱来联系我哦~");
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

function clearCookie() {
    if (confirm("确定清除您在本网页上的所有操作吗？")) {
        let data = document.cookie.split(';');
        for (const item in data) {
            deleteCookie(data[item].split('=')[0]);
        }
        window.location.reload();
    }
}

function init_Cookie() {
    if (getCookie('version') !== version) {
        logNewVersion();
        setCookie('version', version);
    }
}
