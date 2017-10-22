var scriptPinDuoDuoSample = "var user = null, tabid = null, orderList = null, skusTaoURLMapList = null;\n" +
    "shipping = [{shipping_id: \"1\", shipping_name: \"申通快递\"}, {\n" +
    "    shipping_id: \"3\",\n" +
    "    shipping_name: \"百世快递\"\n" +
    "}, {shipping_id: \"44\", shipping_name: \"顺丰快递\"}, {\n" +
    "    shipping_id: \"85\",\n" +
    "    shipping_name: \"圆通快递\"\n" +
    "}, {shipping_id: \"88\", shipping_name: \"奔奔速达\"}, {\n" +
    "    shipping_id: \"89\",\n" +
    "    shipping_name: \"赛澳递\"\n" +
    "}, {shipping_id: \"90\", shipping_name: \"晟邦物流\"}, {\n" +
    "    shipping_id: \"115\",\n" +
    "    shipping_name: \"中通快递\"\n" +
    "},\n" +
    "    {shipping_id: \"116\", shipping_name: \"全峰快递\"}, {\n" +
    "        shipping_id: \"117\",\n" +
    "        shipping_name: \"优速快递\"\n" +
    "    }, {shipping_id: \"118\", shipping_name: \"邮政EMS\"}, {\n" +
    "        shipping_id: \"119\",\n" +
    "        shipping_name: \"天天快递\"\n" +
    "    }, {shipping_id: \"120\", shipping_name: \"京东配送\"}, {\n" +
    "        shipping_id: \"121\",\n" +
    "        shipping_name: \"韵达快递\"\n" +
    "    }, {shipping_id: \"122\", shipping_name: \"快捷快递\"}, {\n" +
    "        shipping_id: \"124\",\n" +
    "        shipping_name: \"国通快递\"\n" +
    "    }, {shipping_id: \"128\", shipping_name: \"当当出版配送\"},\n" +
    "    {shipping_id: \"129\", shipping_name: \"宅急送快递\"}, {\n" +
    "        shipping_id: \"130\",\n" +
    "        shipping_name: \"如风达\"\n" +
    "    }, {shipping_id: \"131\", shipping_name: \"德邦快递\"}, {\n" +
    "        shipping_id: \"132\",\n" +
    "        shipping_name: \"邮政快递包裹\"\n" +
    "    }, {shipping_id: \"133\", shipping_name: \"龙邦快递\"}, {\n" +
    "        shipping_id: \"135\",\n" +
    "        shipping_name: \"联邦快递\"\n" +
    "    }, {shipping_id: \"136\", shipping_name: \"九曳供应链\"}, {\n" +
    "        shipping_id: \"137\",\n" +
    "        shipping_name: \"百城当日达快递\"\n" +
    "    },\n" +
    "    {shipping_id: \"138\", shipping_name: \"达达快递\"}, {\n" +
    "        shipping_id: \"139\",\n" +
    "        shipping_name: \"冻到家物流\"\n" +
    "    }, {shipping_id: \"140\", shipping_name: \"南京晟邦\"}, {\n" +
    "        shipping_id: \"141\",\n" +
    "        shipping_name: \"山西红马甲\"\n" +
    "    }, {shipping_id: \"142\", shipping_name: \"万象物流\"}, {\n" +
    "        shipping_id: \"143\",\n" +
    "        shipping_name: \"立即送\"\n" +
    "    }, {shipping_id: \"144\", shipping_name: \"门对门\"}, {\n" +
    "        shipping_id: \"147\",\n" +
    "        shipping_name: \"丰程\"\n" +
    "    }, {shipping_id: \"148\", shipping_name: \"安达信\"},\n" +
    "    {shipping_id: \"149\", shipping_name: \"海外快递\"}, {\n" +
    "        shipping_id: \"150\",\n" +
    "        shipping_name: \"飞远物流\"\n" +
    "    }, {shipping_id: \"151\", shipping_name: \"南都快递\"}, {\n" +
    "        shipping_id: \"152\",\n" +
    "        shipping_name: \"汇文快递\"\n" +
    "    }, {shipping_id: \"154\", shipping_name: \"黄马甲\"}, {\n" +
    "        shipping_id: \"155\",\n" +
    "        shipping_name: \"速尔快递\"\n" +
    "    }, {shipping_id: \"156\", shipping_name: \"亚马逊物流\"}, {\n" +
    "        shipping_id: \"157\",\n" +
    "        shipping_name: \"黑猫宅急便\"\n" +
    "    }, {\n" +
    "        shipping_id: \"158\",\n" +
    "        shipping_name: \"顺丰航运\"\n" +
    "    }, {shipping_id: \"159\", shipping_name: \"圆通航运\"}, {\n" +
    "        shipping_id: \"160\",\n" +
    "        shipping_name: \"拼好货\"\n" +
    "    }, {shipping_id: \"161\", shipping_name: \"上海赛澳递\"}, {\n" +
    "        shipping_id: \"162\",\n" +
    "        shipping_name: \"城市100 \"\n" +
    "    }, {shipping_id: \"163\", shipping_name: \"芝麻开门\"}, {\n" +
    "        shipping_id: \"164\",\n" +
    "        shipping_name: \"顺捷丰达\"\n" +
    "    }, {shipping_id: \"165\", shipping_name: \"汇通小红马\"}, {\n" +
    "        shipping_id: \"166\",\n" +
    "        shipping_name: \"辽宁小红马\"\n" +
    "    },\n" +
    "    {shipping_id: \"167\", shipping_name: \"辽宁黄马甲\"}, {\n" +
    "        shipping_id: \"168\",\n" +
    "        shipping_name: \"江苏赛澳递\"\n" +
    "    }, {shipping_id: \"169\", shipping_name: \"三人行\"}, {\n" +
    "        shipping_id: \"170\",\n" +
    "        shipping_name: \"通和佳递\"\n" +
    "    }, {shipping_id: \"171\", shipping_name: \"速捷\"}, {\n" +
    "        shipping_id: \"172\",\n" +
    "        shipping_name: \"信诺迅达\"\n" +
    "    }, {shipping_id: \"173\", shipping_name: \"风先生\"}, {\n" +
    "        shipping_id: \"174\",\n" +
    "        shipping_name: \"宽容\"\n" +
    "    }, {shipping_id: \"175\", shipping_name: \"广州途客\"},\n" +
    "    {shipping_id: \"176\", shipping_name: \"小红帽\"}, {\n" +
    "        shipping_id: \"177\",\n" +
    "        shipping_name: \"鹏达\"\n" +
    "    }, {shipping_id: \"178\", shipping_name: \"福建飞远\"}, {\n" +
    "        shipping_id: \"179\",\n" +
    "        shipping_name: \"E特快\"\n" +
    "    }, {shipping_id: \"180\", shipping_name: \"商家自建物流\"}, {\n" +
    "        shipping_id: \"181\",\n" +
    "        shipping_name: \"云鸟\"\n" +
    "    }, {shipping_id: \"182\", shipping_name: \"保达\"}, {\n" +
    "        shipping_id: \"183\",\n" +
    "        shipping_name: \"跨越速递\"\n" +
    "    }, {shipping_id: \"184\", shipping_name: \"吉林黄马甲\"},\n" +
    "    {shipping_id: \"185\", shipping_name: \"城际速递\"}, {\n" +
    "        shipping_id: \"186\",\n" +
    "        shipping_name: \"usps\"\n" +
    "    }, {shipping_id: \"187\", shipping_name: \"青岛安捷\"}, {\n" +
    "        shipping_id: \"188\",\n" +
    "        shipping_name: \"大韩通运\"\n" +
    "    }, {shipping_id: \"189\", shipping_name: \"棒棒糖\"}, {\n" +
    "        shipping_id: \"190\",\n" +
    "        shipping_name: \"途鲜\"\n" +
    "    }, {shipping_id: \"191\", shipping_name: \"菜鸟快递\"}, {\n" +
    "        shipping_id: \"193\",\n" +
    "        shipping_name: \"汇站众享\"\n" +
    "    }, {shipping_id: \"194\", shipping_name: \"派客\"}, {\n" +
    "        shipping_id: \"195\",\n" +
    "        shipping_name: \"贝海国际速递\"\n" +
    "    }, {shipping_id: \"196\", shipping_name: \"丰泰国际快递\"}, {\n" +
    "        shipping_id: \"197\",\n" +
    "        shipping_name: \"环球速运\"\n" +
    "    }, {shipping_id: \"198\", shipping_name: \"168顺发速递\"}, {\n" +
    "        shipping_id: \"199\",\n" +
    "        shipping_name: \"全球快递\"\n" +
    "    }, {shipping_id: \"200\", shipping_name: \"程光快递\"}, {\n" +
    "        shipping_id: \"201\",\n" +
    "        shipping_name: \"全一快递\"\n" +
    "    }, {shipping_id: \"203\", shipping_name: \"东骏快捷\"}, {\n" +
    "        shipping_id: \"205\",\n" +
    "        shipping_name: \"远成快运\"\n" +
    "    }, {shipping_id: \"206\", shipping_name: \"风腾国际速递\"}, {\n" +
    "        shipping_id: \"207\",\n" +
    "        shipping_name: \"笨鸟转运\"\n" +
    "    }, {shipping_id: \"208\", shipping_name: \"安能物流\"}, {\n" +
    "        shipping_id: \"209\",\n" +
    "        shipping_name: \"联众国际快运\"\n" +
    "    }, {shipping_id: \"210\", shipping_name: \"天地华宇\"}, {\n" +
    "        shipping_id: \"211\",\n" +
    "        shipping_name: \"中邮速递\"\n" +
    "    }, {shipping_id: \"212\", shipping_name: \"hi淘易 \"}, {\n" +
    "        shipping_id: \"213\",\n" +
    "        shipping_name: \"EMS-国际件\"\n" +
    "    }, {shipping_id: \"214\", shipping_name: \"中铁物流\"}, {\n" +
    "        shipping_id: \"215\",\n" +
    "        shipping_name: \"楚源物流\"\n" +
    "    }, {shipping_id: \"216\", shipping_name: \"新邦物流\"}, {\n" +
    "        shipping_id: \"217\",\n" +
    "        shipping_name: \"Flash Express\"\n" +
    "    }, {shipping_id: \"218\", shipping_name: \"新顺丰NSF\"}, {\n" +
    "        shipping_id: \"219\",\n" +
    "        shipping_name: \"锐朗快递\"\n" +
    "    }, {shipping_id: \"220\", shipping_name: \"王道国际物流\"}, {\n" +
    "        shipping_id: \"221\",\n" +
    "        shipping_name: \"DCS GLOBAL\"\n" +
    "    },\n" +
    "    {shipping_id: \"222\", shipping_name: \"迅速快递\"}, {\n" +
    "        shipping_id: \"223\",\n" +
    "        shipping_name: \"富腾达国际货运\"\n" +
    "    }, {shipping_id: \"224\", shipping_name: \"琦峰物流\"}, {\n" +
    "        shipping_id: \"225\",\n" +
    "        shipping_name: \"金运通物流\"\n" +
    "    }, {shipping_id: \"226\", shipping_name: \"EWE全球快递\"}], successCount = 0, failCount = 0,\n" +
    "    orderRows = [], orderIndex = 0;\n" +
    "init();\n" +
    "\n" +
    "function init() {\n" +
    "    if (\"undefined\" == typeof $ || \"undefined\" == typeof getUserInfo) setTimeout(\"init()\", 500); else if (0 == $(\".o-o-t-l-content\").length) setTimeout(\"init()\", 500); else if ($(\"body\").attr(\"location\") != location.href) {\n" +
    "        $(\"body\").attr(\"location\", location.href);\n" +
    "        orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];\n" +
    "        skusTaoURLMapList = localStorage.skusTaoURLMapList ? JSON.parse(localStorage.skusTaoURLMapList) : [];\n" +
    "        null == orderList && (orderList = []);\n" +
    "        \"div[data-id]\" == orderList.selector && (orderList.length = 0, orderList = []);\n" +
    "        for (; 3E3 < orderList.length;) orderList.splice(0, 1);\n" +
    "        $(\"body\").on(\"mousedown\",\n" +
    "            \".pdd-pagination a\", function () {\n" +
    "                $(\"body\").attr(\"location\", \"\");\n" +
    "                $(\"body\").attr(\"clen\", $(\".o-o-t-l-content\").html().length);\n" +
    "                setTimeout(\"checkItems()\", 1E3)\n" +
    "            });\n" +
    "        $(\".ez-box a:contains('查询')\").click(function () {\n" +
    "            $(\"body\").attr(\"location\", \"\");\n" +
    "            $(\"body\").attr(\"clen\", $(\".o-o-t-l-content\").html().length);\n" +
    "            setTimeout(\"checkItems()\", 1E3)\n" +
    "        });\n" +
    "        $(\".order-search-count2 a\").on(\"click\", function () {\n" +
    "            $(\"body\").attr(\"location\", \"\");\n" +
    "            $(\"body\").attr(\"clen\", $(\".o-o-t-l-content\").html().length)\n" +
    "        });\n" +
    "        checkItems();\n" +
    "        batchSubmit()\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function checkItems() {\n" +
    "    if (null == user || \"\" == user.shopid) user = getUserInfo();\n" +
    "    null == user || \"\" == user.shopid ? setTimeout(\"checkItems()\", 1E3) : 0 == $(\".o-o-t-l-c-list\").length ? setTimeout(\"checkItems()\", 1E3) : 1 == $(\".o-o-t-l-c-list\").length && 0 < $($(\".o-o-t-l-c-list\")[0]).text().indexOf(\"没有查询到\") ? setTimeout(\"checkItems()\", 1E3) : $(\"body\").attr(\"clen\") == $(\".o-o-t-l-content\").html().length ? setTimeout(\"checkItems()\", 1E3) : ($(\"th:contains('商品ID')\").html(\"<label><input type=checkbox class=chkItem checked style='vertical-align: -2px;' />商品ID</label>\"),\n" +
    "        $(\".chkAll\").prop(\"checked\", !0), orderRows = $(\".o-o-t-l-c-list\"), orderIndex = 0, orderRows.each(function () {\n" +
    "        getOrderButton($(this))\n" +
    "    }))\n" +
    "}\n" +
    "\n" +
    "function getOrderButton(c) {\n" +
    "    if (c) {\n" +
    "        var a = {shopid: user.shopid}, d = [], b = c.find(\".o-o-t-l-c-l-tr-one img\"),\n" +
    "            g = c.find(\".o-o-t-l-c-l-tr-one p:eq(0)\").text(), f = {};\n" +
    "        f.url = \"http://mobile.yangkeduo.com/goods.html?goods_id=\" + g;\n" +
    "        f.img = b.attr(\"src\");\n" +
    "        f.title = c.find(\".o-o-t-l-c-l-tr-two\").text();\n" +
    "        f.price = c.find(\"td:eq(4)\").text();\n" +
    "        f.num = 1;\n" +
    "        d.push(f);\n" +
    "        a.items = JSON.stringify(d);\n" +
    "        a.orderId = c.find(\"li:contains('订单编号：')\").text().replace(\"订单编号：\", \"\").trim();\n" +
    "        if (\"\" != a.orderId) {\n" +
    "            c.find(\"td:eq(2) em\").remove();\n" +
    "            a.status = c.find(\"td:eq(2)\").text();\n" +
    "            a.orderDate = c.find(\"li:contains('成团时间：')\").text().replace(\"成团时间：\", \"\").trim();\n" +
    "            a.orderBuyer = c.find(\"li:contains('收货人:')\").text().replace(\"收货人:\", \"\").trim();\n" +
    "            a.payMoney = c.find(\"td:eq(4)\").text();\n" +
    "            a.address = \"\";\n" +
    "            a.comment = \"\";\n" +
    "            null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));\n" +
    "            null == skusTaoURLMapList && (skusTaoURLMapList = localStorage.skusTaoURLMapList ? JSON.parse(localStorage.skusTaoURLMapList) : [], null == skusTaoURLMapList && (skusTaoURLMapList = []));\n" +
    "            console.log(skusTaoURLMapList);\n" +
    "            for (var e = null, d = 0; d < orderList.length; d++)\n" +
    "                if (orderList[d].OrderId == a.orderId && orderList[d].LinkMan) {\n" +
    "                    e = orderList[d];\n" +
    "                    break\n" +
    "                }\n" +
    "            if (null == e) {\n" +
    "                $.ajax({\n" +
    "                    type: \"post\",\n" +
    "                    url: \"http://\" + location.host + \"/mars/shop/orderDetail\",\n" +
    "                    datType: \"JSON\",\n" +
    "                    contentType: \"application/json\",\n" +
    "                    data: '{\"orderSn\":\"' + a.orderId + '\"}',\n" +
    "                    success: function (b) {\n" +
    "                        if (b.result) {\n" +
    "                            var d = b.result;\n" +
    "                            null != b.result.data && (d = b.result.data[0]);\n" +
    "                            e = {OrderId: a.orderId};\n" +
    "                            e.LinkMan = d.receive_name;\n" +
    "                            \"\" == d.receive_name && (e.LinkMan = \"-\");\n" +
    "                            e.Address = d.province_name + \" \" + d.city_name + \" \" + d.district_name + \" \" + d.shipping_address;\n" +
    "                            e.Phone = d.receive_mobile;\n" +
    "                            e.skus =\n" +
    "                                d.spec;\n" +
    "                            e.Buyer = \"\";\n" +
    "                            orderList.push(e);\n" +
    "                            localStorage.orderList = JSON.stringify(orderList);\n" +
    "                            getOrderButton(c)\n" +
    "                        }\n" +
    "                    },\n" +
    "                    error: function () {\n" +
    "                        showOrderInfo2(c, {skus: \"拼多多服务器繁忙，导致无法获取订单信息，请稍后再试\"})\n" +
    "                    }\n" +
    "                });\n" +
    "            }\n" +
    "            else {\n" +
    "\n" +
    "                (null != e && (e.Buyer && 10 > e.Buyer.length && (e.Buyer = \"\"), a.address = e.LinkMan + \",\" + e.Phone + \",\" + e.Address, a.comment = e.Buyer, a.skus = e.skus, showOrderInfo2(c, e)),\n" +
    "                        a.version = version, d = c.find(\".o-o-t-l-c-l-tr-two\").text(),\n" +
    "                    null != d && \"\" != d && c.find(\".o-o-t-l-c-l-tr-two\").empty().append('<a target=\"_blank\" href=\"' + f.url + '\" class=\"m-view\">' + d + \"</a>\"),\n" +
    "                        f = \"/Pdd.html#/orders/order_detail/index?Express=1&sn=\" + a.orderId,\n" +
    "                        c.find(\".z-handexpress\").remove(),\n" +
    "                        c.find(\".o-o-t-l-c-l-tr td:last\").append('<a class=\"z-handexpress\" target=\"_blank\" href=\"' + f + '\"><br>手工发货</a>')\n" +
    "                    // ,\n" +
    "                    //     $.ajax({\n" +
    "                    //     method: \"post\", url: serviceHost + \"/User/Service/GetOrderButton\", data: a,\n" +
    "                    //     success: function (a) {\n" +
    "                    //         if (\"\" != a && void 0 != a) {\n" +
    "                    //             var b = c.find(\"td:eq(2)\");\n" +
    "                    //             b.find(\".btn-row\").remove();\n" +
    "                    //             a = $(a);\n" +
    "                    //             a.css(\"min-width\", \"78px\");\n" +
    "                    //             a.find(\".btn-black\").css(\"color\", \"white\");\n" +
    "                    //             b.append(a);\n" +
    "                    //             a.find(\"span[data-role=order]\").each(function () {\n" +
    "                    //                 var a = base64Encode($(this).attr(\"data-url\"));\n" +
    "                    //                 $(this).attr(\"data-url\", a);\n" +
    "                    //                 $(this).click(function () {\n" +
    "                    //                     openOrder(this)\n" +
    "                    //                 })\n" +
    "                    //             });\n" +
    "                    //             a.find(\".btn-black\").click(function () {\n" +
    "                    //                 $(this).hide()\n" +
    "                    //             })\n" +
    "                    //         }\n" +
    "                    //         setTimeout(\"getOrderButton()\", 50)\n" +
    "                    //     }, error: function () {\n" +
    "                    //         setTimeout(\"getOrderButton()\", 500)\n" +
    "                    //     }, complete: function () {\n" +
    "                    //         $(\"span:contains('修改关联')\").length + $(\"span:contains('宝贝关联')\").length >=\n" +
    "                    //         orderRows.length - 1 && $(\"body\").attr(\"location\", \"\")\n" +
    "                    //     }\n" +
    "                    // })\n" +
    "                );\n" +
    "                var openUrl = null;\n" +
    "                for (var index = 0; index < skusTaoURLMapList.length; index++) {\n" +
    "                    if (skusTaoURLMapList[index].type == base64Encode(e.skus) && skusTaoURLMapList[index].taoUrl != null) {\n" +
    "                        openUrl = skusTaoURLMapList[index].taoUrl;\n" +
    "                    }\n" +
    "                }\n" +
    "\n" +
    "                if (openUrl != null)\n" +
    "                    a = '<div class=\\'btn-row\\'><span class=\\'btn-white\\' data-type=\\'' + base64Encode(e.skus) + '\\' data-role=\\'link\\'>修改关联</span></div>' +\n" +
    "                        '<div class=\\'btn-row\\'><span class=\\'btn-white\\' data-url=\\'https://s.click.taobao.com/t?e=m%3D2%26s%3DivSC1VHZI70cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67oNqvn8gOR36%2FpU2SWJU0cL80%2BvhHHSKIrDIwwvS2CcKzlFcF9x7QEVWKYKulPel0AeqLYeTC9d9fC0OC7iiPi%2BlTO%2Fc%2FrsR2uo18ar9X2zVIYULNg46oBA%3D&pvid=10_110.84.171.92_1079_1507521750811\\' data-role=\\'order\\' title=\\'\\'>再次采购</span></div>';\n" +
    "                else {\n" +
    "                    a = '<div class=\\'btn-row\\'><span class=\\'btn-red\\' data-type=\\'' + base64Encode(e.skus) + '\\' data-role=\\'link\\'>添加关联</span></div>';\n" +
    "                }\n" +
    "\n" +
    "\n" +
    "                if (\"\" != a && void 0 != a) {\n" +
    "                    var b = c.find(\"td:eq(2)\");\n" +
    "                    b.find(\".btn-row\").remove();\n" +
    "                    a = $(a);\n" +
    "                    a.css(\"min-width\", \"78px\");\n" +
    "                    a.find(\".btn-black\").css(\"color\", \"white\");\n" +
    "                    b.append(a);\n" +
    "\n" +
    "\n" +
    "                    a.find(\"span[data-role=link]\").click(function () {\n" +
    "                        $(this).hide();\n" +
    "                        console.log(\"clicked!!!\")\n" +
    "                        var type = $(this).attr(\"data-type\");\n" +
    "                        var openUrl = null;\n" +
    "                        console.log(skusTaoURLMapList);\n" +
    "                        for (var index = 0; index < skusTaoURLMapList.length; index++) {\n" +
    "                            if (skusTaoURLMapList[index].type == type && skusTaoURLMapList[index].taoUrl != null) {\n" +
    "                                openUrl = skusTaoURLMapList[index].taoUrl;\n" +
    "                            }\n" +
    "                        }\n" +
    "\n" +
    "                        console.log($(this).parents(\"table[class=pdd-dui-table]\"));\n" +
    "                        if (openUrl == null) {\n" +
    "                            $(this).parents(\"table[class=pdd-dui-table]\").append(\"<ul class='ul-modify'><li><input class='input-modify' type='text' /></li><li><input data-type=\\'\" + (type) + \"\\' class='btn-rosy url-modify' type='button' value='确认'/></li> </ul>\");\n" +
    "                        }\n" +
    "                        else {\n" +
    "                            $(this).parents(\"table[class=pdd-dui-table]\").append(\"<ul class='ul-modify'><li><input class='input-modify' type='text' value=\\'\" + openUrl + \"\\'/></li> <li><input data-type=\\'\" + (type) + \"\\' class='btn-rosy  url-modify' type='button' value='确认'/></li> </ul>\");\n" +
    "                        }\n" +
    "\n" +
    "                        $(this).parents(\".o-o-t-l-c-list\").find(\"input[type=button]\").click(function () {\n" +
    "                            console.log($(this).parents(\".o-o-t-l-c-list\").find(\"span[data-role=link]\"));\n" +
    "\n" +
    "                            var map = null;\n" +
    "                            var data_type = $(this).attr(\"data-type\");\n" +
    "                            for (var index = 0; index < skusTaoURLMapList.length; index++) {\n" +
    "                                if (skusTaoURLMapList[index].type == data_type) {\n" +
    "                                    map = skusTaoURLMapList[index];\n" +
    "                                }\n" +
    "                            }\n" +
    "                            console.log(map);\n" +
    "                            if (map != null)\n" +
    "                                map.taoUrl = $('.input-modify').val();\n" +
    "                            else\n" +
    "                                skusTaoURLMapList.push({type: data_type, taoUrl: $('.input-modify').val()});\n" +
    "\n" +
    "                            console.log(skusTaoURLMapList);\n" +
    "                            localStorage.skusTaoURLMapList = JSON.stringify(skusTaoURLMapList);\n" +
    "                            location.reload();\n" +
    "                        });\n" +
    "\n" +
    "                    });\n" +
    "\n" +
    "                    a.find(\"span[data-role=order]\").each(function () {\n" +
    "                        // var a = base64Encode($(this).attr(\"data-url\"));\n" +
    "                        $(this).attr(\"data-url\", base64Encode(openUrl));\n" +
    "                        $(this).click(function () {\n" +
    "                            openOrder(this)\n" +
    "                        })\n" +
    "                    });\n" +
    "\n" +
    "\n" +
    "                    a.find(\".btn-black\").click(function () {\n" +
    "                        $(this).hide()\n" +
    "                    });\n" +
    "                }\n" +
    "            }\n" +
    "        }\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function openOrder(c) {\n" +
    "    for (var a = $(c).parent(); 0 < a.length && !a.hasClass(\"o-o-t-l-c-list\");) a = a.parent();\n" +
    "    a.hasClass(\"o-o-t-l-c-list\") ? (a = a.find(\"li:contains('订单编号：')\").text().replace(\"订单编号：\", \"\").trim(), a = \"http://\" + location.host + \"/Pdd.html#orders/order_detail/index?OrderUrl=\" + $(c).attr(\"data-url\") + \"&sn=\" + a + \"&skumap=\" + $(c).attr(\"data-skumap\"), window.open(a), a = $(c).text(), 0 <= a.indexOf(\"采购下单\") && ($(c).text(a.replace(\"采购下单\",\n" +
    "        \"再次采购\")), $(c).removeClass(\"btn-blue\").addClass(\"btn-white\"))) : alert(\"下单失败，找不到订单节点\")\n" +
    "}\n" +
    "\n" +
    "function showOrderInfo(c, a) {\n" +
    "    if (void 0 != a && \"\" != a) {\n" +
    "        c.find(\".data-info\").remove();\n" +
    "        null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));\n" +
    "        for (var d = 0; d < orderList.length; d++) if (orderList[d].OrderId == a) return showOrderInfo2(c, orderList[d]), !1;\n" +
    "        0 < c.find(\".data-info\").length || $.post(\"http://\" + location.host + \"/orders?sn=\" + a, {}, function (b) {\n" +
    "            if (b.result) {\n" +
    "                b = b.data[0];\n" +
    "                var d = {OrderId: a};\n" +
    "                d.LinkMan = b.receive_name;\n" +
    "                d.Address = b.province_name + \" \" + b.city_name +\n" +
    "                    \" \" + b.district_name + \" \" + b.shipping_address;\n" +
    "                d.Phone = b.receive_mobile;\n" +
    "                d.skus = b.spec;\n" +
    "                d.Buyer = \"\";\n" +
    "                orderList.push(d);\n" +
    "                localStorage.orderList = JSON.stringify(orderList);\n" +
    "                showOrderInfo2(c, d)\n" +
    "            }\n" +
    "        })\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function showOrderInfo2(c, a) {\n" +
    "    c.find(\".data-info\").remove();\n" +
    "    var d = $('<table class=\"pdd-dui-table data-info\"><tr><td style=\" padding: 5px; font-size: 13px; \"><b>商品规格：</b>' + a.skus + \"<br><b>收货信息：</b>\" + a.LinkMan + \"，\" + a.Phone + \"，\" + a.Address + '<br><b>采购备注：</b><span class=\"buyerMessage\">' + a.Buyer + \"</span></td></tr></table>\");\n" +
    "    c.append(d);\n" +
    "    for (var b = 0; b < orderList.length && orderList[b].OrderId != a.OrderId; b++) orderList[b].Phone == a.Phone &&\n" +
    "    (d.find(\"td\").css(\"color\", \"#A00E0E\"), d.attr(\"title\", \"重复购买：\" + orderList[b].OrderId + \"，\" + orderList[b].Buyer));\n" +
    "    void 0 != a.Buyer && null != a.Buyer && \"\" != a.Buyer || 0 != c.find(\".btn-blue\").length || $.get(\"http://\" + location.host + \"/orders/note/\" + a.OrderId, {}, function (b) {\n" +
    "        if (b.result) {\n" +
    "            b = b.data;\n" +
    "            var d = /\\d{15,}/;\n" +
    "            if (void 0 != b.length) for (var e = 0; e < b.length; e++) if (void 0 != b[e].note && null != b[e].note && !(0 < b[e].note.indexOf(\"快递单号\")) && d.test(b[e].note)) {\n" +
    "                a.Buyer = b[e].note;\n" +
    "                localStorage.orderList =\n" +
    "                    JSON.stringify(orderList);\n" +
    "                c.find(\".buyerMessage\").text(a.Buyer);\n" +
    "                break\n" +
    "            }\n" +
    "        }\n" +
    "    })\n" +
    "}\n" +
    "\n" +
    "function batchSubmit() {\n" +
    "    if (!(0 < $(\".batchsubmit\").length)) {\n" +
    "        var c = $('<span class=\"btn-black batchsubmit\" style=\" width: 80px; line-height: 20px; display: inline-block; text-align: center; margin: 0 10px 0 10px;\">批量发货</span>');\n" +
    "        $(\"a:contains('批量导出')\").parent().append(c);\n" +
    "        c.click(function () {\n" +
    "            failCount = successCount = 0;\n" +
    "            $.ajaxSetup({async: !1});\n" +
    "            $(\"a:contains('采购发货'):visible\").each(function () {\n" +
    "                var a = $(this).attr(\"href\"), c = $(this).parents(\"table\").find(\".chkItem\");\n" +
    "                if (!(0 < c.length && 0 == c.prop(\"checked\"))) {\n" +
    "                    var c = a.indexOf(\"?OrderId=\"), b = a.substring(c), b = decodeURIComponent(b) + \"&\",\n" +
    "                        a = getSubstring(b, \"OrderId=\", \"&\"), c = getSubstring(b, \"ExpressId=\", \"&\"),\n" +
    "                        b = getSubstring(b, \"ExpressName=\", \"&\");\n" +
    "                    if (\"\" != $.trim(b)) {\n" +
    "                        if (\"中国邮政\" == b || \"邮政国内小包\" == b) b = \"邮政快递包裹\";\n" +
    "                        if (0 <= b.indexOf(\"ems\") || 0 <= b.indexOf(\"EMS\")) b = \"邮政EMS\";\n" +
    "                        \"OTHER\" == b && (b = \"安能物流\");\n" +
    "                        b = b.replace(\"速递\", \"快递\").replace(\"速运\",\n" +
    "                            \"快递\").replace(\"快运\", \"快递\");\n" +
    "                        autoSubmit(a, b, c);\n" +
    "                        $(this).hide()\n" +
    "                    }\n" +
    "                }\n" +
    "            });\n" +
    "            $.ajaxSetup({async: !0});\n" +
    "            alert(\"发货完成，成功：\" + successCount + \"，失败：\" + failCount)\n" +
    "        });\n" +
    "        $(\".o-o-t-l-content\").append(c.clone(!0));\n" +
    "        c = $(\"<label><input type=checkbox class=chkAll checked />全选</label>\");\n" +
    "        $(\"a:contains('批量导出')\").parent().append(c);\n" +
    "        c.find(\"input\").click(function () {\n" +
    "            $(this).is(\":checked\") ? $(\".chkItem\").prop(\"checked\", !0) : $(\".chkItem\").removeAttr(\"checked\")\n" +
    "        })\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function autoSubmit(c, a, d) {\n" +
    "    var b = \"\", g = \"\";\n" +
    "    $.each(shipping, function (c, d) {\n" +
    "        if (0 <= d.shipping_name.indexOf(a) || 0 <= a.indexOf(d.shipping_name)) return b = d.shipping_id, g = d.shipping_name, !1\n" +
    "    });\n" +
    "    if (\"\" != b) {\n" +
    "        var f = \"http://\" + location.host + \"/malls/\" + user.shopid + \"/orders/shipping\", e = {};\n" +
    "        e[\"shippings[0][order_sn]\"] = c;\n" +
    "        e[\"shippings[0][shipping_id]\"] = b;\n" +
    "        e[\"shippings[0][shipping_name]\"] = g;\n" +
    "        e[\"shippings[0][tracking_number]\"] = d;\n" +
    "        e.overwrite = \"0\";\n" +
    "        $.ajax({\n" +
    "            method: \"put\", url: f, data: e, success: function (a) {\n" +
    "                a = a[c] + \"\";\n" +
    "                0 <= a.indexOf(\"SUCCESS\") ?\n" +
    "                    successCount++ : \"\" != a && failCount++\n" +
    "            }\n" +
    "        })\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "chrome.extension.onRequest.addListener(function (c, a, d) {\n" +
    "    if (\"setOrder\" == c.type) {\n" +
    "        var b = $(\"#orderRemark_\" + c.orderid), g = $(\"#remark_\" + c.orderid);\n" +
    "        a = c.comment;\n" +
    "        \"\" != b.text() && (a = b.text() + \"，\" + a);\n" +
    "        0 < g.length ? g[0].click() : alert(\"找不到添加备注按钮\");\n" +
    "        b = $(\"#remarkArea\");\n" +
    "        if (0 < b.length) {\n" +
    "            if (b.val() == a) {\n" +
    "                console.log(\"重复备注\");\n" +
    "                return\n" +
    "            }\n" +
    "            b.val(a);\n" +
    "            $(\"#orderRemarkOrderId\").val(c.orderid);\n" +
    "            $(\"#rSubmitButton\").click()\n" +
    "        } else return console.log(\"找不到备注输入框\"), d(!1);\n" +
    "        a = serviceHost + \"/main/main/saveorderinfo\";\n" +
    "        c = {orderId: c.orderid, buyOrderId: c.buyOrderId, buyAccount: unescape(c.buyAccount)};\n" +
    "        chrome.extension.sendRequest({type: \"ajax\", url: a, data: c}, function (a) {\n" +
    "            console.log(a)\n" +
    "        });\n" +
    "        return d(!0)\n" +
    "    }\n" +
    "});";