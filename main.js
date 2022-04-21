// ==UserScript==
// @name         南通大学校园网快速自动登录脚本
// @namespace    https://github.com/wobisheng/tampermonkey_ntu_faskauto_login
// @version      1.0
// @description  南通大学的校园网自动登录脚本
// @description  try to take over the world!
// @author       inventor
// @match        http://210.29.79.141/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=79.141
// @grant        unsafeWindow
// @license MIT
// ==/UserScript==
 
var username = ""//学号
var password = ""//密码
var port = 0;//0校园网，1中国移动，2中国电信，3中国联通
 
(function() {
    var _port_text = ["input[value='']","input[value='@cmcc']","input[value='@telecom']","input[value='@unicom']"];
    window.addEventListener('load', function() {
    $(_port_text[port]).attr('checked',true);
    $("input[name='DDDDD']").val(username);
    $("input[name='upass']").val(password);
    $("input[name='0MKKey']").click();
    }, false);
})();
