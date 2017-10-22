var user = null;
var tabid = null;
var orderList = null;

init();

function init() {
    if (typeof $ == "undefined" || typeof getUserInfo == "undefined") {
        setTimeout("init()", 500);
        return;
    }
    if ($("body").attr("location") == location.href) {
        return;
    }
    $("body").attr("location", location.href);
    $(".order-detail-note-info-textarea").css("height", "80px").css("width", "330px");
    checkItems();
}

function checkItems() {
    if (user == null || user.shopid == "") {
        user = getUserInfo();
    }
    if (user.shopid == "" || $("label:contains('订单流水')").next().val() == "") {
        setTimeout("checkItems()", 500);
        return;
    }
    //地址
    if ($(".o-d-b-i-c-address span:contains('联系地址')").length == 0) {
        setTimeout("checkItems()", 500);
        return;
    }
    if (user == null || user.shopid == "") {
        setTimeout("checkItems()", 500);
        return;
    }

    //保存订单信息
    orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];
    if (orderList == null) orderList = [];
    while (orderList.length > 2000) {
        orderList.splice(0, 1);
    }


    if (location.href.indexOf("Express=1") > 0) {
        $(".express-import")[0].click();
        var orderId = $("label:contains('订单流水')").next().val();
        getExpressFromServer(orderId);
        return;
    }

    getOrderInfo();
    //打开采购地址 
    var orderUrl = getSubstring(location.href + "&", "OrderUrl=", "&");
    if (orderUrl == "") {
        return;
    }
    // orderUrl = base64Decode(orderUrl);
    openOrder(base64Decode(orderUrl));
}

function openOrder(orderUrl) {
    console.log("open Order:"+orderUrl);
    var orderInfo = {};
    orderInfo.orderUrl = orderUrl;
    orderInfo.shop = $("label:contains('店铺名称')").next().val();
    orderInfo.id = $("label:contains('订单流水')").next().val();
    orderInfo.title = $(".o-d-g-i-first").next().text();
    orderInfo.num = $(".o-d-g-i-first").next().next().next().next().text();
    orderInfo.price = $(".o-d-g-i-first").next().next().next().text();
    orderInfo.skus = $(".o-d-g-i-first").next().next().text().split(',');
    orderInfo.skumap = getSubstring(location.href + "&", "skumap=", "&");

    orderInfo.userComment = "";
    orderInfo.addr = { linkman: "", phone: "", province: "", city: "", district: "", street: "" };
    var people = $(".o-d-b-i-c-people span");
    orderInfo.addr.linkman = people.eq(1).text();
    orderInfo.addr.phone = people.eq(2).text();

    var patten = />([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]*)<[^>]+><[^>]+>([^<]+)</g;
    var result = "";

    if((result=patten.exec($(".o-d-b-i-c-address span:eq(1)").html())) != null) {
        orderInfo.addr.province = result[1];
        orderInfo.addr.city = result[3];
        orderInfo.addr.district = result[5];
        orderInfo.addr.street = result[6];
    }
    if (orderInfo.addr.street == "") {
        alert("订单地址获取失败");
        return;
    }

    S = base64Encode("flag");
    chrome.extension.sendRequest({ type: "setBackgroundValue", key: "CurrentOrder", value: orderInfo }, function () { });
    //window.stop();

    window.open(orderInfo.orderUrl);
}

function getOrderInfo() {
    var orderInfo = null;
    var orderId = $("label:contains('订单流水')").next().val();

    for (var i = orderList.length - 1; i >= 0; i--) {
        if (orderList[i].OrderId == orderId) {
            orderList.splice(i, 1);
        }
    }

    orderInfo = { OrderId: orderId };
    orderInfo.LinkMan = $(".o-d-b-i-c-people span:eq(1)").text();
    orderInfo.Phone = $(".o-d-b-i-c-people span:eq(2)").text();
    orderInfo.Address = $("span:contains('联系地址')").next().text();
    orderInfo.skus = $(".o-d-g-i-first").next().text();
    orderInfo.Buyer = "";
    $(".o-d-n-i-time").next().each(function () {
        var text = $(this).text() + "";
        if (text.indexOf("(") > 0 && text.indexOf(")") > 0) {
            orderInfo.Buyer = text;
            return false;
        }
    });
    orderList.push(orderInfo);
    localStorage.orderList = JSON.stringify(orderList);
}

