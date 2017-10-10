function getConfigOnService(a) {
    if (null == fileBuffer.config) {
        var d = new XMLHttpRequest;
        d.open("GET", backGroundJson.URL + "GetConfig", !0);
        d.onreadystatechange = function () {
            if (4 == d.readyState) if (200 == d.status) {
                var b = d.responseText, b = b.substring(b.indexOf("{")), b = JSON.parse(b);
                fileBuffer.config = b.value;
                a(fileBuffer.config)
            } else a({})
        };
        d.send()
    } else a(fileBuffer.config)
}

function getBackgroundValue(a, d, b) {
    b(backGroundJson[a.key])
}

function setBackgroundValue(a, d, b) {
    "CurrentOrder" == a.key && null != a.value && (a.value.tabId = d.tab.id);
    backGroundJson[a.key] = a.value;
    null != b && b()
}

function getTabMsg(a, d, b) {
    null == a.tabId ? b(tabBuffer[d.tab.id]) : "all" == a.tabId ? b(tabBuffer) : b(tabBuffer[a.tabId])
}

function setTabMsg(a, d, b) {
    var c = a.tabId;
    null == c && (c = d.tab.id);
    tabBuffer[c] = {};
    tabBuffer[c].OrderMsg = a.value;
    b(tabBuffer)
}

function removeTabMsg(a, d, b) {
    null != a.tabId ? delete tabBuffer[a.tabId] : delete tabBuffer[d.tab.id]
}

function createTab(a, d, b) {
    "updateTab" == a.type ? chrome.tabs.getSelected(function (c) {
        chrome.tabs.update(c.id, {url: a.Url, selected: a.selected, pinned: a.pinned}, function (a) {
            b(a.id)
        })
    }) : chrome.tabs.create({url: a.Url, selected: a.selected, pinned: a.pinned}, function (a) {
        b(a.id)
    })
}

function sendMsg(a, d, b) {
    var c = new XMLHttpRequest;
    d = a.sendType;
    null == d && (d = "GET");
    c.open(d, a.URL, !0);
    c.onreadystatechange = function () {
        4 == c.readyState && 200 == c.status && null != b && b(c.responseText)
    };
    "GET" == d ? c.send() : c.send(a.sendData)
}

function executeScript(a, d, b) {
    a = decodeURIComponent(a.inputScript);
    chrome.tabs.executeScript(d.tab.id, {code: a});
    b({})
}

function executeFileScript(a, d, b) {
    chrome.tabs.executeScript(d.tab.id, {file: "base/jquery-1.12.4.min.js", allFrames: !0}, function (a) {
    });
    chrome.tabs.executeScript(d.tab.id, {file: a.file, allFrames: !0});
    b({})
}

function getCookies(a, d, b) {
    var c = {};
    chrome.cookies || (chrome.cookies = chrome.extension.cookies);
    c = a;
    c.hasSendBack = !1;
    var e = 0;
    if (null != c.name && 0 < c.name.length) for (a = 0; a < c.name.length; a++) chrome.cookies.get({
        url: c.cUrl,
        name: c.name[a]
    }, function (a) {
        e++;
        null == a || null == a.value ? 1 != c.hasSendBack && (c.hasSendBack = !0, b(c)) : (console.log(a), c[a.name] = a.value, e >= c.name.length && 1 != c.hasSendBack && b(c))
    }); else chrome.cookies.getAll({url: c.cUrl}, function (a) {
        b(a)
    })
}

function updateTab(a, d, b) {
    var c = a.tabId;
    if (null == c || "this" == c) c = d.tab.id;
    "orderTab" == c && (c = backGroundJson.orderTabId);
    chrome.tabs.update(Number(c), a.value, b)
}

function addListenTab(a, d, b) {
    b = a.tabId;
    "this" == a.tabId && (b = d.tab.id);
    listenTab[b] = a.value;
    tabBuffer[b].listen = a.value
}

function removeListenTab(a, d, b) {
    delete listenTab[a.tabId];
    delete tabBuffer[a.tabId].listen;
    delete tabBuffer[a.tabId].changeInfo;
    delete tabBuffer[a.tabId].urlList;
    b()
}

function getFileOnService(a, d, b) {
    var c = new XMLHttpRequest;
    c.open("GET", backGroundJson.URL + a.serviceFile, !0);
    c.onreadystatechange = function () {
        4 == c.readyState && (200 == c.status ? b({
            type: "getServiceFile",
            file: encodeURIComponent(c.responseText)
        }) : sendRequest({error: c.status}))
    };
    c.send()
}

function setIcon(a, d, b) {
    chrome.browserAction.setIcon({path: a.iconPath})
}

function closeTab(a, d, b) {
    null == a.tabId || "this" == a.tabId ? chrome.tabs.remove(d.tab.id, b) : chrome.tabs.remove(Number(a.tabId), b)
}

