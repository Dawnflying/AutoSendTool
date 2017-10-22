!function () {
    function g() {
        var c, d;
        return "undefined" == typeof $ ? (setTimeout(g, 500), void 0) : ($("body").hasClass("loaded") || ($("body").addClass("loaded"), c = $("<span class='btn-update' style='border: 1px solid #1E8AB3; background-color: #EAF8FF; padding: 5px; margin-right: 5px;'>更新发货信息</span>"), d = $("<span class='btn-blue btn-batch'>启用自动翻15页</span>"), $("[class^='batch-mod__container']").append(c), $("[class^='batch-mod__container']").append(d), $(".btn-batch").click(function () {
            var a = parseInt(localStorage.AutoPageCount);
            if (0 / 0 != a && a > 0) {
                if (0 == confirm("正在翻页，是否停止")) return !1;
                localStorage.AutoPageCount = "0", $(".btn-batch").text("启用自动翻15页")
            } else localStorage.AutoPageCount = "15", $(".btn-batch").text("停止自动翻页15"), $(".btn-update").text().indexOf("更新完成") >= 0 && $("button:contains('下一页')")[0].click()
        }), $("div[class^='simple-pagination-mod__container'] button").click(function () {
            b = a.length, $(".btn-update").removeAttr("disabled").text("更新发货信息"), setTimeout(q, 1500)
        }), $(".pagination").on("click", "li", function () {
            b = a.length, $(".btn-update").removeAttr("disabled").text("更新发货信息"), setTimeout(q, 1500)
        }), $("button:contains('订单搜索')").click(function () {
            b = a.length, $(".btn-update").removeAttr("disabled").text("更新发货信息"), setTimeout(q, 1500)
        }), $(window).scroll(function () {
            $("#J_xiaomi_dialog").hide()
        }), q()), void 0)
    }

    function h() {
        var g, j;
        if (a = $("div[data-id]"), 0 == a.length) return setTimeout(h, 1e3), void 0;
        if (g = $("[class^='loading-mod__loading']"), j = g.attr("class"), -1 == j.indexOf("hidden")) return setTimeout(h, 1e3), void 0;
        for (b = 0, e = !1, f = 0, d = localStorage.orderAddrs ? JSON.parse(localStorage.orderAddrs) : [], null == d && (d = []); d.length > 3e3;) d.splice(0, 1);
        c = $(".menu-hd a:first").text(), "" == c && (c = $(".site-nav-login-info-nick").text()), i()
    }

    function i() {
        var e, g, h, m, n, o;
        if (0 == a.length && null == d) return console.log("首次加载重置"), q(), void 0;
        if (b >= a.length) return $("body").removeClass("loaded"), $(".btn-update").text("更新完成,发现" + f + "条新发货信息)"), e = parseInt(localStorage.AutoPageCount), 0 / 0 != e && e > 0 ? (e--, localStorage.AutoPageCount = e, $("button:contains('下一页')")[0].click(), $(".btn-batch").text("停止自动翻页" + e)) : $(".btn-batch").text("启用自动翻15页"), void 0;
        for (g = $(a[b]), g.find(".order-addr").remove(), h = g.attr("data-id"), b++, $(".btn-update").text("更新发货信息(" + b + "/" + a.length + ")"), m = g.find("#confirmGood").length > 0, n = d.length - 1; n >= 0; n--) if (d[n].OrderId == h) {
            if (!m || "" != d[n].ExpressId && "" != d[n].ExpressName) return l(g, d[n]), setTimeout(i, 50), void 0;
            d.splice(n, 1)
        }
        return o = g.find("a:contains('订单详情')").attr("href"), o.indexOf("dianying.taobao.com") > 0 || g.text().indexOf("虚拟物品") > 0 || g.text().indexOf("自动充值") > 0 ? (l(g, {
            OrderId: h,
            BuyAccount: c,
            Linkman: "虚拟物品",
            Phone: "-",
            Address: "无收获地址",
            ExpressId: "",
            ExpressName: "",
            Price: 0,
            PostFee: 0
        }), setTimeout(i, 50), void 0) : (o.indexOf("tmall.com") > 0 ? k(g, h) : j(g, h), void 0)
    }

    function j(a, b) {
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
                    return -1 == b.indexOf("<title>交易详情") ? (e || (e = !0, window.open(h)), l(a, {
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
                    }), (a.find("#confirmGood").length > 0 || a.text().indexOf(!1)) && (g = o(b, "<dt>物流公司：</dt>", "</dd>", !0), "" == g && (g = o(b, "物流公司：</td>", "</td>", !0)), "" == g && (g = o(b, '"logisticsName":"', '","', !0)), "" == g && (g = o(b, 'logisticsName\\":\\"', '\\",', !0)), g = toHanzi(g), k = o(b, "<dt>运单号码：</dt>", "</dd>", !0), "" == k && (k = o(b, "运单号：</td>", "</td>", !0)), "" == k && (k = o(b, '"logisticsNum":"', '"', !0)), "" == k && (k = o(b, 'logisticsNum\\":\\"', '\\"', !0)), k = toHanzi(k), n = o(b, 'u53D1\\u8D27\\u65F6\\u95F4:\\",\\"value\\":\\"', '\\"'), "" == n && (n = o(b, "发货时间：</td>", "</td>", !0)), "" == n && (n = o(b, '发货时间:","value":"', '"', !0)), j.ExpressId = k.replace("—", "").trim(), j.ExpressName = g.replace("—", "").trim(), j.ExpressDate = n), m(a, j), setTimeout(i, 2e3), void 0) : (l(a, {
                        OrderId: "",
                        BuyAccount: "",
                        Linkman: "[解析失败]",
                        Phone: "",
                        Address: "",
                        ExpressId: "",
                        ExpressName: ""
                    }), setTimeout(i, 2e3), void 0))
                }, error: function () {
                    l(a, {
                        OrderId: "",
                        BuyAccount: "",
                        Linkman: "[连接失败]",
                        Phone: "",
                        Address: "请进入<a href='" + h + "'>订单详细页</a>查看是否需要验证",
                        ExpressId: "",
                        ExpressName: ""
                    }), setTimeout(i, 2e3)
                }
            })
        })
    }

    function k(a, b) {
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
                    return -1 == b.indexOf("<title>交易详情") ? (e || (e = !0, window.open(g)), l(a, {
                        OrderId: "",
                        BuyAccount: "",
                        Linkman: "[获取失败]",
                        Phone: "",
                        Address: "请进入订单详细页输入验证码再重试",
                        ExpressId: "",
                        ExpressName: ""
                    }), setTimeout(i, 2e3), void 0) : (c = o(b, 'lists":[{"content":[{"text":"', '",', !0), d = c.split(","), d.length >= 4 && (h.Linkman = d[0].trim(), h.Phone = d[1].trim(), h.Address = d[2].trim()), (a.find("#confirmGood").length > 0 || a.text().indexOf(!1)) && (f = o(b, 'logistic":{"content":[{"companyName":"', '","', !0), j = o(b, '"mailNo":"', '","', !0), k = o(b, '"卖家发货","time":"', '"', !0), h.ExpressId = j.replace("—", "").trim(), h.ExpressName = f.replace("—", "").trim(), h.ExpressDate = k), m(a, h), setTimeout(i, 2e3), void 0)
                }, error: function () {
                    l(a, {
                        OrderId: "",
                        BuyAccount: "",
                        Linkman: "[连接失败]",
                        Phone: "",
                        Address: "",
                        ExpressId: "",
                        ExpressName: ""
                    }), setTimeout(i, 2e3)
                }
            })
        })
    }

    function l(a, b, c) {
        var f, g;
        for (a.attr("data-id"), f = $("<div class='order-addr' style='border:1px solid blue;'>" + b.Linkman + "，" + b.Phone + "，" + b.Address + "</div>"), a.append(f), "" != b.ExpressId && f.html(f.html() + "<br><b>快递公司：</b>" + b.ExpressName + "，<b>快递单号：</b>" + b.ExpressId), 1 == b.AddrError && f.html(f.html() + "<br><span style='color:red;'>订单收货地址异常</span>"), g = 0; g < d.length; g++) if (d[g].OrderId != b.OrderId && d[g].Phone == b.Phone) {
            f.attr("style", "border:1px solid red; background-color: rgb(247, 236, 229);"), f.html(f.html() + "<br><strong>有相同地址订单号：" + d[g].OrderId + "</strong>");
            break
        }
        c && f.css("color", "#0b9c0b").css("font-weight", "bold")
    }

    function m(a, b) {
        if ("" != b.ExpressId && void 0 != b.ExpressId && f++, "" != b.ExpressId && void 0 != b.ExpressId && "" == b.ExpressName) {
            var c = a.find("a:contains('查看物流')").attr("href");
            $.ajax({
                url: c, success: function (c) {
                    b.ExpressName = o(c, 'var cpName = "', '";'), n(a, b)
                }, error: function () {
                    n(a, b)
                }
            })
        } else n(a, b)
    }

    function n(a, b) {
        b.BuyAccount = c;
        var e = {
            url: serviceHost + "/User/Service/SaveBuyOrder",
            data: {orderInfo: JSON.stringify(b), version: version}
        };
        chrome.extension.sendRequest({type: "ajax2", options: e}, function (c) {
            200 == c.status && (c.text + "").length < 10 ? (c.text.indexOf("异常") >= 0 && (b.AddrError = 1), d.push(b), localStorage.orderAddrs = JSON.stringify(d), l(a, b, !0)) : (b.ExpressName = "[获取失败]", b.ExpressId = "", l(a, b, !0))
        })
    }

    function o(a, b, c, d) {
        var f, g, e = a.indexOf(b);
        return e > 0 ? (f = a.indexOf(c, e + b.length), g = a.substring(e + b.length, f), d && (g = g.replace(/<[^>]+>/g, "")), $.trim(g)) : ""
    }

    function p(a, b) {
        null == d && (d = localStorage.orderAddrs ? JSON.parse(localStorage.orderAddrs) : [], null == d && (d = []));
        for (var c = d.length - 1; c >= 0; c--) if (d[c].OrderId == a && "" != d[c].OrderId) return b ? (d.splice(c, 1), !1) : !0;
        return !1
    }

    function q() {
        var b, c;
        return a = $("div[data-id]"), 0 == a.length ? (setTimeout(q, 1e3), void 0) : (b = "", $("div[data-id]").each(function () {
            var a = $(this).attr("data-id");
            p(a) || (b += a + ",")
        }), "" == b ? (h(), void 0) : (c = {
            url: serviceHost + "/User/Service/GetAddressList",
            data: {ids: b, buyAccount: $(".menu-hd a:first").text(), version: version}
        }, chrome.extension.sendRequest({type: "ajax2", options: c}, function (a) {
            200 == a.status && a.json && a.length > 0 && ($.each(a, function (a, b) {
                b.OrderId && !p(b.OrderId, !0) && d.push(b)
            }), localStorage.orderAddrs = JSON.stringify(d)), h()
        }), void 0))
    }

    var a = [], b = 0, c = "", d = null, e = !1, f = 0;
    g()
}();
