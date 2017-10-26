var orderRows = [], orderIndex = 0, buyAccount = "", orderAddrs = null, hasOpenTmall = !1, newCount = 0;
init();

function init() {
    if ("undefined" == typeof $) setTimeout("init()", 500); else if (!$("body").hasClass("loaded")) {
        $("body").addClass("loaded");
        getAllAddress();
        var b = $("<span class='btn-update' style='border: 1px solid #1E8AB3;background-color: #EAF8FF; padding: 5px; margin-right: 5px;'>更新发货信息</span>"),
            a = $("<span class='btn-blue btn-batch'>启用自动翻15页</span>");
        $("[class^='batch-mod__container']").append(b);
        $("[class^='batch-mod__container']").append(a);
        $(".btn-batch").click(function () {
            var b = parseInt(localStorage.AutoPageCount);
            if (NaN != b && 0 < b) {
                if (0 == confirm("正在翻页，是否停止")) return !1;
                localStorage.AutoPageCount = "0";
                $(".btn-batch").text("启用自动翻15页")
            } else localStorage.AutoPageCount = "15", $(".btn-batch").text("停止自动翻页15"), 0 <= $(".btn-update").text().indexOf("更新完成") && $("button:contains('下一页')")[0].click()
        });
        $("div[class^='simple-pagination-mod__container'] button").click(function () {
            orderIndex = orderRows.length;
            $(".btn-update").removeAttr("disabled").text("更新发货信息");
            setTimeout("getAllAddress()", 1500)
        });
        $(".pagination").on("click", "li", function () {
            orderIndex = orderRows.length;
            $(".btn-update").removeAttr("disabled").text("更新发货信息");
            setTimeout("getAllAddress()", 1500)
        });
        $("button:contains('订单搜索')").click(function () {
            orderIndex = orderRows.length;
            $(".btn-update").removeAttr("disabled").text("更新发货信息");
            setTimeout("getAllAddress()", 1500)
        });
        $("#J_xiaomi_dialog").hide()
    }
}

function getAllAddress() {
    orderRows = $("div[data-id]");
    if (0 == orderRows.length) setTimeout("getAllAddress()", 1E3); else if (-1 == $("[class^='loading-mod__loading']").attr("class").indexOf("hidden")) console.log("加载中..."), setTimeout("getAllAddress()", 1E3); else {
        orderIndex = 0;
        hasOpenTmall = !1;
        newCount = 0;
        orderAddrs = localStorage.orderAddrs ? JSON.parse(localStorage.orderAddrs) : [];
        for (null == orderAddrs && (orderAddrs = []); 3E3 < orderAddrs.length;) orderAddrs.splice(0, 1);
        buyAccount = $(".menu-hd a:first").text();
        getAddress()
    }
}

function getAddress() {
    if (0 == orderRows.length && null == orderAddrs) console.log("首次加载重置"), getAllAddress(); else if (orderIndex >= orderRows.length) {
        $("body").removeClass("loaded");
        $(".btn-update").text("更新完成,发现" + newCount + "条新发货信息)");
        var b = parseInt(localStorage.AutoPageCount);
        NaN != b && 0 < b ? (b--, localStorage.AutoPageCount = b, $("button:contains('下一页')")[0].click(), $(".btn-batch").text("停止自动翻页" + b)) : $(".btn-batch").text("启用自动翻15页")
    } else {
        b = $(orderRows[orderIndex]);
        b.find(".order-addr").remove();
        var a = b.attr("data-id");
        orderIndex++;
        $(".btn-update").text("更新发货信息(" + orderIndex + "/" + orderRows.length + ")");
        for (var d = 0 < b.find("#confirmGood").length, c = orderAddrs.length - 1; 0 <= c; c--) if (orderAddrs[c].OrderId == a) {
            if (!d || "" != orderAddrs[c].ExpressId && "" != orderAddrs[c].ExpressName) {
                showAddress(b, orderAddrs[c]);
                setTimeout("getAddress()", 50);
                return
            }
            orderAddrs.splice(c, 1)
        }
        d = b.find("a:contains('订单详情')").attr("href");
        0 < d.indexOf("dianying.taobao.com") || 0 < b.text().indexOf("虚拟物品") || 0 < b.text().indexOf("自动充值") ? (showAddress(b, {
            OrderId: a,
            BuyAccount: buyAccount,
            Linkman: "虚拟物品",
            Phone: "-",
            Address: "无收获地址",
            ExpressId: "",
            ExpressName: "",
            Price: 0,
            PostFee: 0
        }), setTimeout("getAddress()", 50)) : 0 < d.indexOf("tmall.com") ? getAddressFromTaobaoDetail(b, a) : getAddressFromTmallDetail(b, a)
    }
}

