var scriptPinDuoDuoSample = "var user = null, tabid = null, orderList = null, skusTaoURLMapList = null;\n" +
    "    shipping = [{shipping_id: \"1\", shipping_name: \"\u7533\u901a\u5feb\u9012\"}, {\n" +
    "        shipping_id: \"3\",\n" +
    "        shipping_name: \"\u767e\u4e16\u5feb\u9012\"\n" +
    "    }, {shipping_id: \"44\", shipping_name: \"\u987a\u4e30\u5feb\u9012\"}, {\n" +
    "        shipping_id: \"85\",\n" +
    "        shipping_name: \"\u5706\u901a\u5feb\u9012\"\n" +
    "    }, {shipping_id: \"88\", shipping_name: \"\u5954\u5954\u901f\u8fbe\"}, {\n" +
    "        shipping_id: \"89\",\n" +
    "        shipping_name: \"\u8d5b\u6fb3\u9012\"\n" +
    "    }, {shipping_id: \"90\", shipping_name: \"\u665f\u90a6\u7269\u6d41\"}, {\n" +
    "        shipping_id: \"115\",\n" +
    "        shipping_name: \"\u4e2d\u901a\u5feb\u9012\"\n" +
    "    },\n" +
    "        {shipping_id: \"116\", shipping_name: \"\u5168\u5cf0\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"117\",\n" +
    "            shipping_name: \"\u4f18\u901f\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"118\", shipping_name: \"\u90ae\u653fEMS\"}, {\n" +
    "            shipping_id: \"119\",\n" +
    "            shipping_name: \"\u5929\u5929\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"120\", shipping_name: \"\u4eac\u4e1c\u914d\u9001\"}, {\n" +
    "            shipping_id: \"121\",\n" +
    "            shipping_name: \"\u97f5\u8fbe\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"122\", shipping_name: \"\u5feb\u6377\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"124\",\n" +
    "            shipping_name: \"\u56fd\u901a\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"128\", shipping_name: \"\u5f53\u5f53\u51fa\u7248\u914d\u9001\"},\n" +
    "        {shipping_id: \"129\", shipping_name: \"\u5b85\u6025\u9001\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"130\",\n" +
    "            shipping_name: \"\u5982\u98ce\u8fbe\"\n" +
    "        }, {shipping_id: \"131\", shipping_name: \"\u5fb7\u90a6\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"132\",\n" +
    "            shipping_name: \"\u90ae\u653f\u5feb\u9012\u5305\u88f9\"\n" +
    "        }, {shipping_id: \"133\", shipping_name: \"\u9f99\u90a6\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"135\",\n" +
    "            shipping_name: \"\u8054\u90a6\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"136\", shipping_name: \"\u4e5d\u66f3\u4f9b\u5e94\u94fe\"}, {\n" +
    "            shipping_id: \"137\",\n" +
    "            shipping_name: \"\u767e\u57ce\u5f53\u65e5\u8fbe\u5feb\u9012\"\n" +
    "        },\n" +
    "        {shipping_id: \"138\", shipping_name: \"\u8fbe\u8fbe\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"139\",\n" +
    "            shipping_name: \"\u51bb\u5230\u5bb6\u7269\u6d41\"\n" +
    "        }, {shipping_id: \"140\", shipping_name: \"\u5357\u4eac\u665f\u90a6\"}, {\n" +
    "            shipping_id: \"141\",\n" +
    "            shipping_name: \"\u5c71\u897f\u7ea2\u9a6c\u7532\"\n" +
    "        }, {shipping_id: \"142\", shipping_name: \"\u4e07\u8c61\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"143\",\n" +
    "            shipping_name: \"\u7acb\u5373\u9001\"\n" +
    "        }, {shipping_id: \"144\", shipping_name: \"\u95e8\u5bf9\u95e8\"}, {\n" +
    "            shipping_id: \"147\",\n" +
    "            shipping_name: \"\u4e30\u7a0b\"\n" +
    "        }, {shipping_id: \"148\", shipping_name: \"\u5b89\u8fbe\u4fe1\"},\n" +
    "        {shipping_id: \"149\", shipping_name: \"\u6d77\u5916\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"150\",\n" +
    "            shipping_name: \"\u98de\u8fdc\u7269\u6d41\"\n" +
    "        }, {shipping_id: \"151\", shipping_name: \"\u5357\u90fd\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"152\",\n" +
    "            shipping_name: \"\u6c47\u6587\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"154\", shipping_name: \"\u9ec4\u9a6c\u7532\"}, {\n" +
    "            shipping_id: \"155\",\n" +
    "            shipping_name: \"\u901f\u5c14\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"156\", shipping_name: \"\u4e9a\u9a6c\u900a\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"157\",\n" +
    "            shipping_name: \"\u9ed1\u732b\u5b85\u6025\u4fbf\"\n" +
    "        }, {\n" +
    "            shipping_id: \"158\",\n" +
    "            shipping_name: \"\u987a\u4e30\u822a\u8fd0\"\n" +
    "        }, {shipping_id: \"159\", shipping_name: \"\u5706\u901a\u822a\u8fd0\"}, {\n" +
    "            shipping_id: \"160\",\n" +
    "            shipping_name: \"\u62fc\u597d\u8d27\"\n" +
    "        }, {shipping_id: \"161\", shipping_name: \"\u4e0a\u6d77\u8d5b\u6fb3\u9012\"}, {\n" +
    "            shipping_id: \"162\",\n" +
    "            shipping_name: \"\u57ce\u5e02100 \"\n" +
    "        }, {shipping_id: \"163\", shipping_name: \"\u829d\u9ebb\u5f00\u95e8\"}, {\n" +
    "            shipping_id: \"164\",\n" +
    "            shipping_name: \"\u987a\u6377\u4e30\u8fbe\"\n" +
    "        }, {shipping_id: \"165\", shipping_name: \"\u6c47\u901a\u5c0f\u7ea2\u9a6c\"}, {\n" +
    "            shipping_id: \"166\",\n" +
    "            shipping_name: \"\u8fbd\u5b81\u5c0f\u7ea2\u9a6c\"\n" +
    "        },\n" +
    "        {shipping_id: \"167\", shipping_name: \"\u8fbd\u5b81\u9ec4\u9a6c\u7532\"}, {\n" +
    "            shipping_id: \"168\",\n" +
    "            shipping_name: \"\u6c5f\u82cf\u8d5b\u6fb3\u9012\"\n" +
    "        }, {shipping_id: \"169\", shipping_name: \"\u4e09\u4eba\u884c\"}, {\n" +
    "            shipping_id: \"170\",\n" +
    "            shipping_name: \"\u901a\u548c\u4f73\u9012\"\n" +
    "        }, {shipping_id: \"171\", shipping_name: \"\u901f\u6377\"}, {\n" +
    "            shipping_id: \"172\",\n" +
    "            shipping_name: \"\u4fe1\u8bfa\u8fc5\u8fbe\"\n" +
    "        }, {shipping_id: \"173\", shipping_name: \"\u98ce\u5148\u751f\"}, {\n" +
    "            shipping_id: \"174\",\n" +
    "            shipping_name: \"\u5bbd\u5bb9\"\n" +
    "        }, {shipping_id: \"175\", shipping_name: \"\u5e7f\u5dde\u9014\u5ba2\"},\n" +
    "        {shipping_id: \"176\", shipping_name: \"\u5c0f\u7ea2\u5e3d\"}, {\n" +
    "            shipping_id: \"177\",\n" +
    "            shipping_name: \"\u9e4f\u8fbe\"\n" +
    "        }, {shipping_id: \"178\", shipping_name: \"\u798f\u5efa\u98de\u8fdc\"}, {\n" +
    "            shipping_id: \"179\",\n" +
    "            shipping_name: \"E\u7279\u5feb\"\n" +
    "        }, {shipping_id: \"180\", shipping_name: \"\u5546\u5bb6\u81ea\u5efa\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"181\",\n" +
    "            shipping_name: \"\u4e91\u9e1f\"\n" +
    "        }, {shipping_id: \"182\", shipping_name: \"\u4fdd\u8fbe\"}, {\n" +
    "            shipping_id: \"183\",\n" +
    "            shipping_name: \"\u8de8\u8d8a\u901f\u9012\"\n" +
    "        }, {shipping_id: \"184\", shipping_name: \"\u5409\u6797\u9ec4\u9a6c\u7532\"},\n" +
    "        {shipping_id: \"185\", shipping_name: \"\u57ce\u9645\u901f\u9012\"}, {\n" +
    "            shipping_id: \"186\",\n" +
    "            shipping_name: \"usps\"\n" +
    "        }, {shipping_id: \"187\", shipping_name: \"\u9752\u5c9b\u5b89\u6377\"}, {\n" +
    "            shipping_id: \"188\",\n" +
    "            shipping_name: \"\u5927\u97e9\u901a\u8fd0\"\n" +
    "        }, {shipping_id: \"189\", shipping_name: \"\u68d2\u68d2\u7cd6\"}, {\n" +
    "            shipping_id: \"190\",\n" +
    "            shipping_name: \"\u9014\u9c9c\"\n" +
    "        }, {shipping_id: \"191\", shipping_name: \"\u83dc\u9e1f\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"193\",\n" +
    "            shipping_name: \"\u6c47\u7ad9\u4f17\u4eab\"\n" +
    "        }, {shipping_id: \"194\", shipping_name: \"\u6d3e\u5ba2\"}, {\n" +
    "            shipping_id: \"195\",\n" +
    "            shipping_name: \"\u8d1d\u6d77\u56fd\u9645\u901f\u9012\"\n" +
    "        }, {shipping_id: \"196\", shipping_name: \"\u4e30\u6cf0\u56fd\u9645\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"197\",\n" +
    "            shipping_name: \"\u73af\u7403\u901f\u8fd0\"\n" +
    "        }, {shipping_id: \"198\", shipping_name: \"168\u987a\u53d1\u901f\u9012\"}, {\n" +
    "            shipping_id: \"199\",\n" +
    "            shipping_name: \"\u5168\u7403\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"200\", shipping_name: \"\u7a0b\u5149\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"201\",\n" +
    "            shipping_name: \"\u5168\u4e00\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"203\", shipping_name: \"\u4e1c\u9a8f\u5feb\u6377\"}, {\n" +
    "            shipping_id: \"205\",\n" +
    "            shipping_name: \"\u8fdc\u6210\u5feb\u8fd0\"\n" +
    "        }, {shipping_id: \"206\", shipping_name: \"\u98ce\u817e\u56fd\u9645\u901f\u9012\"}, {\n" +
    "            shipping_id: \"207\",\n" +
    "            shipping_name: \"\u7b28\u9e1f\u8f6c\u8fd0\"\n" +
    "        }, {shipping_id: \"208\", shipping_name: \"\u5b89\u80fd\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"209\",\n" +
    "            shipping_name: \"\u8054\u4f17\u56fd\u9645\u5feb\u8fd0\"\n" +
    "        }, {shipping_id: \"210\", shipping_name: \"\u5929\u5730\u534e\u5b87\"}, {\n" +
    "            shipping_id: \"211\",\n" +
    "            shipping_name: \"\u4e2d\u90ae\u901f\u9012\"\n" +
    "        }, {shipping_id: \"212\", shipping_name: \"hi\u6dd8\u6613 \"}, {\n" +
    "            shipping_id: \"213\",\n" +
    "            shipping_name: \"EMS-\u56fd\u9645\u4ef6\"\n" +
    "        }, {shipping_id: \"214\", shipping_name: \"\u4e2d\u94c1\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"215\",\n" +
    "            shipping_name: \"\u695a\u6e90\u7269\u6d41\"\n" +
    "        }, {shipping_id: \"216\", shipping_name: \"\u65b0\u90a6\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"217\",\n" +
    "            shipping_name: \"Flash Express\"\n" +
    "        }, {shipping_id: \"218\", shipping_name: \"\u65b0\u987a\u4e30NSF\"}, {\n" +
    "            shipping_id: \"219\",\n" +
    "            shipping_name: \"\u9510\u6717\u5feb\u9012\"\n" +
    "        }, {shipping_id: \"220\", shipping_name: \"\u738b\u9053\u56fd\u9645\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"221\",\n" +
    "            shipping_name: \"DCS GLOBAL\"\n" +
    "        },\n" +
    "        {shipping_id: \"222\", shipping_name: \"\u8fc5\u901f\u5feb\u9012\"}, {\n" +
    "            shipping_id: \"223\",\n" +
    "            shipping_name: \"\u5bcc\u817e\u8fbe\u56fd\u9645\u8d27\u8fd0\"\n" +
    "        }, {shipping_id: \"224\", shipping_name: \"\u7426\u5cf0\u7269\u6d41\"}, {\n" +
    "            shipping_id: \"225\",\n" +
    "            shipping_name: \"\u91d1\u8fd0\u901a\u7269\u6d41\"\n" +
    "        }, {shipping_id: \"226\", shipping_name: \"EWE\u5168\u7403\u5feb\u9012\"}], successCount = 0, failCount = 0,\n" +
    "    orderRows = [], orderIndex = 0;\n" +
    "init();\n" +
    "\n" +
    "function init() {\n" +
    "    if (\"undefined\" == typeof $ || \"undefined\" == typeof getUserInfo) setTimeout(\"init()\", 500); else if (0 == $(\".o-o-t-l-content\").length) setTimeout(\"init()\", 500); else if ($(\"body\").attr(\"location\") != location.href) {\n" +
    "        $(\"body\").attr(\"location\", location.href);\n" +
    "        orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];\n" +
    "        null == orderList && (orderList = []);\n" +
    "        \"div[data-id]\" == orderList.selector && (orderList.length = 0, orderList = []);\n" +
    "        for (; 3E3 < orderList.length;) orderList.splice(0, 1);\n" +
    "        $(\"body\").on(\"mousedown\",\n" +
    "            \".pdd-pagination a\", function () {\n" +
    "                $(\"body\").attr(\"location\", \"\");\n" +
    "                $(\"body\").attr(\"clen\", $(\".o-o-t-l-content\").html().length);\n" +
    "                setTimeout(\"checkItems()\", 1E3)\n" +
    "            });\n" +
    "        $(\".ez-box a:contains('\u67e5\u8be2')\").click(function () {\n" +
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
    "    null == user || \"\" == user.shopid ? setTimeout(\"checkItems()\", 1E3) : 0 == $(\".o-o-t-l-c-list\").length ? setTimeout(\"checkItems()\", 1E3) : 1 == $(\".o-o-t-l-c-list\").length && 0 < $($(\".o-o-t-l-c-list\")[0]).text().indexOf(\"\u6ca1\u6709\u67e5\u8be2\u5230\") ? setTimeout(\"checkItems()\", 1E3) : $(\"body\").attr(\"clen\") == $(\".o-o-t-l-content\").html().length ? setTimeout(\"checkItems()\", 1E3) : ($(\"th:contains('\u5546\u54c1ID')\").html(\"<label><input type=checkbox class=chkItem checked style='vertical-align: -2px;' />\u5546\u54c1ID</label>\"),\n" +
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
    "        a.orderId = c.find(\"li:contains('\u8ba2\u5355\u7f16\u53f7\uff1a')\").text().replace(\"\u8ba2\u5355\u7f16\u53f7\uff1a\", \"\").trim();\n" +
    "        if (\"\" != a.orderId) {\n" +
    "            c.find(\"td:eq(2) em\").remove();\n" +
    "            a.status = c.find(\"td:eq(2)\").text();\n" +
    "            a.orderDate = c.find(\"li:contains('\u6210\u56e2\u65f6\u95f4\uff1a')\").text().replace(\"\u6210\u56e2\u65f6\u95f4\uff1a\", \"\").trim();\n" +
    "            a.orderBuyer = c.find(\"li:contains('\u6536\u8d27\u4eba:')\").text().replace(\"\u6536\u8d27\u4eba:\", \"\").trim();\n" +
    "            a.payMoney = c.find(\"td:eq(4)\").text();\n" +
    "            a.address = \"\";\n" +
    "            a.comment = \"\";\n" +
    "            null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));\n" +
    "            for (var e = null, d = 0; d < orderList.length; d++) if (orderList[d].OrderId ==\n" +
    "                a.orderId && orderList[d].LinkMan) {\n" +
    "                e = orderList[d];\n" +
    "                break\n" +
    "            }\n" +
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
    "                        showOrderInfo2(c, {skus: \"\u62fc\u591a\u591a\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u5bfc\u81f4\u65e0\u6cd5\u83b7\u53d6\u8ba2\u5355\u4fe1\u606f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\"})\n" +
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
    "                        c.find(\".o-o-t-l-c-l-tr td:last\").append('<a class=\"z-handexpress\" target=\"_blank\" href=\"' + f + '\"><br>\u624b\u5de5\u53d1\u8d27</a>')\n" +
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
    "                    //         $(\"span:contains('\u4fee\u6539\u5173\u8054')\").length + $(\"span:contains('\u5b9d\u8d1d\u5173\u8054')\").length >=\n" +
    "                    //         orderRows.length - 1 && $(\"body\").attr(\"location\", \"\")\n" +
    "                    //     }\n" +
    "                    // })\n" +
    "                );\n" +
    "                a = '<div class=\\'btn-row\\'><input type=\"text\" value=\\\"https://s.click.taobao.com/t?e=m%3D2%26s%3DivSC1VHZI70cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67oNqvn8gOR36%2FpU2SWJU0cL80%2BvhHHSKIrDIwwvS2CcKzlFcF9x7QEVWKYKulPel0AeqLYeTC9d9fC0OC7iiPi%2BlTO%2Fc%2FrsR2uo18ar9X2zVIYULNg46oBA%3D&pvid=10_110.84.171.92_1079_1507521750811\\\" </div><div class=\\'btn-row\\'><span class=\\'btn-white\\' onclick=\\'window.open(\\\"main.html\\\", \\\"testwindow\\\", \\\"width=700,height=600\\\")\\' data-role=\\'link\\'>修改关联</span></div><div class=\\'btn-row\\'><span class=\\'btn-white\\' data-url=\\'https://s.click.taobao.com/t?e=m%3D2%26s%3DivSC1VHZI70cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67oNqvn8gOR36%2FpU2SWJU0cL80%2BvhHHSKIrDIwwvS2CcKzlFcF9x7QEVWKYKulPel0AeqLYeTC9d9fC0OC7iiPi%2BlTO%2Fc%2FrsR2uo18ar9X2zVIYULNg46oBA%3D&pvid=10_110.84.171.92_1079_1507521750811\\' data-role=\\'order\\' title=\\'\\'>????</span></div>';\n" +
    "                if (\"\" != a && void 0 != a) {\n" +
    "                    var b = c.find(\"td:eq(2)\");\n" +
    "                    b.find(\".btn-row\").remove();\n" +
    "                    a = $(a);\n" +
    "                    var elements = a;\n" +
    "                    a.css(\"min-width\", \"78px\");\n" +
    "                    a.find(\".btn-black\").css(\"color\", \"white\");\n" +
    "                    b.append(a);\n" +
    "                    var openUrl = a.find(\"input\").val();\n" +
    "                    a.find(\"span[data-role=order]\").each(function () {\n" +
    "                        // var a = base64Encode($(this).attr(\"data-url\"));\n" +
    "                        $(this).attr(\"data-url\", openUrl);\n" +
    "                        $(this).click(function () {\n" +
    "                            openOrder(this)\n" +
    "                        })\n" +
    "                    });\n" +
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
    "    a.hasClass(\"o-o-t-l-c-list\") ? (a = a.find(\"li:contains('\u8ba2\u5355\u7f16\u53f7\uff1a')\").text().replace(\"\u8ba2\u5355\u7f16\u53f7\uff1a\", \"\").trim(), a = \"http://\" + location.host + \"/Pdd.html#orders/order_detail/index?OrderUrl=\" + $(c).attr(\"data-url\") + \"&sn=\" + a + \"&skumap=\" + $(c).attr(\"data-skumap\"), window.open(a), a = $(c).text(), 0 <= a.indexOf(\"\u91c7\u8d2d\u4e0b\u5355\") && ($(c).text(a.replace(\"\u91c7\u8d2d\u4e0b\u5355\",\n" +
    "        \"\u518d\u6b21\u91c7\u8d2d\")), $(c).removeClass(\"btn-blue\").addClass(\"btn-white\"))) : alert(\"\u4e0b\u5355\u5931\u8d25\uff0c\u627e\u4e0d\u5230\u8ba2\u5355\u8282\u70b9\")\n" +
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
    "    var d = $('<table class=\"pdd-dui-table data-info\"><tr><td style=\" padding: 5px; font-size: 13px; \"><b>\u5546\u54c1\u89c4\u683c\uff1a</b>' + a.skus + \"<br><b>\u6536\u8d27\u4fe1\u606f\uff1a</b>\" + a.LinkMan + \"\uff0c\" + a.Phone + \"\uff0c\" + a.Address + '<br><b>\u91c7\u8d2d\u5907\u6ce8\uff1a</b><span class=\"buyerMessage\">' + a.Buyer + \"</span></td></tr></table>\");\n" +
    "    c.append(d);\n" +
    "    for (var b = 0; b < orderList.length && orderList[b].OrderId != a.OrderId; b++) orderList[b].Phone == a.Phone &&\n" +
    "    (d.find(\"td\").css(\"color\", \"#A00E0E\"), d.attr(\"title\", \"\u91cd\u590d\u8d2d\u4e70\uff1a\" + orderList[b].OrderId + \"\uff0c\" + orderList[b].Buyer));\n" +
    "    void 0 != a.Buyer && null != a.Buyer && \"\" != a.Buyer || 0 != c.find(\".btn-blue\").length || $.get(\"http://\" + location.host + \"/orders/note/\" + a.OrderId, {}, function (b) {\n" +
    "        if (b.result) {\n" +
    "            b = b.data;\n" +
    "            var d = /\\d{15,}/;\n" +
    "            if (void 0 != b.length) for (var e = 0; e < b.length; e++) if (void 0 != b[e].note && null != b[e].note && !(0 < b[e].note.indexOf(\"\u5feb\u9012\u5355\u53f7\")) && d.test(b[e].note)) {\n" +
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
    "        var c = $('<span class=\"btn-black batchsubmit\" style=\" width: 80px; line-height: 20px; display: inline-block; text-align: center; margin: 0 10px 0 10px;\">\u6279\u91cf\u53d1\u8d27</span>');\n" +
    "        $(\"a:contains('\u6279\u91cf\u5bfc\u51fa')\").parent().append(c);\n" +
    "        c.click(function () {\n" +
    "            failCount = successCount = 0;\n" +
    "            $.ajaxSetup({async: !1});\n" +
    "            $(\"a:contains('\u91c7\u8d2d\u53d1\u8d27'):visible\").each(function () {\n" +
    "                var a = $(this).attr(\"href\"), c = $(this).parents(\"table\").find(\".chkItem\");\n" +
    "                if (!(0 < c.length && 0 == c.prop(\"checked\"))) {\n" +
    "                    var c = a.indexOf(\"?OrderId=\"), b = a.substring(c), b = decodeURIComponent(b) + \"&\",\n" +
    "                        a = getSubstring(b, \"OrderId=\", \"&\"), c = getSubstring(b, \"ExpressId=\", \"&\"),\n" +
    "                        b = getSubstring(b, \"ExpressName=\", \"&\");\n" +
    "                    if (\"\" != $.trim(b)) {\n" +
    "                        if (\"\u4e2d\u56fd\u90ae\u653f\" == b || \"\u90ae\u653f\u56fd\u5185\u5c0f\u5305\" == b) b = \"\u90ae\u653f\u5feb\u9012\u5305\u88f9\";\n" +
    "                        if (0 <= b.indexOf(\"ems\") || 0 <= b.indexOf(\"EMS\")) b = \"\u90ae\u653fEMS\";\n" +
    "                        \"OTHER\" == b && (b = \"\u5b89\u80fd\u7269\u6d41\");\n" +
    "                        b = b.replace(\"\u901f\u9012\", \"\u5feb\u9012\").replace(\"\u901f\u8fd0\",\n" +
    "                            \"\u5feb\u9012\").replace(\"\u5feb\u8fd0\", \"\u5feb\u9012\");\n" +
    "                        autoSubmit(a, b, c);\n" +
    "                        $(this).hide()\n" +
    "                    }\n" +
    "                }\n" +
    "            });\n" +
    "            $.ajaxSetup({async: !0});\n" +
    "            alert(\"\u53d1\u8d27\u5b8c\u6210\uff0c\u6210\u529f\uff1a\" + successCount + \"\uff0c\u5931\u8d25\uff1a\" + failCount)\n" +
    "        });\n" +
    "        $(\".o-o-t-l-content\").append(c.clone(!0));\n" +
    "        c = $(\"<label><input type=checkbox class=chkAll checked />\u5168\u9009</label>\");\n" +
    "        $(\"a:contains('\u6279\u91cf\u5bfc\u51fa')\").parent().append(c);\n" +
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
    "        \"\" != b.text() && (a = b.text() + \"\uff0c\" + a);\n" +
    "        0 < g.length ? g[0].click() : alert(\"\u627e\u4e0d\u5230\u6dfb\u52a0\u5907\u6ce8\u6309\u94ae\");\n" +
    "        b = $(\"#remarkArea\");\n" +
    "        if (0 < b.length) {\n" +
    "            if (b.val() == a) {\n" +
    "                console.log(\"\u91cd\u590d\u5907\u6ce8\");\n" +
    "                return\n" +
    "            }\n" +
    "            b.val(a);\n" +
    "            $(\"#orderRemarkOrderId\").val(c.orderid);\n" +
    "            $(\"#rSubmitButton\").click()\n" +
    "        } else return console.log(\"\u627e\u4e0d\u5230\u5907\u6ce8\u8f93\u5165\u6846\"), d(!1);\n" +
    "        a = serviceHost + \"/User/Service/SaveBuyOrderInfo\";\n" +
    "        c = {orderId: c.orderid, buyOrderId: c.buyOrderId, buyAccount: unescape(c.buyAccount)};\n" +
    "        chrome.extension.sendRequest({type: \"ajax\", url: a, data: c}, function (a) {\n" +
    "            console.log(a)\n" +
    "        });\n" +
    "        return d(!0)\n" +
    "    }\n" +
    "});\n";