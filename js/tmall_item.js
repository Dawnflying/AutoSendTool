!function () {
    function init() {
        var a, b;
        if ("undefined" == typeof $ || "undefined" == typeof getSubstring) return setTimeout(init, 500), void 0;
        if (location.href.indexOf("127002391") > 0 || location.href.indexOf("32813001") > 0 || location.href.indexOf("117255286") > 0) return a = getSubstring(location.href + "&", "id=", "&"), b = randomNum(4) + "." + randomNum(6) + "." + randomNum(6) + "." + randomNum(1) + "." + generateMixed(14), location.replace("https://" + location.host + location.pathname + "?id=" + a + "&spm=" + b), void 0;
        if (0 == $(".tm-price").length && "-" == $("#J_SellCounter").text() && "-" == $("#J_RateCounter").text()) return setTimeout(init, 500), void 0;
        if (!$("body").hasClass("loaded")) {
            for ($("body").addClass("loaded"), skuMap = localStorage.skuMap ? JSON.parse(localStorage.skuMap) : [], null == skuMap && (skuMap = []); skuMap.length > 3e3;) skuMap.splice(0, 1);
            chrome.extension.sendRequest({type: "getBackgroundValue", key: "CurrentOrder"}, function (a) {
                null != a && (showOrderInfo(a), selectSku(a))
            })
        }
    }

    function randomNum(a) {
        var c, b = "";
        for (c = 0; a > c; c++) b += Math.floor(10 * Math.random());
        return b
    }

    function generateMixed(a) {
        var c, d, b = "";
        for (c = 0; a > c; c++) d = Math.ceil(35 * Math.random()), b += chars[d];
        return b
    }

    function selectSku(a) {
        var b, c;
        skuKey = "", $.each(a.skus, function (a, b) {
            skuKey += b
        }), b = getSubstring(location.href + "&", "id=", "&"), $.each(skuMap, function (a, c) {
            return c["k"] == skuKey || c["k"] == b + skuKey ? (skuValue = c["v"], !1) : void 0
        }), a.skumap && (skuValue = a.skumap), c = !1, "" != skuValue && $("li[data-value]").each(function (a, b) {
            var d = $(this).attr("data-value");
            skuValue.indexOf(d) >= 0 && (c = !0, $(b).hasClass("tb-selected") || $(b).find("a")[0].click())
        }), 0 == c ? selectSkuByName(a) : "pddi503806848" == a.shop, $(".J_LinkBuy,#J_LinkBuy").click(function () {
            var c, d, e;
            if (skuKey = "", $.each(a.skus, function (a, b) {
                    skuKey += b
                }), "" == skuKey) return console.log("skuKey", "空值"), void 0;
            for (c = "", $(".tb-selected").each(function () {
                c += $(this).attr("data-value") + ","
            }), d = skuMap.length - 1; d >= 0; d--) (skuMap[d]["k"] == skuKey || skuMap[d]["k"] == b + skuKey) && skuMap.splice(d, 1);
            e = {k: b + skuKey, v: c}, skuMap.push(e), localStorage.skuMap = JSON.stringify(skuMap)
        })
    }

    function selectSkuByName(orderInfo) {
        var scripts, memo, key;
        if (!$("body").hasClass("skuselected")) {
            if ($("body").addClass("skuselected"), scripts = $("script:contains('propertyMemoMap:')").html(), memo = getSubstring(scripts, "propertyMemoMap:", "}"), "" != memo) {
                propertyMemoMap = eval("(" + memo + "})");
                for (key in propertyMemoMap) $("li[data-value='" + key + "']").attr("data-memo", propertyMemoMap[key])
            }
            $(".J_TSaleProp").each(function (a, b) {
                var c = $(b).attr("data-property");
                $.each(orderInfo.skus, function (a, d) {
                    var f, e = d;
                    if (d.indexOf(":") > 0) {
                        if (f = d.split(":")[0], -1 == f.indexOf(c) && -1 == c.indexOf(f)) return;
                        e = d.split(":")[1]
                    }
                    1 != $(b).find("li a").length && (e = e.replace("的", ""), $(b).find("li a").each(function (a, b) {
                        var c = $(b).text().trim() + $(b).parent().attr("data-memo");
                        return c = c.replace("的", ""), (c.indexOf(e) >= 0 || e.indexOf(c) >= 0) && (b.click(), c == e) ? !1 : void 0
                    }))
                })
            })
        }
    }

    function showOrderInfo(a) {
        var c, b = $(".dragBox1");
        0 == b.length && (b = $('<div class="dragBox1"><div class="title">订单信息</div><div class="content"></div></div>'), b.css({
            position: "absolute",
            top: "495px",
            right: "80px",
            width: "200px",
            background: "rgb(188, 216, 251)",
            "z-index": 99999999
        }), b.children(".title").css({
            cursor: "move",
            padding: "3px",
            "font-weight": "bold",
            "border-bottom": "1px solid #000"
        }), b.children(".content").css({padding: "3px"}), $("body").append(b), b.children(".title").mousedown(function (a) {
            iDiffX = a.pageX - $(this).offset().left, iDiffY = a.pageY - $(this).offset().top, $(document).mousemove(function (a) {
                b.css({left: a.pageX - iDiffX, top: a.pageY - iDiffY})
            })
        }), b.children(".title").mouseup(function () {
            $(document).unbind("mousemove")
        })), c = a.addr.linkman + "<br>" + a.addr.phone + "<br>" + a.addr.province + "," + a.addr.city + "," + a.addr.district + "<br>" + a.addr.street + "<div style='border-top:1px dashed black; margin:5px;'></div>", c += a.title + "<br>", c += "价格：" + a.price + "<br>", c += "数量：" + a.num + "<br>", $.each(a.skus, function (a, b) {
            c += b + "<br>"
        }), c += "<br>用户备注：" + a.userComment, b.children(".content").html(c)
    }

    var skuMap, skuKey = "", skuValue = "",
        chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    init()
}();

