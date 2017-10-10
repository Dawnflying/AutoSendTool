load();

function load() {
    if ("undefined" == typeof $) setTimeout("load()", 500); else if (!$("body").hasClass("loaded")) if ($("body").addClass("loaded"), 0 == $("textarea").length) setTimeout("load()", 500); else {
        $(window).scroll(function () {
            $("span:contains('\u533f\u540d\u8d2d\u4e70')").parent().find("input[type=checkbox]").prop("checked", !0)
        });
        var a = !1;
        $("iframe").each(function () {
            0 < $(this).attr("src").indexOf("deliver_address_frame.htm") && (a = !0)
        });
        0 == a && (checkAddress(), checkIFrame(), chrome.extension.sendRequest({
                type: "getBackgroundValue",
                key: "CurrentOrder"
            },
            function (a) {
                if (null != a) {
                    showOrderInfo(a);
                    $("textarea").val(a.userComment);
                    if (!isNaN(a.num)) {
                        var b = parseInt(a.num);
                        increaseBtn = $(".right");
                        numInput = $(".amount");
                        var d = 1;
                        if (0 < increaseBtn.length && 0 < numInput.length) for (; parseInt(numInput.val()) < b && !(increaseBtn[0].click(), d++, 100 < d);) ;
                    }
                    $("a:contains('\u63d0\u4ea4\u8ba2\u5355')").click(function () {
                        var c = $("span:contains('\u533f\u540d\u8d2d\u4e70')").parent().find("input[type=checkbox]");
                        0 < c.length && !c.prop("checked") && c.click();
                        c = $(".confirmAddr-addr-bd").text().trim();
                        if ("" != c && 0 < $("a:contains('\u63d0\u4ea4\u8ba2\u5355')").length) {
                            if ((-1 == c.indexOf(a.addr.phone) || 0 != c.indexOf(a.addr.province.replace("\u7701", "")) || -1 == c.indexOf(a.addr.city.replace("\u5e02", ""))) && 0 == confirm("\u6536\u8d27\u5730\u5740\u9519\u8bef\uff0c\u5efa\u8bae\u8fd4\u56de\u68c0\u67e5\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f")) return !1;
                            c = $(".confirmAddr-addr-bd:last").text();
                            if ((0 < c.indexOf("(") || 0 < c.indexOf("\uff08")) && 0 == confirm("\u6536\u8d27\u4eba\u5305\u542b\u5907\u6ce8\u4fe1\u606f\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f")) return !1
                        }
                        return $(".amount").val() !=
                        $(".orderNum").text() && 0 == confirm("\u91c7\u8d2d\u6570\u91cf\u4e0d\u4e00\u81f4\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f") ? !1 : !0
                    })
                }
            }))
    }
}

function checkAddress() {
    var a = $(".addressBox .modify");
    0 == a.length && (a = $(".address-info .modify"));
    0 == a.length ? setTimeout("checkAddress()", 500) : a[0].click()
}

function checkIFrame() {
    var a = !1;
    $("iframe").each(function () {
        0 < $(this).attr("src").indexOf("deliver_address_frame.htm") && (a = !0)
    });
    a ? setTimeout("insertScript()", 2E3) : setTimeout("checkIFrame()", 1E3)
}

function insertScript() {
    chrome.extension.sendRequest({type: "executeFileScript", file: "content/tmall.address.js"}, function (a) {
    })
}

function showOrderInfo(a) {
    var b = $(".dragBox");
    if (0 == b.length) {
        var b = $('<div class="dragBox"><div class="title">\u8ba2\u5355\u4fe1\u606f</div><div class="content"></div></div>'),
            e = (screen.width - 17 - 990) / 2 - 200;
        0 > e && (e = 10);
        b.css({
            position: "fixed",
            top: "150px",
            left: e + "px",
            width: "200px",
            background: "rgb(195, 202, 138)",
            "z-index": 99999
        });
        b.children(".title").css({
            cursor: "move",
            padding: "3px",
            "font-weight": "bold",
            "border-bottom": "1px solid #000"
        });
        b.children(".content").css({padding: "3px"});
        $("body").append(b);
        b.children(".title").mousedown(function (a) {
            titleMove = !0;
            iDiffX = a.pageX - $(this).offset().left;
            iDiffY = a.pageY - $(this).offset().top;
            $(document).mousemove(function (a) {
                b.css({left: a.pageX - iDiffX, top: a.pageY - document.body.scrollTop - iDiffY})
            })
        });
        b.children(".title").mouseup(function () {
            $(document).unbind("mousemove")
        })
    }
    var d = a.id + "<br>" + a.addr.linkman + "<br>" + a.addr.phone + "<br>" + a.addr.province + "&nbsp;&nbsp;" + a.addr.city + "&nbsp;&nbsp;" + a.addr.district + "<br>" + a.addr.street + "<br>-----------SKUS-----------";
    $.each(a.skus, function (a, b) {
        d += "<br>" + b
    });
    d += "<br>\u4ef7\u683c\uff1a" + a.price;
    d += "<br>\u6570\u91cf\uff1a<span class='orderNum'>" + a.num + "</span>";
    d += "<br>-----------------------------";
    d += "<br>\u7528\u6237\u5907\u6ce8\uff1a" + a.userComment;
    b.children(".content").html(d)
};