function getAddressFromTaobaoDetail(b, a) {
    var d = b.find("span:contains('(含运费：')").parent().prev().find("strong").text().replace("￥", ""),
        c = b.find("span:contains('(含运费：')").next().text().replace("￥", ""),
        f = b.find("a:contains('订单详情')").attr("href"), e = {
            OrderId: a,
            BuyAccount: buyAccount,
            Linkman: "",
            Phone: "",
            Address: "",
            ExpressId: "",
            ExpressName: "",
            Price: d,
            PostFee: c
        };
    chrome.extension.sendRequest({type: "getCookies", cUrl: f, name: []}, function (a) {
        var json = JSON.stringify(a);
        console.log("taobao json  cookies:" + json);
        for (var c = "", d = 0; d < a.length; d++) c += a[d].name + "=" + a[d].value + "; ";
        console.log("c:" + c);
        $.ajax({
            headers: {"set-cookie": c}, url: f, success: function (a) {
                consle.log("return web:"+a);
                if (-1 == a.indexOf("<title>交易详情")) hasOpenTmall || (hasOpenTmall = !0, window.open(f)), showAddress(b, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[获取失败]",
                    Phone: "",
                    Address: "请进入<a href='" + f + "'>订单详细页</a>输入验证码再重试",
                    ExpressId: "",
                    ExpressName: ""
                }); else {
                    a = decodeUnicode(a);
                    var patt = /address\\":\\"([^，]*)，([^，]*)，([^，]*)/g;
                    var result = "";
                    if ((result = patt.exec(a)) != null) {
                        e.Linkman = result[1];
                        e.Phone = result[2];
                        e.Address = result[3];
                        var patt_logistics_name = /logisticsName\\":\\"([^\\]*)/g;
                        var result_logistics_name = "";
                        if ((result_logistics_name = patt_logistics_name.exec(a)) != null) {
                            console.log("find regex");
                            console.log(result_logistics_name);
                            if (result_logistics_name[1].length >= 2) {
                                e.ExpressName = result_logistics_name[1];
                                var patt_logistics_num = /logisticsNum\\":\\"([^\\]*)/g;
                                var result_logistics_num = "";
                                if ((result_logistics_num = patt_logistics_num.exec(a)) != null) {
                                    e.ExpressId = result_logistics_num[1]
                                }
                                var patt_logistics_date = /date\\":\\"([^\\]*)\\",\\"index\\":3/g;
                                var result_logistics_date = "";
                                if ((result_logistics_date = patt_logistics_date.exec(a)) != null) {
                                    e.ExpressDate = result_logistics_date[1]
                                }
                            }
                        }
                        saveBuyOrder(b, e)
                    } else showAddress(b, {
                        OrderId: "",
                        BuyAccount: "",
                        Linkman: "[解析失败]",
                        Phone: "",
                        Address: "",
                        ExpressId: "",
                        ExpressName: ""
                    })
                }
                setTimeout("getAddress()", 2E3)
            }, error: function () {
                showAddress(b, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[连接失败]",
                    Phone: "",
                    Address: "",
                    ExpressId: "",
                    ExpressName: ""
                });
                setTimeout("getAddress()", 2E3)
            }
        })
    })
}

