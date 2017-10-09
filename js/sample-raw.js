var user = null, tabid = null, orderList = null, skusTaoURLMapList = null;
shipping = [{shipping_id: "1", shipping_name: "\u7533\u901a\u5feb\u9012"}, {
    shipping_id: "3",
    shipping_name: "\u767e\u4e16\u5feb\u9012"
}, {shipping_id: "44", shipping_name: "\u987a\u4e30\u5feb\u9012"}, {
    shipping_id: "85",
    shipping_name: "\u5706\u901a\u5feb\u9012"
}, {shipping_id: "88", shipping_name: "\u5954\u5954\u901f\u8fbe"}, {
    shipping_id: "89",
    shipping_name: "\u8d5b\u6fb3\u9012"
}, {shipping_id: "90", shipping_name: "\u665f\u90a6\u7269\u6d41"}, {
    shipping_id: "115",
    shipping_name: "\u4e2d\u901a\u5feb\u9012"
},
    {shipping_id: "116", shipping_name: "\u5168\u5cf0\u5feb\u9012"}, {
        shipping_id: "117",
        shipping_name: "\u4f18\u901f\u5feb\u9012"
    }, {shipping_id: "118", shipping_name: "\u90ae\u653fEMS"}, {
        shipping_id: "119",
        shipping_name: "\u5929\u5929\u5feb\u9012"
    }, {shipping_id: "120", shipping_name: "\u4eac\u4e1c\u914d\u9001"}, {
        shipping_id: "121",
        shipping_name: "\u97f5\u8fbe\u5feb\u9012"
    }, {shipping_id: "122", shipping_name: "\u5feb\u6377\u5feb\u9012"}, {
        shipping_id: "124",
        shipping_name: "\u56fd\u901a\u5feb\u9012"
    }, {shipping_id: "128", shipping_name: "\u5f53\u5f53\u51fa\u7248\u914d\u9001"},
    {shipping_id: "129", shipping_name: "\u5b85\u6025\u9001\u5feb\u9012"}, {
        shipping_id: "130",
        shipping_name: "\u5982\u98ce\u8fbe"
    }, {shipping_id: "131", shipping_name: "\u5fb7\u90a6\u5feb\u9012"}, {
        shipping_id: "132",
        shipping_name: "\u90ae\u653f\u5feb\u9012\u5305\u88f9"
    }, {shipping_id: "133", shipping_name: "\u9f99\u90a6\u5feb\u9012"}, {
        shipping_id: "135",
        shipping_name: "\u8054\u90a6\u5feb\u9012"
    }, {shipping_id: "136", shipping_name: "\u4e5d\u66f3\u4f9b\u5e94\u94fe"}, {
        shipping_id: "137",
        shipping_name: "\u767e\u57ce\u5f53\u65e5\u8fbe\u5feb\u9012"
    },
    {shipping_id: "138", shipping_name: "\u8fbe\u8fbe\u5feb\u9012"}, {
        shipping_id: "139",
        shipping_name: "\u51bb\u5230\u5bb6\u7269\u6d41"
    }, {shipping_id: "140", shipping_name: "\u5357\u4eac\u665f\u90a6"}, {
        shipping_id: "141",
        shipping_name: "\u5c71\u897f\u7ea2\u9a6c\u7532"
    }, {shipping_id: "142", shipping_name: "\u4e07\u8c61\u7269\u6d41"}, {
        shipping_id: "143",
        shipping_name: "\u7acb\u5373\u9001"
    }, {shipping_id: "144", shipping_name: "\u95e8\u5bf9\u95e8"}, {
        shipping_id: "147",
        shipping_name: "\u4e30\u7a0b"
    }, {shipping_id: "148", shipping_name: "\u5b89\u8fbe\u4fe1"},
    {shipping_id: "149", shipping_name: "\u6d77\u5916\u5feb\u9012"}, {
        shipping_id: "150",
        shipping_name: "\u98de\u8fdc\u7269\u6d41"
    }, {shipping_id: "151", shipping_name: "\u5357\u90fd\u5feb\u9012"}, {
        shipping_id: "152",
        shipping_name: "\u6c47\u6587\u5feb\u9012"
    }, {shipping_id: "154", shipping_name: "\u9ec4\u9a6c\u7532"}, {
        shipping_id: "155",
        shipping_name: "\u901f\u5c14\u5feb\u9012"
    }, {shipping_id: "156", shipping_name: "\u4e9a\u9a6c\u900a\u7269\u6d41"}, {
        shipping_id: "157",
        shipping_name: "\u9ed1\u732b\u5b85\u6025\u4fbf"
    }, {
        shipping_id: "158",
        shipping_name: "\u987a\u4e30\u822a\u8fd0"
    }, {shipping_id: "159", shipping_name: "\u5706\u901a\u822a\u8fd0"}, {
        shipping_id: "160",
        shipping_name: "\u62fc\u597d\u8d27"
    }, {shipping_id: "161", shipping_name: "\u4e0a\u6d77\u8d5b\u6fb3\u9012"}, {
        shipping_id: "162",
        shipping_name: "\u57ce\u5e02100 "
    }, {shipping_id: "163", shipping_name: "\u829d\u9ebb\u5f00\u95e8"}, {
        shipping_id: "164",
        shipping_name: "\u987a\u6377\u4e30\u8fbe"
    }, {shipping_id: "165", shipping_name: "\u6c47\u901a\u5c0f\u7ea2\u9a6c"}, {
        shipping_id: "166",
        shipping_name: "\u8fbd\u5b81\u5c0f\u7ea2\u9a6c"
    },
    {shipping_id: "167", shipping_name: "\u8fbd\u5b81\u9ec4\u9a6c\u7532"}, {
        shipping_id: "168",
        shipping_name: "\u6c5f\u82cf\u8d5b\u6fb3\u9012"
    }, {shipping_id: "169", shipping_name: "\u4e09\u4eba\u884c"}, {
        shipping_id: "170",
        shipping_name: "\u901a\u548c\u4f73\u9012"
    }, {shipping_id: "171", shipping_name: "\u901f\u6377"}, {
        shipping_id: "172",
        shipping_name: "\u4fe1\u8bfa\u8fc5\u8fbe"
    }, {shipping_id: "173", shipping_name: "\u98ce\u5148\u751f"}, {
        shipping_id: "174",
        shipping_name: "\u5bbd\u5bb9"
    }, {shipping_id: "175", shipping_name: "\u5e7f\u5dde\u9014\u5ba2"},
    {shipping_id: "176", shipping_name: "\u5c0f\u7ea2\u5e3d"}, {
        shipping_id: "177",
        shipping_name: "\u9e4f\u8fbe"
    }, {shipping_id: "178", shipping_name: "\u798f\u5efa\u98de\u8fdc"}, {
        shipping_id: "179",
        shipping_name: "E\u7279\u5feb"
    }, {shipping_id: "180", shipping_name: "\u5546\u5bb6\u81ea\u5efa\u7269\u6d41"}, {
        shipping_id: "181",
        shipping_name: "\u4e91\u9e1f"
    }, {shipping_id: "182", shipping_name: "\u4fdd\u8fbe"}, {
        shipping_id: "183",
        shipping_name: "\u8de8\u8d8a\u901f\u9012"
    }, {shipping_id: "184", shipping_name: "\u5409\u6797\u9ec4\u9a6c\u7532"},
    {shipping_id: "185", shipping_name: "\u57ce\u9645\u901f\u9012"}, {
        shipping_id: "186",
        shipping_name: "usps"
    }, {shipping_id: "187", shipping_name: "\u9752\u5c9b\u5b89\u6377"}, {
        shipping_id: "188",
        shipping_name: "\u5927\u97e9\u901a\u8fd0"
    }, {shipping_id: "189", shipping_name: "\u68d2\u68d2\u7cd6"}, {
        shipping_id: "190",
        shipping_name: "\u9014\u9c9c"
    }, {shipping_id: "191", shipping_name: "\u83dc\u9e1f\u5feb\u9012"}, {
        shipping_id: "193",
        shipping_name: "\u6c47\u7ad9\u4f17\u4eab"
    }, {shipping_id: "194", shipping_name: "\u6d3e\u5ba2"}, {
        shipping_id: "195",
        shipping_name: "\u8d1d\u6d77\u56fd\u9645\u901f\u9012"
    }, {shipping_id: "196", shipping_name: "\u4e30\u6cf0\u56fd\u9645\u5feb\u9012"}, {
        shipping_id: "197",
        shipping_name: "\u73af\u7403\u901f\u8fd0"
    }, {shipping_id: "198", shipping_name: "168\u987a\u53d1\u901f\u9012"}, {
        shipping_id: "199",
        shipping_name: "\u5168\u7403\u5feb\u9012"
    }, {shipping_id: "200", shipping_name: "\u7a0b\u5149\u5feb\u9012"}, {
        shipping_id: "201",
        shipping_name: "\u5168\u4e00\u5feb\u9012"
    }, {shipping_id: "203", shipping_name: "\u4e1c\u9a8f\u5feb\u6377"}, {
        shipping_id: "205",
        shipping_name: "\u8fdc\u6210\u5feb\u8fd0"
    }, {shipping_id: "206", shipping_name: "\u98ce\u817e\u56fd\u9645\u901f\u9012"}, {
        shipping_id: "207",
        shipping_name: "\u7b28\u9e1f\u8f6c\u8fd0"
    }, {shipping_id: "208", shipping_name: "\u5b89\u80fd\u7269\u6d41"}, {
        shipping_id: "209",
        shipping_name: "\u8054\u4f17\u56fd\u9645\u5feb\u8fd0"
    }, {shipping_id: "210", shipping_name: "\u5929\u5730\u534e\u5b87"}, {
        shipping_id: "211",
        shipping_name: "\u4e2d\u90ae\u901f\u9012"
    }, {shipping_id: "212", shipping_name: "hi\u6dd8\u6613 "}, {
        shipping_id: "213",
        shipping_name: "EMS-\u56fd\u9645\u4ef6"
    }, {shipping_id: "214", shipping_name: "\u4e2d\u94c1\u7269\u6d41"}, {
        shipping_id: "215",
        shipping_name: "\u695a\u6e90\u7269\u6d41"
    }, {shipping_id: "216", shipping_name: "\u65b0\u90a6\u7269\u6d41"}, {
        shipping_id: "217",
        shipping_name: "Flash Express"
    }, {shipping_id: "218", shipping_name: "\u65b0\u987a\u4e30NSF"}, {
        shipping_id: "219",
        shipping_name: "\u9510\u6717\u5feb\u9012"
    }, {shipping_id: "220", shipping_name: "\u738b\u9053\u56fd\u9645\u7269\u6d41"}, {
        shipping_id: "221",
        shipping_name: "DCS GLOBAL"
    },
    {shipping_id: "222", shipping_name: "\u8fc5\u901f\u5feb\u9012"}, {
        shipping_id: "223",
        shipping_name: "\u5bcc\u817e\u8fbe\u56fd\u9645\u8d27\u8fd0"
    }, {shipping_id: "224", shipping_name: "\u7426\u5cf0\u7269\u6d41"}, {
        shipping_id: "225",
        shipping_name: "\u91d1\u8fd0\u901a\u7269\u6d41"
    }, {shipping_id: "226", shipping_name: "EWE\u5168\u7403\u5feb\u9012"}], successCount = 0, failCount = 0,
    orderRows = [], orderIndex = 0;
