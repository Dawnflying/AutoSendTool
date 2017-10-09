  
var ifLogIn = false;
var nick=null;

chrome.browserAction.onClicked.addListener(function() {
    window.open('main.html', 'testwindow', 'width=700,height=600');
});

$(function () {
    $(".itemDiv").click(function () {
        var action = $(this).attr("data-action");
        var url = $(this).attr("data-url");
        var ico = $(this).attr("data-ico");
        if (url == "") {
            return;
        }
 
        if (ico != null && ico != "") {
            //设置插件图标
            chrome.extension.sendRequest({ type: "setIcon", iconPath: ico });
        }
        if (action == "createTab") {
            var req = { type: "createTab", Url: url, select: "true" };
            chrome.extension.sendRequest(req, function () { });
        }
        else if (action == "updateTab") {
            var req = { type: "updateTab", Url: url, select: "true" };
            chrome.extension.sendRequest(req, function () { });
        }
        else if (action == "pop") {
            chrome.windows.create({ url: URL + "sendWindow.html", left: 800, top: 300, width: 350, height: 250, type: "popup" }, function () {
            });
        }
        window.close();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', function () {
            if (this.getAttribute("model") == "0") {
                chrome.windows.create({ url: URL + "sendWindow.html", left: 800, top: 300, width: 350, height: 250, type: "popup" }, function () {
                });
                window.close();
            } else if (this.getAttribute("model") == "1") {
                chrome.extension.sendRequest({ type: "setBackgroundValue", key: "modelType", value: { model: this.getAttribute("model"), icon: this.getAttribute("icon") } }, function (response) { });

                chrome.extension.sendRequest({ type: "setIcon", iconPath: this.getAttribute("icon") });
                var req = { type: "createTab", Url: "http://trade.taobao.com/trade/itemlist/list_sold_items.htm", select: "true" };
                chrome.extension.sendRequest(req, function () { });
                window.close();
            } else if (this.getAttribute("model") == "2") {
                if (this.className.indexOf("have-receiver itemDiv") != -1) {
                    chrome.extension.sendRequest({ type: "setBackgroundValue", key: "modelType", value: { model: this.getAttribute("model"), icon: this.getAttribute("icon") } }, function (response) { });

                    chrome.extension.sendRequest({ type: "setIcon", iconPath: this.getAttribute("icon") });
                } else {
                    alert("请先设置接收订单数据的旺旺名");
                    chrome.windows.create({ url: URL + "sendWindow.html", left: 800, top: 300, width: 350, height: 250, type: "popup" }, function () {
                    });
                }
                window.close();
            } else if (this.getAttribute("model") == "3") {
                chrome.extension.sendRequest({ type: "setBackgroundValue", key: "modelType", value: { model: this.getAttribute("model"), icon: this.getAttribute("icon") } }, function (response) { });
                chrome.extension.sendRequest({ type: "setIcon", iconPath: this.getAttribute("icon") });
                if (ifLogIn) {
                    authorize(nick, function (auth) {
                        if (auth == "HasReceveAuth") {
                            var req = { type: "createTab", Url: URL + "receiveOrder.jsp", select: "true" };
                            chrome.extension.sendRequest(req, function () { });
                        } else {
                            alert("请先发送订单数据过来再重试");
                        }
                        window.close();
                    });
                } else {
                    window.open("https://trade.taobao.com/trade/itemlist/list_sold_items.htm");
                    window.close();
                }
            } else if (this.getAttribute("model") == "5") {
                chrome.extension.sendRequest({ type: "createTab", select: "true", Url: "http://www.1tsoft.cn/SmartServiceHelper/index.html" });
                window.close();
            }
        });
    }
});
 
function initReciver() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL + "OtherUserToOrder?type=getUserConfig", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                CommonRecerverCallBack(xhr.responseText);
            } else {
                console.log("未登录");
            }
        }
    }
    xhr.send();

}
function CommonRecerverCallBack(data) {
    if (data == "NOT-LOGIN") {
        ifLogIn = false;
        //window.open("https://trade.taobao.com/trade/itemlist/list_sold_items.htm"); 
        //window.close();
    } else if (data != null && data.length > 2) {

        ifLogIn = true;
        var jsonResp = JSON.parse(data);
        var loginer = document.getElementsByClassName("loginer")[0];
        nick = jsonResp.nick;
        loginer.innerText = nick;
        if (jsonResp.receiver != null && jsonResp.receiver != "" && jsonResp.receiver != "null") {
            var rInput = document.getElementById("blue");
            rInput.innerHTML = "给'" + jsonResp.receiver + "'发送订单数据";
            rInput.className = "have-receiver itemDiv ";
            var blueitem1 = document.createElement("div");
            blueitem1.id = "itemrec3";
            blueitem1.className += " itemrec"
            rInput.appendChild(blueitem1);
            var blueitem2 = document.createElement("div");
            blueitem2.id = "itemrec4";
            blueitem2.className += " itemrec"
            rInput.appendChild(blueitem2);
        }
    }
}