function toHanzi(b) {
    try {
        var a = b.replace(/\\/g, "%");
        a = unescape(a);
        return a
    } catch (c) {
        return b
    }
};

function getAddressFromTmallDetail(b, a) {
    var d = b.find("span:contains('(含运费：')").parent().prev().find("strong").text().replace("￥", ""),
        c = b.find("span:contains('(含运费：')").next().text().replace("￥", ""),
        f = b.find("a:contains('订单详情')").attr("href"), e = {
            OrderId: a,
            BuyAccount: buyAccount,
            Linkman: "",
            Phone: "",
            Address: "",
            ExpressId: "",
            ExpressName: "",
            Price: d,
            PostFee: c
        };
    chrome.extension.sendRequest({type: "getCookies", cUrl: f, name: []}, function (a) {
        var json = JSON.stringify(a);
        console.log("tmall json cookies:" + json);
        for (var c = "", d = 0; d < a.length; d++) c += a[d].name + "=" + a[d].value + ";	 ";
        console.log("c:" + c);
        $.ajax({
            headers: {"set-cookie": c}, url: f, success: function (a) {
                if (-1 == a.indexOf("<title>交易详情")) hasOpenTmall || (hasOpenTmall = !0, window.open(f)), showAddress(b, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[获取失败]",
                    Phone: "",
                    Address: "请进入订单详细页输入验证码再重试",
                    ExpressId: "",
                    ExpressName: ""
                }); else {
                    var c = getSubstring(a, 'lists":[{"content":[{"text":"', '",', !0).split(",");
                    4 <= c.length && (e.Linkman = c[0].trim(), e.Phone = c[1].trim(), e.Address = c[2].trim());
                    if (0 < b.find("#confirmGood").length || b.text().indexOf(!1)) {
                        var c = getSubstring(a, 'logistic":{	"content":[{	"companyName":"', '","', !0),
                            d = getSubstring(a, '"mailNo":"', '","', !0);
                        a = getSubstring(a, '"卖家发货","time":"', '"', !0);
                        e.ExpressId = d.replace("—", "").trim();
                        e.ExpressName = c.replace("—", "").trim();
                        e.ExpressDate = a
                    }
                    saveBuyOrder(b, e)
                }
                setTimeout("getAddress()", 2E3)
            }, error: function () {
                showAddress(b, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[连接失败]",
                    Phone: "",
                    Address: "",
                    ExpressId: "",
                    ExpressName: ""
                });
                setTimeout("getAddress()", 2E3)
            }
        })
    })
}

function o(a, b, c, d) {
    console.log("exec : o");
    var f, g, e = a.indexOf(b);
    return e > 0 ? (f = a.indexOf(c, e + b.length), g = a.substring(e + b.length, f), d && (g = g.replace(/<[^>]+>/g, "")), $.trim(g)) : ""
}