init();

function init() {
    if ("undefined" == typeof $ || "undefined" == typeof getUserInfo) setTimeout("init()", 500); else if (0 == $(".o-o-t-l-content").length) setTimeout("init()", 500); else if ($("body").attr("location") != location.href) {
        $("body").attr("location", location.href);
        orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];
        null == orderList && (orderList = []);
        "div[data-id]" == orderList.selector && (orderList.length = 0, orderList = []);
        for (; 3E3 < orderList.length;) orderList.splice(0, 1);
        $("body").on("mousedown",
            ".pdd-pagination a", function () {
                $("body").attr("location", "");
                $("body").attr("clen", $(".o-o-t-l-content").html().length);
                setTimeout("checkItems()", 1E3)
            });
        $(".ez-box a:contains('\u67e5\u8be2')").click(function () {
            $("body").attr("location", "");
            $("body").attr("clen", $(".o-o-t-l-content").html().length);
            setTimeout("checkItems()", 1E3)
        });
        $(".order-search-count2 a").on("click", function () {
            $("body").attr("location", "");
            $("body").attr("clen", $(".o-o-t-l-content").html().length)
        });
        checkItems();
        batchSubmit()
    }
}

function checkItems() {
    if (null == user || "" == user.shopid) user = getUserInfo();
    null == user || "" == user.shopid ? setTimeout("checkItems()", 1E3) : 0 == $(".o-o-t-l-c-list").length ? setTimeout("checkItems()", 1E3) : 1 == $(".o-o-t-l-c-list").length && 0 < $($(".o-o-t-l-c-list")[0]).text().indexOf("\u6ca1\u6709\u67e5\u8be2\u5230") ? setTimeout("checkItems()", 1E3) : $("body").attr("clen") == $(".o-o-t-l-content").html().length ? setTimeout("checkItems()", 1E3) : ($("th:contains('\u5546\u54c1ID')").html("<label><input type=checkbox class=chkItem checked style='vertical-align: -2px;' />\u5546\u54c1ID</label>"),
        $(".chkAll").prop("checked", !0), orderRows = $(".o-o-t-l-c-list"), orderIndex = 0, orderRows.each(function () {
        getOrderButton($(this))
    }))
}

