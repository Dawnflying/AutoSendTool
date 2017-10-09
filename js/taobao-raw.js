var skuKey = "", skuValue = "", skuMap;
init();

function init() {
    if ("undefined" == typeof $) setTimeout("init()", 500); else if (0 == $(".tm-price").length && "-" == $("#J_RateCounter").text()) setTimeout("init()", 500); else if (!$("body").hasClass("loaded")) {
        $("body").addClass("loaded");
        skuMap = localStorage.skuMap ? JSON.parse(localStorage.skuMap) : [];
        for (null == skuMap && (skuMap = []); 3E3 < skuMap.length;) skuMap.splice(0, 1);
        chrome.extension.sendRequest({type: "getBackgroundValue", key: "CurrentOrder"}, function (c) {
            if (null != c) {
                showOrderInfo(c);
                skuKey = "";
                $.each(c.skus, function (a,
                                         b) {
                    skuKey += b
                });
                var a = getSubstring(location.href + "&", "id=", "&");
                $.each(skuMap, function (c, b) {
                    if (b.k == skuKey || b.k == a + skuKey) return skuValue = b.v, !1
                });
                console.log("skuKey", a + skuKey);
                console.log("skuValue", skuValue);
                var d = !1;
                "" != skuValue && $("li[data-value]").each(function (a, b) {
                    a = $(this).attr("data-value");
                    0 <= skuValue.indexOf(a) && (d = !0, $(b).hasClass("tb-selected") || $(b).find("a")[0].click())
                });
                0 == d && selectSku(c);
                $(".J_LinkBuy,#J_LinkBuy").click(function () {
                    skuKey = "";
                    $.each(c.skus, function (b, a) {
                        skuKey += a
                    });
                    if ("" == skuKey) console.log("skuKey", "\u7a7a\u503c"); else {
                        var d = "";
                        $(".tb-selected").each(function () {
                            d += $(this).attr("data-value") + ","
                        });
                        for (var b = skuMap.length - 1; 0 <= b; b--) skuMap[b].k != skuKey && skuMap[b].k != a + skuKey || skuMap.splice(b, 1);
                        skuMap.push({k: a + skuKey, v: d});
                        localStorage.skuMap = JSON.stringify(skuMap)
                    }
                })
            }
        })
    }
}

function selectSku(c) {
    if (!$("body").hasClass("skuselected")) {
        $("body").addClass("skuselected");
        if (!isNaN(c.num)) {
            var a = 1;
            increaseBtn = $(".mui-amount-increase");
            0 == increaseBtn.length && (increaseBtn = $(".J_Increase"));
            numInput = $(".mui-amount-input");
            0 == numInput.length && (numInput = $("#J_IptAmount"));
            if (0 < increaseBtn.length && 0 < numInput.length) for (; numInput.val() != c.num && !(increaseBtn[0].click(), a++, 100 < a);) ;
        }
        $(".J_TSaleProp").each(function (a, e) {
            var b = $(e).attr("data-property");
            $.each(c.skus, function (a, c) {
                var d =
                    c;
                if (0 < c.indexOf(":")) {
                    a = c.split(":")[0];
                    if (-1 == a.indexOf(b) && -1 == b.indexOf(a)) return;
                    d = c.split(":")[1]
                }
                1 != $(e).find("li a").length && (d = d.replace("\u7684", ""), $(e).find("li a").each(function (a, b) {
                    a = $(b).text().trim();
                    a = a.replace("\u7684", "");
                    if (0 <= a.indexOf(d) || 0 <= d.indexOf(a)) if (b.click(), a == d) return !1
                }))
            })
        })
    }
}

function showOrderInfo(c) {
    var a = $(".dragBox");
    0 == a.length && (a = $('<div class="dragBox"><div class="title">\u8ba2\u5355\u4fe1\u606f</div><div class="content"></div></div>'), a.css({
        position: "absolute",
        top: "495px",
        right: "80px",
        width: "200px",
        background: "rgb(188, 216, 251)",
        "z-index": 99999999
    }), a.children(".title").css({
        cursor: "move",
        padding: "3px",
        "font-weight": "bold",
        "border-bottom": "1px solid #000"
    }), a.children(".content").css({padding: "3px"}), $("body").append(a), a.children(".title").mousedown(function (c) {
        iDiffX =
            c.pageX - $(this).offset().left;
        iDiffY = c.pageY - $(this).offset().top;
        $(document).mousemove(function (b) {
            a.css({left: b.pageX - iDiffX, top: b.pageY - iDiffY})
        })
    }), a.children(".title").mouseup(function () {
        $(document).unbind("mousemove")
    }));
    var d = c.title + "<br>", d = d + ("\u4ef7\u683c\uff1a" + c.price + "<br>"),
        d = d + ("\u6570\u91cf\uff1a" + c.num + "<br>");
    $.each(c.skus, function (a, b) {
        d += b + "<br>"
    });
    a.children(".content").html(d)
};