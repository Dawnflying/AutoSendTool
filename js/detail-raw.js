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
    openOrder(orderUrl);
}

function openOrder(orderUrl) {
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

//接收消息
chrome.extension.onRequest.addListener(

    function (request, sender, sendResponse) {
        if (request.type == "setOrder") {
            //request.orderid;
            //request.comment;
            var editBtn = $("a:contains('新增备注')");
            var commentText = request.comment;

            if (orderList != null) {
                for (var i = orderList.length - 1; i >= 0; i--) {
                    if (orderList[i].OrderId == request.orderid) {
                        orderList[i].Buyer = commentText;
                        localStorage.orderList = JSON.stringify(orderList);
                        break;
                    }
                }
            }

            if (editBtn.length > 0) {
                editBtn[0].click();
            } else {
                alert("找不到添加备注按钮");
            }

            var input = $(".order-detail-note-info-textarea");
            if (input.length > 0) {
                if (input.val() == commentText) {
                    console.log("重复备注");
                    return;
                }
                input.val(commentText);
                fireEvent(input, "change");
                $(".pdd-modal a:contains('确定')").click();//需要修改才能保存
            }
            else {
                console.log("找不到备注输入框");
                return sendResponse(false);
            }

            var url = serviceHost + "/User/Service/SaveBuyOrderInfo";
            var data = { orderId: request.orderid, buyOrderId: request.buyOrderId, buyAccount: unescape(request.buyAccount), buymoney: request.buyMoney };
            chrome.extension.sendRequest({ type: "ajax", url: url, data: data }, function (html) {

            });
            saveNote(request.orderid, commentText);
            return sendResponse(true);
        }
    }
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