function getOrderButton(c) {
    if (c) {
        var a = {shopid: user.shopid}, d = [], b = c.find(".o-o-t-l-c-l-tr-one img"),
            g = c.find(".o-o-t-l-c-l-tr-one p:eq(0)").text(), f = {};
        f.url = "http://mobile.yangkeduo.com/goods.html?goods_id=" + g;
        f.img = b.attr("src");
        f.title = c.find(".o-o-t-l-c-l-tr-two").text();
        f.price = c.find("td:eq(4)").text();
        f.num = 1;
        d.push(f);
        a.items = JSON.stringify(d);
        a.orderId = c.find("li:contains('\u8ba2\u5355\u7f16\u53f7\uff1a')").text().replace("\u8ba2\u5355\u7f16\u53f7\uff1a", "").trim();
        if ("" != a.orderId) {
            c.find("td:eq(2) em").remove();
            a.status = c.find("td:eq(2)").text();
            a.orderDate = c.find("li:contains('\u6210\u56e2\u65f6\u95f4\uff1a')").text().replace("\u6210\u56e2\u65f6\u95f4\uff1a", "").trim();
            a.orderBuyer = c.find("li:contains('\u6536\u8d27\u4eba:')").text().replace("\u6536\u8d27\u4eba:", "").trim();
            a.payMoney = c.find("td:eq(4)").text();
            a.address = "";
            a.comment = "";
            null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));
            for (var e = null, d = 0; d < orderList.length; d++) if (orderList[d].OrderId ==
                a.orderId && orderList[d].LinkMan) {
                e = orderList[d];
                break
            }
            if (null == e) {
                $.ajax({
                    type: "post",
                    url: "http://" + location.host + "/mars/shop/orderDetail",
                    datType: "JSON",
                    contentType: "application/json",
                    data: '{"orderSn":"' + a.orderId + '"}',
                    success: function (b) {
                        if (b.result) {
                            var d = b.result;
                            null != b.result.data && (d = b.result.data[0]);
                            e = {OrderId: a.orderId};
                            e.LinkMan = d.receive_name;
                            "" == d.receive_name && (e.LinkMan = "-");
                            e.Address = d.province_name + " " + d.city_name + " " + d.district_name + " " + d.shipping_address;
                            e.Phone = d.receive_mobile;
                            e.skus =
                                d.spec;
                            e.Buyer = "";
                            orderList.push(e);
                            localStorage.orderList = JSON.stringify(orderList);
                            getOrderButton(c)
                        }
                    },
                    error: function () {
                        showOrderInfo2(c, {skus: "\u62fc\u591a\u591a\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u5bfc\u81f4\u65e0\u6cd5\u83b7\u53d6\u8ba2\u5355\u4fe1\u606f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"})
                    }
                });
            }
            else {

                (null != e && (e.Buyer && 10 > e.Buyer.length && (e.Buyer = ""), a.address = e.LinkMan + "," + e.Phone + "," + e.Address, a.comment = e.Buyer, a.skus = e.skus, showOrderInfo2(c, e)),
                        a.version = version, d = c.find(".o-o-t-l-c-l-tr-two").text(),
                    null != d && "" != d && c.find(".o-o-t-l-c-l-tr-two").empty().append('<a target="_blank" href="' + f.url + '" class="m-view">' + d + "</a>"),
                        f = "/Pdd.html#/orders/order_detail/index?Express=1&sn=" + a.orderId,
                        c.find(".z-handexpress").remove(),
                        c.find(".o-o-t-l-c-l-tr td:last").append('<a class="z-handexpress" target="_blank" href="' + f + '"><br>\u624b\u5de5\u53d1\u8d27</a>')
                    // ,
                    //     $.ajax({
                    //     method: "post", url: serviceHost + "/User/Service/GetOrderButton", data: a,
                    //     success: function (a) {
                    //         if ("" != a && void 0 != a) {
                    //             var b = c.find("td:eq(2)");
                    //             b.find(".btn-row").remove();
                    //             a = $(a);
                    //             a.css("min-width", "78px");
                    //             a.find(".btn-black").css("color", "white");
                    //             b.append(a);
                    //             a.find("span[data-role=order]").each(function () {
                    //                 var a = base64Encode($(this).attr("data-url"));
                    //                 $(this).attr("data-url", a);
                    //                 $(this).click(function () {
                    //                     openOrder(this)
                    //                 })
                    //             });
                    //             a.find(".btn-black").click(function () {
                    //                 $(this).hide()
                    //             })
                    //         }
                    //         setTimeout("getOrderButton()", 50)
                    //     }, error: function () {
                    //         setTimeout("getOrderButton()", 500)
                    //     }, complete: function () {
                    //         $("span:contains('\u4fee\u6539\u5173\u8054')").length + $("span:contains('\u5b9d\u8d1d\u5173\u8054')").length >=
                    //         orderRows.length - 1 && $("body").attr("location", "")
                    //     }
                    // })
                );
                a = '<div class=\'btn-row\'><span class=\'btn-white\' onclick=\'window.open(\"main.html\", \"testwindow\", \"width=700,height=600\")\' data-role=\'link\'>修改关联</span></div>' +
                    '<div class=\'btn-row\'><span class=\'btn-white\' data-url=\'https://s.click.taobao.com/t?e=m%3D2%26s%3DivSC1VHZI70cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67oNqvn8gOR36%2FpU2SWJU0cL80%2BvhHHSKIrDIwwvS2CcKzlFcF9x7QEVWKYKulPel0AeqLYeTC9d9fC0OC7iiPi%2BlTO%2Fc%2FrsR2uo18ar9X2zVIYULNg46oBA%3D&pvid=10_110.84.171.92_1079_1507521750811\' data-role=\'order\' title=\'\'>????</span></div>';
                if ("" != a && void 0 != a) {
                    var b = c.find("td:eq(2)");
                    b.find(".btn-row").remove();
                    a = $(a);
                    a.css("min-width", "78px");
                    a.find(".btn-black").css("color", "white");
                    b.append(a);

                    var openUrl = null;
                    for (var index = 0; index < skusTaoURLMapList.length; index++) {
                        if (skusTaoURLMapList[index].OrderId == e.OrderId && skusTaoURLMapList[index].taoUrl != null) {
                            openUrl = skusTaoURLMapList[index].taoUrl;
                        }
                    }

                    a.find("span[data-role=order]").each(function () {
                        // var a = base64Encode($(this).attr("data-url"));
                        $(this).attr("data-url", openUrl);
                        $(this).click(function () {
                            openOrder(this)
                        })
                    });


                    a.find(".btn-black").click(function () {
                        $(this).hide()
                    });
                }
            }
        }
    }
}

