!function () {
    function a() {
        if ("undefined" == typeof $) return setTimeout(a, 1e3), void 0;
        if (self == top) {
            if (0 == $("#App").length) return setTimeout(a, 1e3), void 0;
            if (-1 != location.href.indexOf("buy.tmall.com/order/confirm_order.htm") && !$("body").hasClass("loaded")) {
                $("body").addClass("loaded");
                var d = !1;
                $("iframe").each(function () {
                    var a = $(this).attr("src") + "";
                    a.indexOf("deliver_address_frame.htm") > 0 && (d = !0)
                }), 0 == d && b(), c(), chrome.extension.sendRequest({
                    type: "getBackgroundValue",
                    key: "CurrentOrder"
                }, function (a) {
                    var b, c;
                    if (null != a) {
                        if (window.name = "neworder", e(a), $("textarea").val(a.userComment), !isNaN(a.num) && (b = parseInt(a.num), increaseBtn = $(".right"), numInput = $(".amount"), c = 1, increaseBtn.length > 0 && numInput.length > 0)) for (; parseInt(numInput.val()) < b && (increaseBtn[0].click(), c++, !(c > 100));) ;
                        $("a:contains('提交订单')").click(function () {
                            var c, d, e, f, b = $("span:contains('匿名购买')").parent().find("input[type=checkbox]");
                            if (b.length > 0 && !b.prop("checked") && b.click(), c = $(".confirmAddr-addr-bd").text().trim(), "" != c && $("a:contains('提交订单')").length > 0) {
                                if ((-1 == c.indexOf(a.addr.phone) || 0 != c.indexOf(a.addr.province.replace("省", "")) || -1 == c.indexOf(a.addr.city.replace("市", ""))) && 0 == confirm("收货地址错误，建议返回检查，是否继续提交订单？")) return !1;
                                if (d = $(".confirmAddr-addr-bd:last").text(), (d.indexOf("(") > 0 || d.indexOf("（") > 0) && 0 == confirm("收货人包含备注信息，是否继续提交订单？")) return !1;
                                if (e = $(".town:last").text(), f = $(".street:last").text(), e.indexOf("镇") > 0 && f.indexOf("镇") > 0 && -1 == f.indexOf(e) && 0 == confirm("地址包含两个镇，请确认是否正确？\r\n" + e + "\r" + f)) return !1;
                                if (e.indexOf("街道") > 0 && f.indexOf("街道") > 0 && -1 == f.indexOf(e) && 0 == confirm("地址包含两个街道，请确认是否正确？\r\n" + e + "\r" + f)) return !1
                            }
                            return $(".amount").val() != $(".orderNum").text() && 0 == confirm("采购数量不一致，是否继续提交订单？") ? !1 : !0
                        })
                    }
                })
            }
        }
    }

    function b() {
        var a = $("#J_addresses .list .addr-toolbar a");
        return 0 == a.length && (a = $("a[title=修改地址]")), 0 == a.length && (a = $(".modify")), 0 == a.length ? (setTimeout(b, 500), void 0) : (setTimeout(function () {
            a[0].click()
        }, 2e3), void 0)
    }

    function c() {
        var a = !1;
        return $("iframe").each(function () {
            var b = $(this).attr("src") + "";
            b.indexOf("deliver_address_frame.htm") > 0 && (a = !0)
        }), a ? (setTimeout(d, 2e3), void 0) : (setTimeout(c, 1e3), void 0)
    }

    function d() {
        chrome.extension.sendRequest({type: "executeFileScript", file: "content/tmall.address.js"}, function () {
        })
    }

    function e(a) {
        var c, d, b = $(".dragBox3");
        0 == b.length && (b = $('<div class="dragBox3"><div class="title">订单信息</div><div class="content"></div></div>'), c = (screen.width - 17 - 990) / 2 - 200, 0 > c && (c = 10), b.css({
            position: "fixed",
            top: "150px",
            left: c + "px",
            width: "200px",
            background: "rgb(195, 202, 138)",
            "z-index": 99999
        }), b.children(".title").css({
            cursor: "move",
            padding: "3px",
            "font-weight": "bold",
            "border-bottom": "1px solid #000"
        }), b.children(".content").css({padding: "3px"}), $("body").append(b), b.children(".title").mousedown(function (a) {
            iDiffX = a.pageX - $(this).offset().left, iDiffY = a.pageY - $(this).offset().top, $(document).mousemove(function (a) {
                b.css({left: a.pageX - iDiffX, top: a.pageY - document.body.scrollTop - iDiffY})
            })
        }), b.children(".title").mouseup(function () {
            $(document).unbind("mousemove")
        })), d = a.id + "<br>" + a.addr.linkman + "<br>" + a.addr.phone + "<br>" + a.addr.province + "<br>" + a.addr.city + "<br>" + a.addr.district + "<br>" + a.addr.street + "<br>----------------------", $.each(a.skus, function (a, b) {
            d += "<br>" + b
        }), d += "<br>价格：" + a.price, d += "<br>数量：<span class='orderNum'>" + a.num + "</span>", d += "<br>----------------------", d += "<br>用户备注：" + a.userComment, b.children(".content").html(d)
    }

    a()
}();
