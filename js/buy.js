var scriptTaobaoBuy = "load();\n" +
    "\n" +
    "function load() {\n" +
    "    if (\"undefined\" == typeof $) setTimeout(\"load()\", 500); else if (!$(\"body\").hasClass(\"loaded\")) if ($(\"body\").addClass(\"loaded\"), 0 == $(\"textarea\").length) setTimeout(\"load()\", 500); else {\n" +
    "        $(window).scroll(function () {\n" +
    "            $(\"span:contains('\u533f\u540d\u8d2d\u4e70')\").parent().find(\"input[type=checkbox]\").prop(\"checked\", !0)\n" +
    "        });\n" +
    "        var a = !1;\n" +
    "        $(\"iframe\").each(function () {\n" +
    "            0 < $(this).attr(\"src\").indexOf(\"deliver_address_frame.htm\") && (a = !0)\n" +
    "        });\n" +
    "        0 == a && (checkAddress(), checkIFrame(), chrome.extension.sendRequest({\n" +
    "                type: \"getBackgroundValue\",\n" +
    "                key: \"CurrentOrder\"\n" +
    "            },\n" +
    "            function (a) {\n" +
    "                if (null != a) {\n" +
    "                    showOrderInfo(a);\n" +
    "                    $(\"textarea\").val(a.userComment);\n" +
    "                    if (!isNaN(a.num)) {\n" +
    "                        var b = parseInt(a.num);\n" +
    "                        increaseBtn = $(\".right\");\n" +
    "                        numInput = $(\".amount\");\n" +
    "                        var d = 1;\n" +
    "                        if (0 < increaseBtn.length && 0 < numInput.length) for (; parseInt(numInput.val()) < b && !(increaseBtn[0].click(), d++, 100 < d);) ;\n" +
    "                    }\n" +
    "                    $(\"a:contains('\u63d0\u4ea4\u8ba2\u5355')\").click(function () {\n" +
    "                        var c = $(\"span:contains('\u533f\u540d\u8d2d\u4e70')\").parent().find(\"input[type=checkbox]\");\n" +
    "                        0 < c.length && !c.prop(\"checked\") && c.click();\n" +
    "                        c = $(\".confirmAddr-addr-bd\").text().trim();\n" +
    "                        if (\"\" != c && 0 < $(\"a:contains('\u63d0\u4ea4\u8ba2\u5355')\").length) {\n" +
    "                            if ((-1 == c.indexOf(a.addr.phone) || 0 != c.indexOf(a.addr.province.replace(\"\u7701\", \"\")) || -1 == c.indexOf(a.addr.city.replace(\"\u5e02\", \"\"))) && 0 == confirm(\"\u6536\u8d27\u5730\u5740\u9519\u8bef\uff0c\u5efa\u8bae\u8fd4\u56de\u68c0\u67e5\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f\")) return !1;\n" +
    "                            c = $(\".confirmAddr-addr-bd:last\").text();\n" +
    "                            if ((0 < c.indexOf(\"(\") || 0 < c.indexOf(\"\uff08\")) && 0 == confirm(\"\u6536\u8d27\u4eba\u5305\u542b\u5907\u6ce8\u4fe1\u606f\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f\")) return !1\n" +
    "                        }\n" +
    "                        return $(\".amount\").val() !=\n" +
    "                        $(\".orderNum\").text() && 0 == confirm(\"\u91c7\u8d2d\u6570\u91cf\u4e0d\u4e00\u81f4\uff0c\u662f\u5426\u7ee7\u7eed\u63d0\u4ea4\u8ba2\u5355\uff1f\") ? !1 : !0\n" +
    "                    })\n" +
    "                }\n" +
    "            }))\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function checkAddress() {\n" +
    "    var a = $(\".addressBox .modify\");\n" +
    "    0 == a.length && (a = $(\".address-info .modify\"));\n" +
    "    0 == a.length ? setTimeout(\"checkAddress()\", 500) : a[0].click()\n" +
    "}\n" +
    "\n" +
    "function checkIFrame() {\n" +
    "    var a = !1;\n" +
    "    $(\"iframe\").each(function () {\n" +
    "        0 < $(this).attr(\"src\").indexOf(\"deliver_address_frame.htm\") && (a = !0)\n" +
    "    });\n" +
    "    a ? setTimeout(\"insertScript()\", 2E3) : setTimeout(\"checkIFrame()\", 1E3)\n" +
    "}\n" +
    "\n" +
    "function insertScript() {\n" +
    "    chrome.extension.sendRequest({type: \"executeFileScript\", file: \"content/tmall.address.js\"}, function (a) {\n" +
    "    })\n" +
    "}\n" +
    "\n" +
    "function showOrderInfo(a) {\n" +
    "    var b = $(\".dragBox\");\n" +
    "    if (0 == b.length) {\n" +
    "        var b = $('<div class=\"dragBox\"><div class=\"title\">\u8ba2\u5355\u4fe1\u606f</div><div class=\"content\"></div></div>'),\n" +
    "            e = (screen.width - 17 - 990) / 2 - 200;\n" +
    "        0 > e && (e = 10);\n" +
    "        b.css({\n" +
    "            position: \"fixed\",\n" +
    "            top: \"150px\",\n" +
    "            left: e + \"px\",\n" +
    "            width: \"200px\",\n" +
    "            background: \"rgb(195, 202, 138)\",\n" +
    "            \"z-index\": 99999\n" +
    "        });\n" +
    "        b.children(\".title\").css({\n" +
    "            cursor: \"move\",\n" +
    "            padding: \"3px\",\n" +
    "            \"font-weight\": \"bold\",\n" +
    "            \"border-bottom\": \"1px solid #000\"\n" +
    "        });\n" +
    "        b.children(\".content\").css({padding: \"3px\"});\n" +
    "        $(\"body\").append(b);\n" +
    "        b.children(\".title\").mousedown(function (a) {\n" +
    "            titleMove = !0;\n" +
    "            iDiffX = a.pageX - $(this).offset().left;\n" +
    "            iDiffY = a.pageY - $(this).offset().top;\n" +
    "            $(document).mousemove(function (a) {\n" +
    "                b.css({left: a.pageX - iDiffX, top: a.pageY - document.body.scrollTop - iDiffY})\n" +
    "            })\n" +
    "        });\n" +
    "        b.children(\".title\").mouseup(function () {\n" +
    "            $(document).unbind(\"mousemove\")\n" +
    "        })\n" +
    "    }\n" +
    "    var d = a.id + \"<br>\" + a.addr.linkman + \"<br>\" + a.addr.phone + \"<br>\" + a.addr.province + \"&nbsp;&nbsp;\" + a.addr.city + \"&nbsp;&nbsp;\" + a.addr.district + \"<br>\" + a.addr.street + \"<br>-----------SKUS-----------\";\n" +
    "    $.each(a.skus, function (a, b) {\n" +
    "        d += \"<br>\" + b\n" +
    "    });\n" +
    "    d += \"<br>\u4ef7\u683c\uff1a\" + a.price;\n" +
    "    d += \"<br>\u6570\u91cf\uff1a<span class='orderNum'>\" + a.num + \"</span>\";\n" +
    "    d += \"<br>-----------------------------\";\n" +
    "    d += \"<br>\u7528\u6237\u5907\u6ce8\uff1a\" + a.userComment;\n" +
    "    b.children(\".content\").html(d)\n" +
    "};";