function openOrder(c) {
    for (var a = $(c).parent(); 0 < a.length && !a.hasClass("o-o-t-l-c-list");) a = a.parent();
    a.hasClass("o-o-t-l-c-list") ? (a = a.find("li:contains('\u8ba2\u5355\u7f16\u53f7\uff1a')").text().replace("\u8ba2\u5355\u7f16\u53f7\uff1a", "").trim(), a = "http://" + location.host + "/Pdd.html#orders/order_detail/index?OrderUrl=" + $(c).attr("data-url") + "&sn=" + a + "&skumap=" + $(c).attr("data-skumap"), window.open(a), a = $(c).text(), 0 <= a.indexOf("\u91c7\u8d2d\u4e0b\u5355") && ($(c).text(a.replace("\u91c7\u8d2d\u4e0b\u5355",
        "\u518d\u6b21\u91c7\u8d2d")), $(c).removeClass("btn-blue").addClass("btn-white"))) : alert("\u4e0b\u5355\u5931\u8d25\uff0c\u627e\u4e0d\u5230\u8ba2\u5355\u8282\u70b9")
}

function showOrderInfo(c, a) {
    if (void 0 != a && "" != a) {
        c.find(".data-info").remove();
        null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));
        for (var d = 0; d < orderList.length; d++) if (orderList[d].OrderId == a) return showOrderInfo2(c, orderList[d]), !1;
        0 < c.find(".data-info").length || $.post("http://" + location.host + "/orders?sn=" + a, {}, function (b) {
            if (b.result) {
                b = b.data[0];
                var d = {OrderId: a};
                d.LinkMan = b.receive_name;
                d.Address = b.province_name + " " + b.city_name +
                    " " + b.district_name + " " + b.shipping_address;
                d.Phone = b.receive_mobile;
                d.skus = b.spec;
                d.Buyer = "";
                orderList.push(d);
                localStorage.orderList = JSON.stringify(orderList);
                showOrderInfo2(c, d)
            }
        })
    }
}