function express1(a, b) {
    console.log("exec : j");
    var f = a.find("span:contains('(含运费：')").parent().prev().find("strong").text().replace("￥", ""),
        g = a.find("span:contains('(含运费：')").next().text().replace("￥", ""),
        h = a.find("a:contains('订单详情')").attr("href"), j = {
            OrderId: b,
            BuyAccount: c,
            Linkman: "",
            Phone: "",
            Address: "",
            ExpressId: "",
            ExpressName: "",
            Price: f,
            PostFee: g
        };
    chrome.extension.sendRequest({type: "getCookies", cUrl: h, name: []}, function (b) {
        var f, c = "";
        for (f = 0; f < b.length; f++) c += b[f].name + "=" + b[f].value + "; ";
        $.ajax({
            headers: {"set-cookie": c}, url: h, success: function (b) {
                var c, f, g, k, n;
                return -1 == b.indexOf("<title>交易详情") ? (e || (e = !0, window.open(h)), showAddress(a, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[获取失败]",
                    Phone: "",
                    Address: "请进入<a href='" + h + "'>订单详细页</a>输入验证码再重试",
                    ExpressId: "",
                    ExpressName: ""
                }), setTimeout(i, 2e3), void 0) : (c = o(b, '"address":"', '","', !0), "" == c && (c = o(b, 'address\\":\\"', '\\",'), c = toHanzi(c)), "" == c && (c = o(b, '<div class="addr_and_note">', "</dd>", !0), c = c.replace("收货地址", "").replace("：", "").trim()), "" == c && (c = o(b, "收货地址：</td>", "</td>", !0)), c = (c + "").replace(/，/g, ",").replace(/	/g, ""), f = c.replace(/,,/g, ",").split(","), f.length >= 4 ? (j.Linkman = f[0].trim(), j.Phone = f[1].trim(), j.Address = f[2].trim(),
                    chrome.extension.sendRequest({
                        type: "setBackgroundValue",
                        key: "orderAddress",
                        value: d
                    }, function () {
                    }), (a.find("#confirmGood").length > 0 || a.text().indexOf(!1)) && (g = o(b, "<dt>物流公司：</dt>", "</dd>", !0), "" == g && (g = o(b, "物流公司：</td>", "</td>", !0)), "" == g && (g = o(b, '"logisticsName":"', '","', !0)), "" == g && (g = o(b, 'logisticsName\\":\\"', '\\",', !0)), g = toHanzi(g), k = o(b, "<dt>运单号码：</dt>", "</dd>", !0), "" == k && (k = o(b, "运单号：</td>", "</td>", !0)), "" == k && (k = o(b, '"logisticsNum":"', '"', !0)), "" == k && (k = o(b, 'logisticsNum\\":\\"', '\\"', !0)), k = toHanzi(k), n = o(b, 'u53D1\\u8D27\\u65F6\\u95F4:\\",\\"value\\":\\"', '\\"'), "" == n && (n = o(b, "发货时间：</td>", "</td>", !0)), "" == n && (n = o(b, '发货时间:","value":"', '"', !0)), j.ExpressId = k.replace("—", "").trim(), j.ExpressName = g.replace("—", "").trim(), j.ExpressDate = n), m(a, j), setTimeout(getAddress, 2e3), void 0) : (showAddress(a, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[解析失败]",
                    Phone: "",
                    Address: "",
                    ExpressId: "",
                    ExpressName: ""
                }), setTimeout(getAddress, 2e3), void 0))
            }, error: function () {
                l(a, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[连接失败]",
                    Phone: "",
                    Address: "请进入<a href='" + h + "'>订单详细页</a>查看是否需要验证",
                    ExpressId: "",
                    ExpressName: ""
                }), setTimeout(getAddress, 2e3)
            }
        })
    })
}

function express2(a, b) {
    console.log("exec : k");
    var d = a.find("span:contains('(含运费：')").parent().prev().find("strong").text().replace("￥", ""),
        f = a.find("span:contains('(含运费：')").next().text().replace("￥", ""),
        g = a.find("a:contains('订单详情')").attr("href"), h = {
            OrderId: b,
            BuyAccount: c,
            Linkman: "",
            Phone: "",
            Address: "",
            ExpressId: "",
            ExpressName: "",
            Price: d,
            PostFee: f
        };
    chrome.extension.sendRequest({type: "getCookies", cUrl: g, name: []}, function (b) {
        var d, c = "";
        for (d = 0; d < b.length; d++) c += b[d].name + "=" + b[d].value + "; ";
        $.ajax({
            headers: {"set-cookie": c}, url: g, success: function (b) {
                var c, d, f, j, k;
                return -1 == b.indexOf("<title>交易详情") ? (e || (e = !0, window.open(g)), showAddress(a, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[获取失败]",
                    Phone: "",
                    Address: "请进入订单详细页输入验证码再重试",
                    ExpressId: "",
                    ExpressName: ""
                }), setTimeout(getAddress, 2e3), void 0) : (c = o(b, 'lists":[{"content":[{"text":"', '",', !0), d = c.split(","), d.length >= 4 && (h.Linkman = d[0].trim(), h.Phone = d[1].trim(), h.Address = d[2].trim()), (a.find("#confirmGood").length > 0 || a.text().indexOf(!1)) && (f = o(b, 'logistic":{"content":[{"companyName":"', '","', !0), j = o(b, '"mailNo":"', '","', !0), k = o(b, '"卖家发货","time":"', '"', !0), h.ExpressId = j.replace("—", "").trim(), h.ExpressName = f.replace("—", "").trim(), h.ExpressDate = k), m(a, h), setTimeout(getAddress, 2e3), void 0)
            }, error: function () {
                showAddress(a, {
                    OrderId: "",
                    BuyAccount: "",
                    Linkman: "[连接失败]",
                    Phone: "",
                    Address: "",
                    ExpressId: "",
                    ExpressName: ""
                }), setTimeout(getAddress, 2e3)
            }
        })
    })
}