function e() {
    return "undefined" == typeof  $ || "undefined" == typeof  getUserInfo ? (setTimeout(e, 500), void  0) : ($("body").attr("location") != location.href && ($("body").attr("location", location.href), $(".order-detail-note-info-textarea").css("height", "80px").css("width", "330px"), chrome.extension && chrome.extension.sendRequest({
        type: "getStorage",
        key: "staff"
    }, function (a) {
        a && (d = a)
    }), f()), void  0)
}

function f() {
    var b, d, e, k, l, m, n, o;
    if (a = {shopid: ""}, "undefined" != typeof  localStorage.userinfo && (b = JSON.parse(localStorage.userinfo), a = {
            shopid: b.mall_id,
            username: b.username
        }), "" == a.shopid || "" == $("label:contains('订单流水')").next().val()) return setTimeout(f, 500), void  0;
    if (0 == $(".o-d-b-i-c-address  span:contains('联系地址')").length) return setTimeout(f, 500), void  0;
    if (null == a || "" == a.shopid) return setTimeout(f, 500), void  0;
    for (c = localStorage.orderList ? JSON.parse(localStorage.orderList) : [], null == c && (c = []); c.length > 2e3;) c.splice(0, 1);
    return location.href.indexOf("Express=1") > 0 ? ($(".express-import")[0].click(), d = $("label:contains('订单流水')").next().val(), j(d), void  0) : (e = getSubstring(location.href + "&", "BuyOrderId=", "&"), "" != e ? (k = getSubstring(location.href + "&", "sn=", "&"), l = getSubstring(location.href + "&", "comment=", "&"), l = decodeURI(l), i(k, l), void  0) : (m = getSubstring(location.href + "&", "OrderUrl=", "&"), "" != m && (n = window.innerHeight / 2, o = (window.innerWidth - 380) / 2, $("body").append('<div  style="position:  fixed;top:  ' + n + "px;left:  " + o + 'px;  z-index:  99990;border:  1px  solid  #0c66ec;padding:  10px;background-color:  #aacff4;font-size:  16px;font-weight:  bold;">正在执行采购操作，请不要手工关闭本页面...<br>采购完如没自动关闭，请手工备注采购订单号</div>')), h(), "" != m && (m = base64Decode(m), g(m)), void  0))
}

function g(b) {
    var c, e, f, g, h, i, j, k, l;
    if (0 == d.length && "易下单" == chrome.runtime.getManifest().name) return alert("请先配置员工信息"), void  0;
    if (c = {}, c.orderUrl = b, c.shop = a.username, e = $(".order-detail-goods-info  tbody  tr"), c.id = $("label:contains('订单流水')").next().val(), f = getSubstring(location.href + "&", "sn=", "&"), c.id != f && alert("订单号不一致，请重新打开或联系客服"), c.title = e.find("td:eq(1)").text(), c.num = e.find("td:eq(4)").text(), c.price = e.find("td:eq(5)").text(), c.price.indexOf("元") > 0 && (c.price = c.price.substr(0, c.price.indexOf("元") + 1)), c.skus = e.find("td:eq(2)").text().split(","), c.skumap = getSubstring(location.href + "&", "skumap=", "&"), c.userComment = "", c.platform = "pdd", c.staff = d, g = 0, $.ajax({
            type: "post",
            url: "http://" + location.host + "/mars/shop/getNoteList",
            data: JSON.stringify({orderSn: c.id}),
            datType: "JSON",
            contentType: "application/json",
            async: !1,
            success: function (a) {
                var b, d, e;
                if (a.result && (b = a.result, d = /\d{15,}/, void  0 != b.length)) for (e = 0; e < b.length; e++) void  0 != b[e].note && null != b[e].note && (d.test(b[e].note) ? g++ : b[e].note.length > 30 || b[e].note.indexOf("快递单号") > 0 || b[e].note.indexOf("更新收货地址") >= 0 || b[e].note.indexOf("商家生成订单") >= 0 || "" == c.userComment && (c.userComment = b[e].note))
            }
        }), !(g > 0 && 0 == confirm("发现采购单号，可能采购过，是否继续采购？"))) {
        for (c.addr = {
            linkman: "",
            phone: "",
            province: "",
            city: "",
            district: "",
            street: ""
        }, h = $(".o-d-b-i-c-people  span"), c.addr.linkman = h.eq(1).text(), c.addr.phone = h.eq(2).text(), i = $(".o-d-b -i-c-address span:eq(1)").html().split(">"), j = i.length - 1; j >= 0; j--) k = i[j].indexOf("<"), 0 >= k ? i.splice(j, 1) : i[j] = i[j].substr(0, k);
        if (l = i, 3 == l.length || 4 == l.length ? (c.addr.province = l[0], c.addr.city = l[1], 4 == l.length && (c.addr.district = l[2]), c.addr.street = l[l.length - 1]) : (5 == l.length || 6 == l.length) && (c.addr.province = l[0], c.addr.city = l[2], 6 == l.length && (c.addr.district = l[4]), c.addr.street = l[l.length - 1]), "" == c.addr.street) return alert("订单地址获取失败"), void 0;
        chrome.extension.sendRequest({type: "setBackgroundValue", key: "CurrentOrder", value: c}, function () {
        }), location.href = c.orderUrl
    }
}

