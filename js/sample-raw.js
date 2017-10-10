var user = null, tabid = null, orderList = null, skusTaoURLMapList = null;
shipping = [{shipping_id: "1", shipping_name: "申通快递"}, {
    shipping_id: "3",
    shipping_name: "百世快递"
}, {shipping_id: "44", shipping_name: "顺丰快递"}, {
    shipping_id: "85",
    shipping_name: "圆通快递"
}, {shipping_id: "88", shipping_name: "奔奔速达"}, {
    shipping_id: "89",
    shipping_name: "赛澳递"
}, {shipping_id: "90", shipping_name: "晟邦物流"}, {
    shipping_id: "115",
    shipping_name: "中通快递"
},
    {shipping_id: "116", shipping_name: "全峰快递"}, {
        shipping_id: "117",
        shipping_name: "优速快递"
    }, {shipping_id: "118", shipping_name: "邮政EMS"}, {
        shipping_id: "119",
        shipping_name: "天天快递"
    }, {shipping_id: "120", shipping_name: "京东配送"}, {
        shipping_id: "121",
        shipping_name: "韵达快递"
    }, {shipping_id: "122", shipping_name: "快捷快递"}, {
        shipping_id: "124",
        shipping_name: "国通快递"
    }, {shipping_id: "128", shipping_name: "当当出版配送"},
    {shipping_id: "129", shipping_name: "宅急送快递"}, {
        shipping_id: "130",
        shipping_name: "如风达"
    }, {shipping_id: "131", shipping_name: "德邦快递"}, {
        shipping_id: "132",
        shipping_name: "邮政快递包裹"
    }, {shipping_id: "133", shipping_name: "龙邦快递"}, {
        shipping_id: "135",
        shipping_name: "联邦快递"
    }, {shipping_id: "136", shipping_name: "九曳供应链"}, {
        shipping_id: "137",
        shipping_name: "百城当日达快递"
    },
    {shipping_id: "138", shipping_name: "达达快递"}, {
        shipping_id: "139",
        shipping_name: "冻到家物流"
    }, {shipping_id: "140", shipping_name: "南京晟邦"}, {
        shipping_id: "141",
        shipping_name: "山西红马甲"
    }, {shipping_id: "142", shipping_name: "万象物流"}, {
        shipping_id: "143",
        shipping_name: "立即送"
    }, {shipping_id: "144", shipping_name: "门对门"}, {
        shipping_id: "147",
        shipping_name: "丰程"
    }, {shipping_id: "148", shipping_name: "安达信"},
    {shipping_id: "149", shipping_name: "海外快递"}, {
        shipping_id: "150",
        shipping_name: "飞远物流"
    }, {shipping_id: "151", shipping_name: "南都快递"}, {
        shipping_id: "152",
        shipping_name: "汇文快递"
    }, {shipping_id: "154", shipping_name: "黄马甲"}, {
        shipping_id: "155",
        shipping_name: "速尔快递"
    }, {shipping_id: "156", shipping_name: "亚马逊物流"}, {
        shipping_id: "157",
        shipping_name: "黑猫宅急便"
    }, {
        shipping_id: "158",
        shipping_name: "顺丰航运"
    }, {shipping_id: "159", shipping_name: "圆通航运"}, {
        shipping_id: "160",
        shipping_name: "拼好货"
    }, {shipping_id: "161", shipping_name: "上海赛澳递"}, {
        shipping_id: "162",
        shipping_name: "城市100 "
    }, {shipping_id: "163", shipping_name: "芝麻开门"}, {
        shipping_id: "164",
        shipping_name: "顺捷丰达"
    }, {shipping_id: "165", shipping_name: "汇通小红马"}, {
        shipping_id: "166",
        shipping_name: "辽宁小红马"
    },
    {shipping_id: "167", shipping_name: "辽宁黄马甲"}, {
        shipping_id: "168",
        shipping_name: "江苏赛澳递"
    }, {shipping_id: "169", shipping_name: "三人行"}, {
        shipping_id: "170",
        shipping_name: "通和佳递"
    }, {shipping_id: "171", shipping_name: "速捷"}, {
        shipping_id: "172",
        shipping_name: "信诺迅达"
    }, {shipping_id: "173", shipping_name: "风先生"}, {
        shipping_id: "174",
        shipping_name: "宽容"
    }, {shipping_id: "175", shipping_name: "广州途客"},
    {shipping_id: "176", shipping_name: "小红帽"}, {
        shipping_id: "177",
        shipping_name: "鹏达"
    }, {shipping_id: "178", shipping_name: "福建飞远"}, {
        shipping_id: "179",
        shipping_name: "E特快"
    }, {shipping_id: "180", shipping_name: "商家自建物流"}, {
        shipping_id: "181",
        shipping_name: "云鸟"
    }, {shipping_id: "182", shipping_name: "保达"}, {
        shipping_id: "183",
        shipping_name: "跨越速递"
    }, {shipping_id: "184", shipping_name: "吉林黄马甲"},
    {shipping_id: "185", shipping_name: "城际速递"}, {
        shipping_id: "186",
        shipping_name: "usps"
    }, {shipping_id: "187", shipping_name: "青岛安捷"}, {
        shipping_id: "188",
        shipping_name: "大韩通运"
    }, {shipping_id: "189", shipping_name: "棒棒糖"}, {
        shipping_id: "190",
        shipping_name: "途鲜"
    }, {shipping_id: "191", shipping_name: "菜鸟快递"}, {
        shipping_id: "193",
        shipping_name: "汇站众享"
    }, {shipping_id: "194", shipping_name: "派客"}, {
        shipping_id: "195",
        shipping_name: "贝海国际速递"
    }, {shipping_id: "196", shipping_name: "丰泰国际快递"}, {
        shipping_id: "197",
        shipping_name: "环球速运"
    }, {shipping_id: "198", shipping_name: "168顺发速递"}, {
        shipping_id: "199",
        shipping_name: "全球快递"
    }, {shipping_id: "200", shipping_name: "程光快递"}, {
        shipping_id: "201",
        shipping_name: "全一快递"
    }, {shipping_id: "203", shipping_name: "东骏快捷"}, {
        shipping_id: "205",
        shipping_name: "远成快运"
    }, {shipping_id: "206", shipping_name: "风腾国际速递"}, {
        shipping_id: "207",
        shipping_name: "笨鸟转运"
    }, {shipping_id: "208", shipping_name: "安能物流"}, {
        shipping_id: "209",
        shipping_name: "联众国际快运"
    }, {shipping_id: "210", shipping_name: "天地华宇"}, {
        shipping_id: "211",
        shipping_name: "中邮速递"
    }, {shipping_id: "212", shipping_name: "hi淘易 "}, {
        shipping_id: "213",
        shipping_name: "EMS-国际件"
    }, {shipping_id: "214", shipping_name: "中铁物流"}, {
        shipping_id: "215",
        shipping_name: "楚源物流"
    }, {shipping_id: "216", shipping_name: "新邦物流"}, {
        shipping_id: "217",
        shipping_name: "Flash Express"
    }, {shipping_id: "218", shipping_name: "新顺丰NSF"}, {
        shipping_id: "219",
        shipping_name: "锐朗快递"
    }, {shipping_id: "220", shipping_name: "王道国际物流"}, {
        shipping_id: "221",
        shipping_name: "DCS GLOBAL"
    },
    {shipping_id: "222", shipping_name: "迅速快递"}, {
        shipping_id: "223",
        shipping_name: "富腾达国际货运"
    }, {shipping_id: "224", shipping_name: "琦峰物流"}, {
        shipping_id: "225",
        shipping_name: "金运通物流"
    }, {shipping_id: "226", shipping_name: "EWE全球快递"}], successCount = 0, failCount = 0,
    orderRows = [], orderIndex = 0;
