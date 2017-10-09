var scriptTaobao = "var skuKey = \"\", skuValue = \"\", skuMap;\n" +
    "init();\n" +
    "\n" +
    "function init() {\n" +
    "    if (\"undefined\" == typeof $) setTimeout(\"init()\", 500); else if (0 == $(\".tm-price\").length && \"-\" == $(\"#J_RateCounter\").text()) setTimeout(\"init()\", 500); else if (!$(\"body\").hasClass(\"loaded\")) {\n" +
    "        $(\"body\").addClass(\"loaded\");\n" +
    "        skuMap = localStorage.skuMap ? JSON.parse(localStorage.skuMap) : [];\n" +
    "        for (null == skuMap && (skuMap = []); 3E3 < skuMap.length;) skuMap.splice(0, 1);\n" +
    "        chrome.extension.sendRequest({type: \"getBackgroundValue\", key: \"CurrentOrder\"}, function (c) {\n" +
    "            if (null != c) {\n" +
    "                showOrderInfo(c);\n" +
    "                skuKey = \"\";\n" +
    "                $.each(c.skus, function (a,\n" +
    "                                         b) {\n" +
    "                    skuKey += b\n" +
    "                });\n" +
    "                var a = getSubstring(location.href + \"&\", \"id=\", \"&\");\n" +
    "                $.each(skuMap, function (c, b) {\n" +
    "                    if (b.k == skuKey || b.k == a + skuKey) return skuValue = b.v, !1\n" +
    "                });\n" +
    "                console.log(\"skuKey\", a + skuKey);\n" +
    "                console.log(\"skuValue\", skuValue);\n" +
    "                var d = !1;\n" +
    "                \"\" != skuValue && $(\"li[data-value]\").each(function (a, b) {\n" +
    "                    a = $(this).attr(\"data-value\");\n" +
    "                    0 <= skuValue.indexOf(a) && (d = !0, $(b).hasClass(\"tb-selected\") || $(b).find(\"a\")[0].click())\n" +
    "                });\n" +
    "                0 == d && selectSku(c);\n" +
    "                $(\".J_LinkBuy,#J_LinkBuy\").click(function () {\n" +
    "                    skuKey = \"\";\n" +
    "                    $.each(c.skus, function (b, a) {\n" +
    "                        skuKey += a\n" +
    "                    });\n" +
    "                    if (\"\" == skuKey) console.log(\"skuKey\", \"\u7a7a\u503c\"); else {\n" +
    "                        var d = \"\";\n" +
    "                        $(\".tb-selected\").each(function () {\n" +
    "                            d += $(this).attr(\"data-value\") + \",\"\n" +
    "                        });\n" +
    "                        for (var b = skuMap.length - 1; 0 <= b; b--) skuMap[b].k != skuKey && skuMap[b].k != a + skuKey || skuMap.splice(b, 1);\n" +
    "                        skuMap.push({k: a + skuKey, v: d});\n" +
    "                        localStorage.skuMap = JSON.stringify(skuMap)\n" +
    "                    }\n" +
    "                })\n" +
    "            }\n" +
    "        })\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function selectSku(c) {\n" +
    "    if (!$(\"body\").hasClass(\"skuselected\")) {\n" +
    "        $(\"body\").addClass(\"skuselected\");\n" +
    "        if (!isNaN(c.num)) {\n" +
    "            var a = 1;\n" +
    "            increaseBtn = $(\".mui-amount-increase\");\n" +
    "            0 == increaseBtn.length && (increaseBtn = $(\".J_Increase\"));\n" +
    "            numInput = $(\".mui-amount-input\");\n" +
    "            0 == numInput.length && (numInput = $(\"#J_IptAmount\"));\n" +
    "            if (0 < increaseBtn.length && 0 < numInput.length) for (; numInput.val() != c.num && !(increaseBtn[0].click(), a++, 100 < a);) ;\n" +
    "        }\n" +
    "        $(\".J_TSaleProp\").each(function (a, e) {\n" +
    "            var b = $(e).attr(\"data-property\");\n" +
    "            $.each(c.skus, function (a, c) {\n" +
    "                var d =\n" +
    "                    c;\n" +
    "                if (0 < c.indexOf(\":\")) {\n" +
    "                    a = c.split(\":\")[0];\n" +
    "                    if (-1 == a.indexOf(b) && -1 == b.indexOf(a)) return;\n" +
    "                    d = c.split(\":\")[1]\n" +
    "                }\n" +
    "                1 != $(e).find(\"li a\").length && (d = d.replace(\"\u7684\", \"\"), $(e).find(\"li a\").each(function (a, b) {\n" +
    "                    a = $(b).text().trim();\n" +
    "                    a = a.replace(\"\u7684\", \"\");\n" +
    "                    if (0 <= a.indexOf(d) || 0 <= d.indexOf(a)) if (b.click(), a == d) return !1\n" +
    "                }))\n" +
    "            })\n" +
    "        })\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function showOrderInfo(c) {\n" +
    "    var a = $(\".dragBox\");\n" +
    "    0 == a.length && (a = $('<div class=\"dragBox\"><div class=\"title\">\u8ba2\u5355\u4fe1\u606f</div><div class=\"content\"></div></div>'), a.css({\n" +
    "        position: \"absolute\",\n" +
    "        top: \"495px\",\n" +
    "        right: \"80px\",\n" +
    "        width: \"200px\",\n" +
    "        background: \"rgb(188, 216, 251)\",\n" +
    "        \"z-index\": 99999999\n" +
    "    }), a.children(\".title\").css({\n" +
    "        cursor: \"move\",\n" +
    "        padding: \"3px\",\n" +
    "        \"font-weight\": \"bold\",\n" +
    "        \"border-bottom\": \"1px solid #000\"\n" +
    "    }), a.children(\".content\").css({padding: \"3px\"}), $(\"body\").append(a), a.children(\".title\").mousedown(function (c) {\n" +
    "        iDiffX =\n" +
    "            c.pageX - $(this).offset().left;\n" +
    "        iDiffY = c.pageY - $(this).offset().top;\n" +
    "        $(document).mousemove(function (b) {\n" +
    "            a.css({left: b.pageX - iDiffX, top: b.pageY - iDiffY})\n" +
    "        })\n" +
    "    }), a.children(\".title\").mouseup(function () {\n" +
    "        $(document).unbind(\"mousemove\")\n" +
    "    }));\n" +
    "    var d = c.title + \"<br>\", d = d + (\"\u4ef7\u683c\uff1a\" + c.price + \"<br>\"),\n" +
    "        d = d + (\"\u6570\u91cf\uff1a\" + c.num + \"<br>\");\n" +
    "    $.each(c.skus, function (a, b) {\n" +
    "        d += b + \"<br>\"\n" +
    "    });\n" +
    "    a.children(\".content\").html(d)\n" +
    "};";