function h() {
    var d, e, a = null, b = $("label:contains('订单流水')").next().val();
    for (d = c.length - 1; d >= 0; d--) c[d].OrderId == b && c.splice(d, 1);
    a = {OrderId: b}, a.LinkMan = $(".o-d-b-i-c-people span:eq(1)").text(), a.Phone = $(".o-d-b-i-c-people span:eq(2)").text(), a.Address = $("span:contains('联系地址')").next().text(), e = $(".order-detail-goods-info tbody tr"), a.skus = e.find("td:eq(2)").text().split(","), a.Buyer = "", $(".o-d-n-i-time").next().each(function () {
        var b = $(this).text() + "";
        return b.indexOf("(") > 0 && b.indexOf(")") > 0 ? (a.Buyer = b, !1) : void 0
    }), c.push(a), localStorage.orderList = JSON.stringify(c)
}

function i(a, b) {
    var d, e, f, g;
    if (null != c) for (d = c.length - 1; d >= 0; d--) if (c[d].OrderId == a) {
        c[d].Buyer = b, localStorage.orderList = JSON.stringify(c);
        break
    }
    e = $("a:contains('新增备注')"), e.length > 0 && e[0].click(), setTimeout(function () {
        var a = $(".order-detail-note-info-textarea");
        a.length > 0 && a.val(b)
    }, 500), f = "http://" + location.host + "/mars/shop/addOrderNote", g = {
        orderSn: a,
        remark: b
    }, $.ajax({
        type: "post",
        url: f,
        data: JSON.stringify(g),
        dataType: "json",
        contentType: "application/json",
        success: function (b) {
            b.result && b.success && ($.ajax({
                type: "post",
                url: "http://" + location.host + "/mars/shop/getNoteList",
                data: JSON.stringify({orderSn: a}),
                datType: "JSON",
                contentType: "application/json",
                async: !1,
                success: function (a) {
                    var b, c, d, e;
                    if (a.result && (b = a.result, c = /\d{15,}/, void 0 != b.length)) {
                        for (d = 0, e = 0; e < b.length; e++) c.test(b[e].note) && d++;
                        d > 1 && alert("发现多个采购单号，请检查是否重复下单。")
                    }
                }
            }), chrome.extension.sendRequest({
                type: "setBackgroundValue",
                key: "CurrentOrder",
                value: null
            }, function () {
                window.close()
            }))
        }
    })
}

function j(a) {
    $.ajax({
        type: "post",
        dataType: "json",
        url: serviceHost + "/User/Service/GetExpress",
        data: {orderId: a, comment: ""},
        success: function (a) {
            $("span:contains('请选择快递')").parent().parent().append(a.name), $("label:contains('运单号')").next().val(a.id), $("label:contains('运单号')").next().after("<input type=text value='" + a.id + "' style='width:110px;border:none' readonly />")
        },
        error: function () {
            alert("快递信息获取失败")
        }
    })
}

