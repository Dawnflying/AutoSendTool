var scriptPinDuoDuoDetail = "var user = null;\n" +
    "var tabid = null;\n" +
    "var orderList = null;\n" +
    "\n" +
    "init();\n" +
    "\n" +
    "function init() {\n" +
    "    if (typeof $ == \"undefined\" || typeof getUserInfo == \"undefined\") {\n" +
    "        setTimeout(\"init()\", 500);\n" +
    "        return;\n" +
    "    }\n" +
    "    if ($(\"body\").attr(\"location\") == location.href) {\n" +
    "        return;\n" +
    "    }\n" +
    "    $(\"body\").attr(\"location\", location.href);\n" +
    "    $(\".order-detail-note-info-textarea\").css(\"height\", \"80px\").css(\"width\", \"330px\");\n" +
    "    checkItems();\n" +
    "}\n" +
    "\n" +
    "function checkItems() {\n" +
    "    if (user == null || user.shopid == \"\") {\n" +
    "        user = getUserInfo();\n" +
    "    }\n" +
    "    if (user.shopid == \"\" || $(\"label:contains('订单流水')\").next().val() == \"\") {\n" +
    "        setTimeout(\"checkItems()\", 500);\n" +
    "        return;\n" +
    "    }\n" +
    "    //地址\n" +
    "    if ($(\".o-d-b-i-c-address span:contains('联系地址')\").length == 0) {\n" +
    "        setTimeout(\"checkItems()\", 500);\n" +
    "        return;\n" +
    "    }\n" +
    "    if (user == null || user.shopid == \"\") {\n" +
    "        setTimeout(\"checkItems()\", 500);\n" +
    "        return;\n" +
    "    }\n" +
    "\n" +
    "    //保存订单信息\n" +
    "    orderList = localStorage.orderList ? JSON.parse(localStorage.orderList) : [];\n" +
    "    if (orderList == null) orderList = [];\n" +
    "    while (orderList.length > 2000) {\n" +
    "        orderList.splice(0, 1);\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    if (location.href.indexOf(\"Express=1\") > 0) {\n" +
    "        $(\".express-import\")[0].click();\n" +
    "        var orderId = $(\"label:contains('订单流水')\").next().val();\n" +
    "        getExpressFromServer(orderId);\n" +
    "        return;\n" +
    "    }\n" +
    "\n" +
    "    getOrderInfo();\n" +
    "    //打开采购地址 \n" +
    "    var orderUrl = getSubstring(location.href + \"&\", \"OrderUrl=\", \"&\");\n" +
    "    if (orderUrl == \"\") {\n" +
    "        return;\n" +
    "    }\n" +
    "    // orderUrl = base64Decode(orderUrl);\n" +
    "    openOrder(orderUrl);\n" +
    "}\n" +
    "\n" +
    "function openOrder(orderUrl) {\n" +
    "    var orderInfo = {};\n" +
    "    orderInfo.orderUrl = orderUrl;\n" +
    "    orderInfo.shop = $(\"label:contains('店铺名称')\").next().val();\n" +
    "    orderInfo.id = $(\"label:contains('订单流水')\").next().val();\n" +
    "    orderInfo.title = $(\".o-d-g-i-first\").next().text();\n" +
    "    orderInfo.num = $(\".o-d-g-i-first\").next().next().next().next().text();\n" +
    "    orderInfo.price = $(\".o-d-g-i-first\").next().next().next().text();\n" +
    "    orderInfo.skus = $(\".o-d-g-i-first\").next().next().text().split(',');\n" +
    "    orderInfo.skumap = getSubstring(location.href + \"&\", \"skumap=\", \"&\");\n" +
    "\n" +
    "    orderInfo.userComment = \"\";\n" +
    "    orderInfo.addr = { linkman: \"\", phone: \"\", province: \"\", city: \"\", district: \"\", street: \"\" };\n" +
    "    var people = $(\".o-d-b-i-c-people span\");\n" +
    "    orderInfo.addr.linkman = people.eq(1).text();\n" +
    "    orderInfo.addr.phone = people.eq(2).text();\n" +
    "\n" +
    "    var patten = />([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]+)<[^>]+><[^>]+>([^<]*)<[^>]+><[^>]+>([^<]+)</g;\n" +
    "    var result = \"\";\n" +
    "\n" +
    "    if((result=patten.exec($(\".o-d-b-i-c-address span:eq(1)\").html())) != null) {\n" +
    "        orderInfo.addr.province = result[1];\n" +
    "        orderInfo.addr.city = result[3];\n" +
    "        orderInfo.addr.district = result[5];\n" +
    "        orderInfo.addr.street = result[6];\n" +
    "    }\n" +
    "    if (orderInfo.addr.street == \"\") {\n" +
    "        alert(\"订单地址获取失败\");\n" +
    "        return;\n" +
    "    }\n" +
    "\n" +
    "    chrome.extension.sendRequest({ type: \"setBackgroundValue\", key: \"CurrentOrder\", value: orderInfo }, function () { });\n" +
    "    //window.stop();\n" +
    "    window.open(orderInfo.orderUrl);\n" +
    "}\n" +
    "\n" +
    "function getOrderInfo() {\n" +
    "    var orderInfo = null;\n" +
    "    var orderId = $(\"label:contains('订单流水')\").next().val();\n" +
    "\n" +
    "    for (var i = orderList.length - 1; i >= 0; i--) {\n" +
    "        if (orderList[i].OrderId == orderId) {\n" +
    "            orderList.splice(i, 1);\n" +
    "        }\n" +
    "    }\n" +
    "\n" +
    "    orderInfo = { OrderId: orderId };\n" +
    "    orderInfo.LinkMan = $(\".o-d-b-i-c-people span:eq(1)\").text();\n" +
    "    orderInfo.Phone = $(\".o-d-b-i-c-people span:eq(2)\").text();\n" +
    "    orderInfo.Address = $(\"span:contains('联系地址')\").next().text();\n" +
    "    orderInfo.skus = $(\".o-d-g-i-first\").next().text();\n" +
    "    orderInfo.Buyer = \"\";\n" +
    "    $(\".o-d-n-i-time\").next().each(function () {\n" +
    "        var text = $(this).text() + \"\";\n" +
    "        if (text.indexOf(\"(\") > 0 && text.indexOf(\")\") > 0) {\n" +
    "            orderInfo.Buyer = text;\n" +
    "            return false;\n" +
    "        }\n" +
    "    });\n" +
    "    orderList.push(orderInfo);\n" +
    "    localStorage.orderList = JSON.stringify(orderList);\n" +
    "}\n" +
    "\n" +
    "//接收消息\n" +
    "chrome.extension.onRequest.addListener(\n" +
    "\n" +
    "    function (request, sender, sendResponse) {\n" +
    "        if (request.type == \"setOrder\") {\n" +
    "            //request.orderid;\n" +
    "            //request.comment;\n" +
    "            var editBtn = $(\"a:contains('新增备注')\");\n" +
    "            var commentText = request.comment;\n" +
    "\n" +
    "            if (orderList != null) {\n" +
    "                for (var i = orderList.length - 1; i >= 0; i--) {\n" +
    "                    if (orderList[i].OrderId == request.orderid) {\n" +
    "                        orderList[i].Buyer = commentText;\n" +
    "                        localStorage.orderList = JSON.stringify(orderList);\n" +
    "                        break;\n" +
    "                    }\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            if (editBtn.length > 0) {\n" +
    "                editBtn[0].click();\n" +
    "            } else {\n" +
    "                alert(\"找不到添加备注按钮\");\n" +
    "            }\n" +
    "\n" +
    "            var input = $(\".order-detail-note-info-textarea\");\n" +
    "            if (input.length > 0) {\n" +
    "                if (input.val() == commentText) {\n" +
    "                    console.log(\"重复备注\");\n" +
    "                    return;\n" +
    "                }\n" +
    "                input.val(commentText);\n" +
    "                fireEvent(input, \"change\");\n" +
    "                $(\".pdd-modal a:contains('确定')\").click();//需要修改才能保存\n" +
    "            }\n" +
    "            else {\n" +
    "                console.log(\"找不到备注输入框\");\n" +
    "                return sendResponse(false);\n" +
    "            }\n" +
    "\n" +
    "            var url = serviceHost + \"/User/Service/SaveBuyOrderInfo\";\n" +
    "            var data = { orderId: request.orderid, buyOrderId: request.buyOrderId, buyAccount: unescape(request.buyAccount), buymoney: request.buyMoney };\n" +
    "            chrome.extension.sendRequest({ type: \"ajax\", url: url, data: data }, function (html) {\n" +
    "\n" +
    "            });\n" +
    "            saveNote(request.orderid, commentText);\n" +
    "            return sendResponse(true);\n" +
    "        }\n" +
    "    }\n" +
    ");\n" +
    "\n" +
    "function saveNote(orderId, comment) {\n" +
    "    var url = \"http://\" + location.host + \"/orders/note/\" + orderId;\n" +
    "    var postData = { note: comment, order_sn: orderId };\n" +
    "    $.post(url, postData, function (data) {\n" +
    "        if (data.result && data.data.note.indexOf(comment) >= 0) {\n" +
    "            window.close();\n" +
    "        }\n" +
    "    });\n" +
    "}\n" +
    "\n" +
    "function fireEvent(fireObj, eventType) {\n" +
    "    if (fireObj.length < 1) return;\n" +
    "    var eventInterface = (eventType.indexOf(\"click\") >= 0 || eventType.indexOf(\"mouse\") >= 0) ? \"MouseEvents\" : \"HTMLEvents\";\n" +
    "    eventInterface = \"HTMLEvents\";\n" +
    "    var evt = document.createEvent(eventInterface);\n" +
    "    if (eventType == \"change\")\n" +
    "        evt.initEvent(\"change\", false, true);\n" +
    "    else\n" +
    "        evt.initEvent(eventType, true, false);\n" +
    "    fireObj[0].dispatchEvent(evt);\n" +
    "}\n" +
    "\n" +
    "function getExpressFromServer(orderId) {\n" +
    "    $.ajax({\n" +
    "        type: \"post\",\n" +
    "        dataType: \"json\",\n" +
    "        url: serviceHost + \"/User/Service/GetExpress\",\n" +
    "        data: { orderId: orderId, comment: \"\" },\n" +
    "        success: function (data) {\n" +
    "            $(\".pdd-modal .pdd-dui-select\").after(data.name);\n" +
    "            $(\"label:contains('运单号')\").next().val(data.id);\n" +
    "            $(\"label:contains('运单号')\").next().after(\"<input type=text value='\" + data.id + \"' style='width:110px;border:none' readonly />\");\n" +
    "        },\n" +
    "        error: function () {\n" +
    "            alert(\"快递信息获取失败\");\n" +
    "        }\n" +
    "    });\n" +
    "}";