function showOrderInfo2(c, a) {
    c.find(".data-info").remove();
    var d = $('<table class="pdd-dui-table data-info"><tr><td style=" padding: 5px; font-size: 13px; "><b>\u5546\u54c1\u89c4\u683c\uff1a</b>' + a.skus + "<br><b>\u6536\u8d27\u4fe1\u606f\uff1a</b>" + a.LinkMan + "\uff0c" + a.Phone + "\uff0c" + a.Address + '<br><b>\u91c7\u8d2d\u5907\u6ce8\uff1a</b><span class="buyerMessage">' + a.Buyer + "</span></td></tr></table>");
    c.append(d);
    for (var b = 0; b < orderList.length && orderList[b].OrderId != a.OrderId; b++) orderList[b].Phone == a.Phone &&
    (d.find("td").css("color", "#A00E0E"), d.attr("title", "\u91cd\u590d\u8d2d\u4e70\uff1a" + orderList[b].OrderId + "\uff0c" + orderList[b].Buyer));
    void 0 != a.Buyer && null != a.Buyer && "" != a.Buyer || 0 != c.find(".btn-blue").length || $.get("http://" + location.host + "/orders/note/" + a.OrderId, {}, function (b) {
        if (b.result) {
            b = b.data;
            var d = /\d{15,}/;
            if (void 0 != b.length) for (var e = 0; e < b.length; e++) if (void 0 != b[e].note && null != b[e].note && !(0 < b[e].note.indexOf("\u5feb\u9012\u5355\u53f7")) && d.test(b[e].note)) {
                a.Buyer = b[e].note;
                localStorage.orderList =
                    JSON.stringify(orderList);
                c.find(".buyerMessage").text(a.Buyer);
                break
            }
        }
    })
}

