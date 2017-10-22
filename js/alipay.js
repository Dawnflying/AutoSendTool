!function () {
    function toHanzi(b) {
        try {
            var a = b.replace(/\\/g, "%");
            a = unescape(a);
            return a
        } catch (c) {
            return b
        }
    };


    function a() {
        return "undefined" == typeof $ ? (setTimeout(a, 500), void 0) : ($("body").hasClass("loaded") || ($("body").addClass("loaded"), console.clear(), b()), void 0)
    }

    function b() {
        if (0 == $("#J_authSubmit").length && 0 == $("#J_Order").length) return setTimeout(b, 500), void 0;
        var a = $(".order-title").text().trim();
        0 != a.indexOf("合并") && chrome.extension.sendRequest({
            type: "getBackgroundValue",
            key: "CurrentOrder"
        }, function (a) {
            console.log("getBackgroundValue:");console.log(a);
            var b, e;
            null != a && (b = window.innerHeight / 2, e = (window.innerWidth - 380) / 2, $("body").append('<div style="position: fixed;top: ' + b + "px;left: " + e + 'px; z-index: 9999999;border: 1px solid #0c66ec;padding: 10px;background-color: #aacff4;font-size: 16px;font-weight: bold;">正在进行采购单号备注，请不要手工关闭本页面...<br>付款统一到阿里或淘宝订单列表批量合并付款</div>'), a.orderUrl.indexOf("1688.com") > 0 ? c(a) : d(a))
        })
    }

    function c(a) {
        var b = "https://trade.1688.com/order/buyer_order_list.htm";
        chrome.extension.sendRequest({type: "getCookies", cUrl: b, name: []}, function (c) {
            console.log("getCookies:");
            console.log(c);
            var i, j, d = "", f = "", g = "";
            for (i = 0; i < c.length; i++) d += c[i].name + "=" + c[i].value + "; ", "__cn_logon_id__" == c[i].name && (f = "ali-" + c[i].value), "_csrf_token" == c[i].name && (g = c[i].value);
            return f = decodeURIComponent(f), f = toHanzi(f), j = getSubstring(location.href + "&", "BuyOrderId=", "&"), "" != j ? (h(d, g, j, a.id + "," + a.shop), e(a, j, f), void 0) : ($.ajax({
                headers: {"set-cookie": d},
                url: b,
                success: function (b) {
                    console.log("buyer_order_list:");console.log(b);
                    var c = getSubstring(b, '<input class="tradeId" type="hidden" value="', '"', !0);
                    return c.length < 10 ? (alert("采购单号获取失败，请刷新本页面试下"), void 0) : (h(d, g, c, a.id + "," + a.shop), e(a, c, f), void 0)
                },
                error: function () {
                    location.href = "https://trade.1688.com/order/buyer_order_list.htm?BuyOrderId=1&referer=" + encodeURI(location.href)
                }
            }), void 0)
        })
    }

    function d(a) {
        var b = "https://buyertrade.taobao.com/trade/itemlist/list_bought_items.htm";
        chrome.extension.sendRequest({type: "getCookies", cUrl: b, name: []}, function (c) {
            console.log("getCookies:");
            console.log(c);
            var j, d = "", f = "", h = "", i = "unb";
            for (j = 0; j < c.length; j++) d += c[j].name + "=" + c[j].value + "; ", "tracknick" == c[j].name && (f = c[j].value), "_tb_token_" == c[j].name && (h = c[j].value), "unb" == c[j].name && (i = c[j].value);
            f = decodeURIComponent(f), f = toHanzi(f), $.ajax({
                headers: {"set-cookie": d},
                url: b,
                success: function (b) {
                    console.log("list_bought_items:");console.log(b);
                    var j, k, c = getSubstring(b, '<noscript id="data">', "</noscript>");
                    return "" == c && (c = getSubstring(b, "var data = JSON.parse('", "');"), c = c.replace(/\\"/g, '"'), c = c.replace(/\\\//g, "/"), c = c.replace(/\\\\/g, "\\"), c = c.replace(/\\'/g, "'")), "" == c ? (alert("无法获取采购单号，请手工备注"), void 0) : (j = JSON.parse(c), k = j.mainOrders[0].id, $.ajaxSetup({async: !1}), g(d, h, i, k, a.id + "," + a.shop), $.ajaxSetup({async: !0}), e(a, k, f), void 0)
                },
                error: function () {
                    alert("采购单号获取失败，请检查淘宝是否登录过期，然后刷新本页面")
                }
            })
        })
    }

    function e(a, b, c) {
        var e, g, h, i, d = {
            orderId: a.id,
            buyOrderId: b,
            buyAccount: c,
            buymoney: $(".order-real-amount em").text(),
            staff: a.staff
        };
        return chrome.extension.sendRequest({
            type: "ajax2",
            options: {url: serviceHost + "/main/main/saveorderinfo", data: d}
        }, function () {
        }), "pdd" == a.platform ? (e = "http://mms.pinduoduo.com/Pdd.html#orders/order_detail/index?BuyOrderId=" + b + "&comment=" + encodeURI(b + "(" + c + ")") + "&sn=" + a.id, location.href = e, void 0) : ("mgj" == a.platform && (url = "http://order.xiaodian.com/pc/trade/order/operate/updatesellercomment", g = '{"shopOrderId":' + a.id + ',"comment":"' + b + "(" + c + ')"}', chrome.extension.sendRequest({
            type: "ajax2",
            options: {url: url, data: {data: g}}
        }, function (a) {
            a.text.indexOf("SUCCESS") > 0 ? f() : alert("蘑菇街采购单号备注失败，请手工备注")
        })), h = "", i = {
            type: "setOrder",
            orderid: a.id,
            buyOrderId: b,
            buyAccount: c,
            buyShop: h,
            comment: b + "(" + c + ")",
            buyMoney: $(".order-real-amount em").text()
        }, chrome.extension.sendRequest(i, function (a) {
            console.log(a);
            a ? f() : alert("商家备注设置失败")
        }), void 0)
    }

    function f() {
        chrome.extension.sendRequest({type: "setBackgroundValue", key: "CurrentOrder", value: null}, function () {
            window.close()
        })
    }

    function g(a, b, c, d, e) {
        var f = "https://trade.taobao.com/trade/memo/update_buy_memo.htm ", g = {};
        g["_tb_token_"] = b, g["event_submit_do_query"] = 1, g["action"] = "memo/UpdateBuyMemoAction", g["user_type"] = 0, g["pageNum"] = 1, g["auctionTitle"] = "", g["dateBegin"] = "", g["dateEnd"] = "", g["commentStatus"] = "", g["sellerNick"] = "", g["auctionStatus"] = "", g["returnUrl"] = "", g["logisticsService"] = "", g["isArchive"] = "false", g["clickMore"] = "", g["queryBizType"] = "", g["visibility"] = "true", g["biz_order_id"] = d, g["buyer_id"] = c, g["flag"] = "3", g["memo"] = e, chrome.extension.sendRequest({
            type: "ajax",
            cookies: a,
            url: f,
            data: g
        }, function () {
        })
    }

    function h(a, b, c, d) {
        var e, f;
        $.ajaxSetup({async: !1}), "function" == typeof hex_md5 && (e = "https://trade.1688.com/order/ajax_order_memo.do?_input_charset=UTF-8&_input_charset=UTF-8", f = {}, f["_csrf_token"] = hex_md5(b), f["tradeId"] = c, f["remarkIcon"] = "3", f["remark"] = d, chrome.extension.sendRequest({
            type: "ajax",
            cookies: a,
            url: e,
            data: f
        }, function () {
        })), $.ajaxSetup({async: !0})
    }

    a()
}();
