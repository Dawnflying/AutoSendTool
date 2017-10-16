var backGroundJson = {URL: "http://www.feixiongzhushou.com:8088/main/plugin/", version: "1.6.0"}, fileBuffer = {}, tabBuffer = {},
    listenTab = {};
chrome.extension.onRequest.addListener(function (a, c, b) {
    "sendMsg" == a.type ?
        sendMsg(a, c, b) :
        "createTab" == a.type ? createTab(a, c, b) :
            "updateTab" == a.type ? createTab(a, c, b) :
                "getConfig" == a.type ? getConfigOnService(b) :
                    "getBackgroundValue" == a.type ? getBackgroundValue(a, c, b) :
                        "setBackgroundValue" == a.type ? setBackgroundValue(a, c, b) :
                            "executeScript" == a.type ? executeScript(a, c, b) :
                                "executeFileScript" == a.type ? executeFileScript(a, c, b) :
                                    "getTabMsg" == a.type ? getTabMsg(a, c, b) :
                                        "setTabMsg" == a.type ? setTabMsg(a, c, b) :
                                            "removeTabMsg" == a.type ? removeTabMsg(a, c, b) :
                                                "getFileOnService" == a.type ? getFileOnService(a, c, b) :
                                                    "clearFileOnService" == a.type ? fileBuffer = {} :
                                                        "getCookies" == a.type ? getCookies(a, c, b) :
                                                            "addListenTab" == a.type ? addListenTab(a, c, b) :
                                                                "removeListenTab" == a.type ? removeListenTab(a, c, b) :
                                                                    "updateTab" == a.type ? updateTab(a, c, b) :
                                                                        "closeTab" == a.type ? closeTab(a, c, b) :
                                                                            "setIcon" == a.type ? setIcon(a, c, b) :
                                                                                "getThisTab" == a.type ? b(c) :
                                                                                    "setOrder" == a.type ? setOrder(a, c, b) :
                                                                                        "ajax" == a.type && (c = {
        type: "post",
        url: a.url,
        data: a.data,
        success: function (a) {
            b(a)
        },
        error: function () {
            b("\u8bf7\u6c42\u9519\u8bef")
        }
    },
    a.cookies && (c.headers = {"set-cookie": a.cookies}), $.ajax(c))
});
var requestFilter = {urls: ["http://*/*", "https://*/*"]}, extraInfoSpec = ["requestHeaders", "blocking"],
    handler = function (a) {
        a = a.requestHeaders;
        for (var c = {}, b = 0, d = a.length; b < d; ++b)
            if ("User-Agent" == a[b].name) {
                a[b].value = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0";
                break
            }
        c.requestHeaders = a;
        return c
    };

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);