chrome.tabs.onUpdated.addListener(function (a, d, b) {
    if (null != tabBuffer[b.id] && (console.log(d.url + "------------"), console.log(b.url), console.log(b.id + "------------" + a), null == tabBuffer[b.id].urlList && (tabBuffer[b.id].urlList = []), null == tabBuffer[b.id].changeList && (tabBuffer[b.id].changeList = []), tabBuffer[b.id].changeList[tabBuffer[b.id].changeList.length] = d.url, tabBuffer[b.id].urlList[tabBuffer[b.id].urlList.length] = b.url, null != listenTab[b.id] && null != tabBuffer[b.id].listen)) {
        console.log("\u76d1\u542c\u5230\u9875\u9762\u53d8\u66f4\u6d88\u606f:" +
            b.id + "------" + b.url);
        var c = tabBuffer[b.id].listen.dealTab;
        "orderTab" == c && (c = backGroundJson.orderTabId);
        chrome.tabs.sendRequest(c, {type: "listenedUrl", value: tabBuffer[b.id], tabId: b.id}, function (a) {
        })
    }
    "loading" == b.status && (b.load = 1, a = b.url, d = a.indexOf("?"), -1 != d && (a = a.substring(0, d)), chrome.tabs.insertCSS(c, {
        file: "base/style.css",
        allFrames: !0
    }, function (a) {
    }), chrome.tabs.executeScript(c, {file: "base/jquery-1.12.4.min.js", allFrames: !0}, function (a) {
    }), chrome.tabs.executeScript(c, {file: "base/xiaodian.user.js", allFrames: !0},
        function (a) {
        }), chrome.tabs.executeScript(c, {file: "base/base64.js", allFrames: !0}, function (a) {
    }), addJSFiles(b.url, b.id))
});
var waitForInsert = {};

function addJsFiles(a, d, b) {
    console.log("addJsFiles:" + a);
    var c = a;
    if (0 < a.indexOf("mms.yangkeduo.com") || 0 < a.indexOf("mms.pinduoduo.com")) {
        (b = c.indexOf("#"), -1 != b && (c = c.substring(b)));
    }
    else {
        (b = c.indexOf("?"), -1 != b && (c = c.substring(0, b)));
    }

    if (null != fileBuffer[c])
        1 != waitForInsert[c] && (waitForInsert[c] = !0, executePage(fileBuffer[c], d), waitForInsert[c] = !1);
    else {
        var e = new XMLHttpRequest;
        e.open("GET", backGroundJson.URL + "GetJsFiles?url=" + encodeURIComponent(a), !0);
        e.onreadystatechange = function () {
            if (4 == e.readyState && 200 == e.status && 1 != waitForInsert[c]) {
                waitForInsert[c] = !0;
                var a = JSON.parse(e.responseText);
                executePage(a, d);
                fileBuffer[c] = a;
                waitForInsert[c] = !1
            }
        };
        e.send()
    }
}

function addJSFiles(a, d, b) {
    console.log("addJSFiles:" + a);
    var c = a;
    if (0 < a.indexOf("mms.yangkeduo.com") || 0 < a.indexOf("mms.pinduoduo.com"))
        (b = c.indexOf("#"), -1 != b && (c = c.substring(b)));
    else
        (b = c.indexOf("?"), -1 != b && (c = c.substring(0, b)));

    if (null != fileBuffer[c])
        1 != waitForInsert[c] && (waitForInsert[c] = !0, executePageDirect(fileBuffer[c], d), waitForInsert[c] = !1);
    else {
        if (0 <= a.indexOf("http://mms.pinduoduo.com/Pdd.html#/orders/search/index")) {
            var script1 = scriptPinDuoDuoSample;
            console.log("scriptPinDuoDuoSample");
            executePageDirect(script1, d);
            fileBuffer[c] = script1;
            waitForInsert[c] = !1;
        }

        if (0 <= a.indexOf("http://mms.pinduoduo.com/Pdd.html#/orders/order_detail/index")) {
            var script2 = scriptPinDuoDuoDetail;
            console.log("scriptPinDuoDuoDetail");
            executePageDirect(script2, d);
            fileBuffer[c] = script2;
            waitForInsert[c] = !1;
        }

        if (0 <= a.indexOf("https://item.taobao.com/item.htm")) {
            var script3 = scriptTaobao;
            console.log("scriptTaobao");
            executePageDirect(script3, d);
            fileBuffer[c] = script3;
            waitForInsert[c] = !1;
        }

        if(0 <= a.indexOf("https://buy.taobao.com/auction/buy_now.jhtml")){
            var script4 = scriptTaobaoBuy;
            console.log("scriptTaobaoBuy");
            executePageDirect(script4, d);
            fileBuffer[c] = script4;
            waitForInsert[c] = !1;
        }
    }
}


function executePage(a, d) {
    for (var b = 0; b < a.jsFile.length; b++) {
        var c = decodeURIComponent(a.jsFile[b]);
        console.log(c);
        chrome.tabs.executeScript(d, {code: c, allFrames: !0}, function (a) {
        })
    }
    for (b = 0; b < a.cssFile.length; b++) {
        c = decodeURIComponent(a.cssFile[b]);
        chrome.tabs.insertCSS(d, {code: c, allFrames: !0}, function (a) {
        });
    }
}

function executePageDirect(a,d){
    console.log(a);
    chrome.tabs.executeScript(d, {code: a, allFrames: !0}, function (a) {
    });
}


function setOrder(a, d, b) {
    d = backGroundJson.CurrentOrder;
    a.orderid = d.id;
    chrome.tabs.sendRequest(d.tabId, a, b)
};