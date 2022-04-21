// ==UserScript==
// @name         南通大学校园网快速自动登录脚本
// @namespace    http://github.com/tampermonkey_ntu_faskauto_login
// @version      0.1
// @description  try to take over the world!
// @author       inventor
// @match        http://210.29.79.141/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=79.141
// @grant        unsafeWindow
// ==/UserScript==

var username = ""//学号
var password = ""//密码
var port = 0;//0校园网，1中国移动，2中国电信，3中国联通

(function() {
    var _port_text = "input[value='']";
    switch (port)
    {
        case 1:
            _port_text = "input[value='@cmcc']";
            break;
        case 2:
            _port_text = "input[value='@telecom']"
            break;
        case 3:
            _port_text = "input[value='@unicom']"
            break;
    }
    window.addEventListener('load', function() {
    $(_port_text).attr('checked',true);
    $("input[name='DDDDD']").val(username);
    $("input[name='upass']").val(password);
    $("input[name='0MKKey']").click();
    }, false);
})();