init();

function init() {
    if ("undefined" == typeof $ || "undefined" == typeof getUserInfo) setTimeout("init()", 500); else if (0 == $(".o-o-t-l-content").length) setTimeout("init()", 500); else if ($("body").attr("location") != location.href) {
        $("body").attr("location", location.href);
        orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];
        skusTaoURLMapList = localStorage.skusTaoURLMapList ? JSON.parse(localStorage.skusTaoURLMapList) : [];
        null == orderList && (orderList = []);
        "div[data-id]" == orderList.selector && (orderList.length = 0, orderList = []);
        for (; 3E3 < orderList.length;) orderList.splice(0, 1);
        $("body").on("mousedown",
            ".pdd-pagination a", function () {
                $("body").attr("location", "");
                $("body").attr("clen", $(".o-o-t-l-content").html().length);
                setTimeout("checkItems()", 1E3)
            });
        $(".ez-box a:contains('查询')").click(function () {
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
    null == user || "" == user.shopid ? setTimeout("checkItems()", 1E3) : 0 == $(".o-o-t-l-c-list").length ? setTimeout("checkItems()", 1E3) : 1 == $(".o-o-t-l-c-list").length && 0 < $($(".o-o-t-l-c-list")[0]).text().indexOf("没有查询到") ? setTimeout("checkItems()", 1E3) : $("body").attr("clen") == $(".o-o-t-l-content").html().length ? setTimeout("checkItems()", 1E3) : ($("th:contains('商品ID')").html("<label><input type=checkbox class=chkItem checked style='vertical-align: -2px;' />商品ID</label>"),
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
        a.orderId = c.find("li:contains('订单编号：')").text().replace("订单编号：", "").trim();
        if ("" != a.orderId) {
            c.find("td:eq(2) em").remove();
            a.status = c.find("td:eq(2)").text();
            a.orderDate = c.find("li:contains('成团时间：')").text().replace("成团时间：", "").trim();
            a.orderBuyer = c.find("li:contains('收货人:')").text().replace("收货人:", "").trim();
            a.payMoney = c.find("td:eq(4)").text();
            a.address = "";
            a.comment = "";
            null == orderList && (orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == orderList && (orderList = []));
            null == skusTaoURLMapList && (skusTaoURLMapList = localStorage.skusTaoURLMapList ? JSON.parse(localStorage.skusTaoURLMapList) : [], null == skusTaoURLMapList && (skusTaoURLMapList = []));
            console.log(skusTaoURLMapList);
            for (var e = null, d = 0; d < orderList.length; d++)
                if (orderList[d].OrderId == a.orderId && orderList[d].LinkMan) {
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
                        showOrderInfo2(c, {skus: "拼多多服务器繁忙，导致无法获取订单信息，请稍后再试"})
                    }
                });
            }
            else {

                (null != e && (e.Buyer && 10 > e.Buyer.length && (e.Buyer = ""), a.address = e.LinkMan + "," + e.Phone + "," + e.Address, a.comment = e.Buyer, a.skus = e.skus, showOrderInfo2(c, e)),
                        a.version = version, d = c.find(".o-o-t-l-c-l-tr-two").text(),
                    null != d && "" != d && c.find(".o-o-t-l-c-l-tr-two").empty().append('<a target="_blank" href="' + f.url + '" class="m-view">' + d + "</a>"),
                        f = "/Pdd.html#/orders/order_detail/index?Express=1&sn=" + a.orderId,
                        c.find(".z-handexpress").remove(),
                        c.find(".o-o-t-l-c-l-tr td:last").append('<a class="z-handexpress" target="_blank" href="' + f + '"><br>手工发货</a>')
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
                    //         $("span:contains('修改关联')").length + $("span:contains('宝贝关联')").length >=
                    //         orderRows.length - 1 && $("body").attr("location", "")
                    //     }
                    // })
                );
                var openUrl = null;
                for (var index = 0; index < skusTaoURLMapList.length; index++) {
                    if (skusTaoURLMapList[index].type == base64Encode(e.skus) && skusTaoURLMapList[index].taoUrl != null) {
                        openUrl = skusTaoURLMapList[index].taoUrl;
                    }
                }

                if (openUrl != null)
                    a = '<div class=\'btn-row\'><span class=\'btn-white\' data-type=\'' + base64Encode(e.skus) + '\' data-role=\'link\'>修改关联</span></div>' +
                        '<div class=\'btn-row\'><span class=\'btn-white\' data-url=\'https://s.click.taobao.com/t?e=m%3D2%26s%3DivSC1VHZI70cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67oNqvn8gOR36%2FpU2SWJU0cL80%2BvhHHSKIrDIwwvS2CcKzlFcF9x7QEVWKYKulPel0AeqLYeTC9d9fC0OC7iiPi%2BlTO%2Fc%2FrsR2uo18ar9X2zVIYULNg46oBA%3D&pvid=10_110.84.171.92_1079_1507521750811\' data-role=\'order\' title=\'\'>再次采购</span></div>';
                else {
                    a = '<div class=\'btn-row\'><span class=\'btn-red\' data-type=\'' + base64Encode(e.skus) + '\' data-role=\'link\'>添加关联</span></div>';
                }


                if ("" != a && void 0 != a) {
                    var b = c.find("td:eq(2)");
                    b.find(".btn-row").remove();
                    a = $(a);
                    a.css("min-width", "78px");
                    a.find(".btn-black").css("color", "white");
                    b.append(a);


                    a.find("span[data-role=link]").click(function () {
                        $(this).hide();
                        console.log("clicked!!!")
                        var type = $(this).attr("data-type");
                        var openUrl = null;
                        console.log(skusTaoURLMapList);
                        for (var index = 0; index < skusTaoURLMapList.length; index++) {
                            if (skusTaoURLMapList[index].type == type && skusTaoURLMapList[index].taoUrl != null) {
                                openUrl = skusTaoURLMapList[index].taoUrl;
                            }
                        }

                        console.log($(this).parents("table[class=pdd-dui-table]"));
                        if (openUrl == null) {
                            $(this).parents("table[class=pdd-dui-table]").append("<ul class='ul-modify'><li><input class='input-modify' type='text' /></li><li><input data-type=\'" + (type) + "\' class='btn-rosy url-modify' type='button' value='确认'/></li> </ul>");
                        }
                        else {
                            $(this).parents("table[class=pdd-dui-table]").append("<ul class='ul-modify'><li><input class='input-modify' type='text' value=\'" + openUrl + "\'/></li> <li><input data-type=\'" + (type) + "\' class='btn-rosy  url-modify' type='button' value='确认'/></li> </ul>");
                        }

                        $(this).parents(".o-o-t-l-c-list").find("input[type=button]").click(function () {
                            console.log($(this).parents(".o-o-t-l-c-list").find("span[data-role=link]"));

                            var map = null;
                            var data_type = $(this).attr("data-type");
                            for (var index = 0; index < skusTaoURLMapList.length; index++) {
                                if (skusTaoURLMapList[index].type == data_type) {
                                    map = skusTaoURLMapList[index];
                                }
                            }
                            console.log(map);
                            if (map != null)
                                map.taoUrl = $('.input-modify').val();
                            else
                                skusTaoURLMapList.push({type: data_type, taoUrl: $('.input-modify').val()});

                            console.log(skusTaoURLMapList);
                            localStorage.skusTaoURLMapList = JSON.stringify(skusTaoURLMapList);
                            location.reload();
                        });

                    });

                    a.find("span[data-role=order]").each(function () {
                        // var a = base64Encode($(this).attr("data-url"));
                        $(this).attr("data-url", base64Encode(openUrl));
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
    a.hasClass("o-o-t-l-c-list") ? (a = a.find("li:contains('订单编号：')").text().replace("订单编号：", "").trim(), a = "http://" + location.host + "/Pdd.html#orders/order_detail/index?OrderUrl=" + $(c).attr("data-url") + "&sn=" + a + "&skumap=" + $(c).attr("data-skumap"), window.open(a), a = $(c).text(), 0 <= a.indexOf("采购下单") && ($(c).text(a.replace("采购下单",
        "再次采购")), $(c).removeClass("btn-blue").addClass("btn-white"))) : alert("下单失败，找不到订单节点")
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
    var d = $('<table class="pdd-dui-table data-info"><tr><td style=" padding: 5px; font-size: 13px; "><b>商品规格：</b>' + a.skus + "<br><b>收货信息：</b>" + a.LinkMan + "，" + a.Phone + "，" + a.Address + '<br><b>采购备注：</b><span class="buyerMessage">' + a.Buyer + "</span></td></tr></table>");
    c.append(d);
    for (var b = 0; b < orderList.length && orderList[b].OrderId != a.OrderId; b++) orderList[b].Phone == a.Phone &&
    (d.find("td").css("color", "#A00E0E"), d.attr("title", "重复购买：" + orderList[b].OrderId + "，" + orderList[b].Buyer));
    void 0 != a.Buyer && null != a.Buyer && "" != a.Buyer || 0 != c.find(".btn-blue").length || $.get("http://" + location.host + "/orders/note/" + a.OrderId, {}, function (b) {
        if (b.result) {
            b = b.data;
            var d = /\d{15,}/;
            if (void 0 != b.length) for (var e = 0; e < b.length; e++) if (void 0 != b[e].note && null != b[e].note && !(0 < b[e].note.indexOf("快递单号")) && d.test(b[e].note)) {
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
        var c = $('<span class="btn-black batchsubmit" style=" width: 80px; line-height: 20px; display: inline-block; text-align: center; margin: 0 10px 0 10px;">批量发货</span>');
        $("a:contains('批量导出')").parent().append(c);
        c.click(function () {
            failCount = successCount = 0;
            $.ajaxSetup({async: !1});
            $("a:contains('采购发货'):visible").each(function () {
                var a = $(this).attr("href"), c = $(this).parents("table").find(".chkItem");
                if (!(0 < c.length && 0 == c.prop("checked"))) {
                    var c = a.indexOf("?OrderId="), b = a.substring(c), b = decodeURIComponent(b) + "&",
                        a = getSubstring(b, "OrderId=", "&"), c = getSubstring(b, "ExpressId=", "&"),
                        b = getSubstring(b, "ExpressName=", "&");
                    if ("" != $.trim(b)) {
                        if ("中国邮政" == b || "邮政国内小包" == b) b = "邮政快递包裹";
                        if (0 <= b.indexOf("ems") || 0 <= b.indexOf("EMS")) b = "邮政EMS";
                        "OTHER" == b && (b = "安能物流");
                        b = b.replace("速递", "快递").replace("速运",
                            "快递").replace("快运", "快递");
                        autoSubmit(a, b, c);
                        $(this).hide()
                    }
                }
            });
            $.ajaxSetup({async: !0});
            alert("发货完成，成功：" + successCount + "，失败：" + failCount)
        });
        $(".o-o-t-l-content").append(c.clone(!0));
        c = $("<label><input type=checkbox class=chkAll checked />全选</label>");
        $("a:contains('批量导出')").parent().append(c);
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
        "" != b.text() && (a = b.text() + "，" + a);
        0 < g.length ? g[0].click() : alert("找不到添加备注按钮");
        b = $("#remarkArea");
        if (0 < b.length) {
            if (b.val() == a) {
                console.log("重复备注");
                return
            }
            b.val(a);
            $("#orderRemarkOrderId").val(c.orderid);
            $("#rSubmitButton").click()
        } else return console.log("找不到备注输入框"), d(!1);
        a = serviceHost + "/User/Service/SaveBuyOrderInfo";
        c = {orderId: c.orderid, buyOrderId: c.buyOrderId, buyAccount: unescape(c.buyAccount)};
        chrome.extension.sendRequest({type: "ajax", url: a, data: c}, function (a) {
            console.log(a)
        });
        return d(!0)
    }
});