var a = null, c = null, d = "";
//接收消息
chrome.extension.onRequest.addListener(
    function (a, b, c) {
        var e, f, g, h, j;
        return "setOrder" == a.type ? (e = $("a:contains('新增备注')"), f = a.comment, e.length > 0 ? e[0].click() : alert("找不到添加备注按钮"), g = $(".order-detail-note-info-textarea"), g.length > 0 ? g.val() == f ? (console.log("重复备注"), void 0) : (g.text(f), $(".pdd-modal a:contains('确定')").click(), h = serviceHost + "/main/main/saveorderinfo", j = {
            orderId: a.orderid,
            buyOrderId: a.buyOrderId,
            buyAccount: unescape(a.buyAccount),
            buymoney: a.buyMoney,
            staff: d
        }, chrome.extension.sendRequest({type: "ajax", url: h, data: j}, function () {
        }), i(a.orderid, f), c(!0)) : (console.log("找不到备注输入框"), c(!1))) : void 0
    }
//
//     function (request, sender, sendResponse) {
//         if (request.type == "setOrder") {
//             //request.orderid;
//             //request.comment;
//             var editBtn = $("a:contains('新增备注')");
//             var commentText = request.comment;
//
//             if (orderList != null) {
//                 for (var i = orderList.length - 1; i >= 0; i--) {
//                     if (orderList[i].OrderId == request.orderid) {
//                         orderList[i].Buyer = commentText;
//                         localStorage.orderList = JSON.stringify(orderList);
//                         break;
//                     }
//                 }
//             }
//
//             if (editBtn.length > 0) {
//                 editBtn[0].click();
//             } else {
//                 alert("找不到添加备注按钮");
//             }
//
//             var input = $(".order-detail-note-info-textarea");
//             if (input.length > 0) {
//                 if (input.val() == commentText) {
//                     console.log("重复备注");
//                     return;
//                 }
//                 input.val(commentText);
//                 fireEvent(input, "change");
//                 $(".pdd-modal a:contains('确定')").click();//需要修改才能保存
//             }
//             else {
//                 console.log("找不到备注输入框");
//                 return sendResponse(false);
//             }
//
//             var url = serviceHost + "/main/main/saveorderinfo";
//             var data = { orderId: request.orderid, buyOrderId: request.buyOrderId, buyAccount: unescape(request.buyAccount), buymoney: request.buyMoney };
//             chrome.extension.sendRequest({ type: "ajax", url: url, data: data }, function (html) {
//
//             });
//             saveNote(request.orderid, commentText);
//             return sendResponse(true);
//         }
//     }
);

function saveNote(orderId, comment) {
    var url = "http://" + location.host + "/orders/note/" + orderId;
    var postData = { note: comment, order_sn: orderId };
    $.post(url, postData, function (data) {
        if (data.result && data.data.note.indexOf(comment) >= 0) {
            window.close();
        }
    });
}

function fireEvent(fireObj, eventType) {
    if (fireObj.length < 1) return;
    var eventInterface = (eventType.indexOf("click") >= 0 || eventType.indexOf("mouse") >= 0) ? "MouseEvents" : "HTMLEvents";
    eventInterface = "HTMLEvents";
    var evt = document.createEvent(eventInterface);
    if (eventType == "change")
        evt.initEvent("change", false, true);
    else
        evt.initEvent(eventType, true, false);
    fireObj[0].dispatchEvent(evt);
}

function getExpressFromServer(orderId) {
    $.ajax({
        type: "post",
        dataType: "json",
        url: serviceHost + "/User/Service/GetExpress",
        data: { orderId: orderId, comment: "" },
        success: function (data) {
            $(".pdd-modal .pdd-dui-select").after(data.name);
            $("label:contains('运单号')").next().val(data.id);
            $("label:contains('运单号')").next().after("<input type=text value='" + data.id + "' style='width:110px;border:none' readonly />");
        },
        error: function () {
            alert("快递信息获取失败");
        }
    });
}