function batchSubmit() {
    if (!(0 < $(".batchsubmit").length)) {
        var c = $('<span class="btn-black batchsubmit" style=" width: 80px; line-height: 20px; display: inline-block; text-align: center; margin: 0 10px 0 10px;">\u6279\u91cf\u53d1\u8d27</span>');
        $("a:contains('\u6279\u91cf\u5bfc\u51fa')").parent().append(c);
        c.click(function () {
            failCount = successCount = 0;
            $.ajaxSetup({async: !1});
            $("a:contains('\u91c7\u8d2d\u53d1\u8d27'):visible").each(function () {
                var a = $(this).attr("href"), c = $(this).parents("table").find(".chkItem");
                if (!(0 < c.length && 0 == c.prop("checked"))) {
                    var c = a.indexOf("?OrderId="), b = a.substring(c), b = decodeURIComponent(b) + "&",
                        a = getSubstring(b, "OrderId=", "&"), c = getSubstring(b, "ExpressId=", "&"),
                        b = getSubstring(b, "ExpressName=", "&");
                    if ("" != $.trim(b)) {
                        if ("\u4e2d\u56fd\u90ae\u653f" == b || "\u90ae\u653f\u56fd\u5185\u5c0f\u5305" == b) b = "\u90ae\u653f\u5feb\u9012\u5305\u88f9";
                        if (0 <= b.indexOf("ems") || 0 <= b.indexOf("EMS")) b = "\u90ae\u653fEMS";
                        "OTHER" == b && (b = "\u5b89\u80fd\u7269\u6d41");
                        b = b.replace("\u901f\u9012", "\u5feb\u9012").replace("\u901f\u8fd0",
                            "\u5feb\u9012").replace("\u5feb\u8fd0", "\u5feb\u9012");
                        autoSubmit(a, b, c);
                        $(this).hide()
                    }
                }
            });
            $.ajaxSetup({async: !0});
            alert("\u53d1\u8d27\u5b8c\u6210\uff0c\u6210\u529f\uff1a" + successCount + "\uff0c\u5931\u8d25\uff1a" + failCount)
        });
        $(".o-o-t-l-content").append(c.clone(!0));
        c = $("<label><input type=checkbox class=chkAll checked />\u5168\u9009</label>");
        $("a:contains('\u6279\u91cf\u5bfc\u51fa')").parent().append(c);
        c.find("input").click(function () {
            $(this).is(":checked") ? $(".chkItem").prop("checked", !0) : $(".chkItem").removeAttr("checked")
        })
    }
}

