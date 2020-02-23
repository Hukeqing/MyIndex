var len = 8;
var cur = -1;
function changeBackground() {
    var ans = Math.floor(Math.random() * len);
    while (ans == cur) {
        ans = Math.floor(Math.random() * len);
    }
    console.log(ans)
    document.getElementById("body").style.backgroundImage = "url('basic/background/" + ans + ".jpg')"
    cur = ans;
}