function showAddress(b, a, d) {
    b.attr("data-id");
    var c = $("<div class='order-addr' style='border:1px solid blue;'>" + a.Linkman + "，" + a.Phone + "，" + a.Address + "</div>");
    b.append(c);
    if ("undefined" != typeof a.ShopName && null != a.ShopName && "" != a.ShopName) {
        c.html("<b>店铺：</b>" + a.ShopName + "<br>" + c.html())
    }
    "" != a.ExpressId && c.html(c.html() + "<br><b>快递公司：</b>" + a.ExpressName + "，<b>快递单号：</b>" + a.ExpressId);
    for (b = 0; b < orderAddrs.length; b++) if (orderAddrs[b].OrderId != a.OrderId && orderAddrs[b].Phone == a.Phone) {
        c.attr("style", "border:1px solid red; background-color: rgb(247, 236, 229);");
        c.html(c.html() + "<br><strong>有相同地址订单号：" + orderAddrs[b].OrderId + "</strong>");
        break
    }
    d && c.css("color", "#0b9c0b").css("font-weight", "bold")
}

function saveBuyOrder(b, a) {
    "" != a.ExpressId && void 0 != a.ExpressId && newCount++;
    if ("" != a.ExpressId && void 0 != a.ExpressId && "" == a.ExpressName) {
        var d = b.find("a:contains('查看物流')").attr("href");
        $.ajax({
            url: d, success: function (c) {
                a.ExpressName = getSubstring(c, 'var cpName = "', '";');
                saveBuyOrder2(b, a)
            }, error: function () {
                saveBuyOrder2(b, a)
            }
        })
    } else saveBuyOrder2(b, a)
}

function saveBuyOrder2(b, a) {
    console.log("orderInfo:" + JSON.stringify(a));
    var d = {
        type: "ajax",
        url: serviceHost + "/main/main/savebuyorder",
        data: {orderInfo: JSON.stringify(a), version: version}
    };
    chrome.extension.sendRequest(d, function (c) {
        if (c != null && c.indexOf("code") >= 0 && c.indexOf("msg") >= 0) {
            var result = JSON.parse(c);
            a.ShopName = result.msg;
            orderAddrs.push(a);
            localStorage.orderAddrs = JSON.stringify(orderAddrs)
        } else {
            a.ExpressName = "[获取失败]";
            a.ExpressId = ""
        }
        showAddress(b, a, !0)
    })
}

function getSubstring(str, beginvalue, endvalue, c) {
    var index = str.indexOf(beginvalue);
    return 0 < index ? (endvalue = str.indexOf(endvalue, index + beginvalue.length), str = str.substring(index + beginvalue.length, endvalue), c && (str = str.replace(/<[^>]+>/g, "")), $.trim(str)) : ""
}

function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4)
    }
    return "\\u" + res.join("\\u")
}

function decodeUnicode(str) {
    str = str.replace(/\\u/g, "%u");
    return unescape(str)
};