function autoSubmit(c, a, d) {
    var b = "", g = "";
    $.each(shipping, function (c, d) {
        if (0 <= d.shipping_name.indexOf(a) || 0 <= a.indexOf(d.shipping_name)) return b = d.shipping_id, g = d.shipping_name, !1
    });
    if ("" != b) {
        var f = "http://" + location.host + "/malls/" + user.shopid + "/orders/shipping", e = {};
        e["shippings[0][order_sn]"] = c;
        e["shippings[0][shipping_id]"] = b;
        e["shippings[0][shipping_name]"] = g;
        e["shippings[0][tracking_number]"] = d;
        e.overwrite = "0";
        $.ajax({
            method: "put", url: f, data: e, success: function (a) {
                a = a[c] + "";
                0 <= a.indexOf("SUCCESS") ?
                    successCount++ : "" != a && failCount++
            }
        })
    }
}

chrome.extension.onRequest.addListener(function (c, a, d) {
    if ("setOrder" == c.type) {
        var b = $("#orderRemark_" + c.orderid), g = $("#remark_" + c.orderid);
        a = c.comment;
        "" != b.text() && (a = b.text() + "\uff0c" + a);
        0 < g.length ? g[0].click() : alert("\u627e\u4e0d\u5230\u6dfb\u52a0\u5907\u6ce8\u6309\u94ae");
        b = $("#remarkArea");
        if (0 < b.length) {
            if (b.val() == a) {
                console.log("\u91cd\u590d\u5907\u6ce8");
                return
            }
            b.val(a);
            $("#orderRemarkOrderId").val(c.orderid);
            $("#rSubmitButton").click()
        } else return console.log("\u627e\u4e0d\u5230\u5907\u6ce8\u8f93\u5165\u6846"), d(!1);
        a = serviceHost + "/User/Service/SaveBuyOrderInfo";
        c = {orderId: c.orderid, buyOrderId: c.buyOrderId, buyAccount: unescape(c.buyAccount)};
        chrome.extension.sendRequest({type: "ajax", url: a, data: c}, function (a) {
            console.log(a)
        });
        return d(!0)
    }
});
