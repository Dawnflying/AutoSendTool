0 < document.location.href.indexOf("deliver_address_frame.htm") && updateAddress();

function updateAddress() {
    var a = $("#J_Street");
    0 == a.length || a.attr("disabled") ? setTimeout("updateAddress()", 1E3) : chrome.extension.sendRequest({
        type: "getBackgroundValue",
        key: "CurrentOrder"
    }, function (a) {
        var b = a.addr;
        showOrderInfo(a);
        $(".J_CnCity").click();
        $(".city-province a").each(function () {
            if (0 <= b.province.indexOf($(this).text())) return this.click(), !1
        });
        $(".city-city a").each(function () {
            if (0 <= b.city.indexOf($(this).text())) return this.click(), !1
        });
        $(".city-district a").each(function () {
            if (0 <= b.district.indexOf($(this).text())) return this.click(),
                !1
        });
        $("body").click();
        $("#J_Name").val(b.linkman);
        $("#J_Street").val(b.street).trigger("focus").trigger("blur");
        $("#J_Mobile").val(b.phone);
        $("#J_PhoneSection").val("");
        $("#J_PhoneCode").val("");
        $("#J_PhoneExt").val("");
        $("#J_PostCode").val("");
        $("#J_SelectCode").click();
        checkSelectCode()
    })
}

function checkSelectCode() {
    0 == $("#J_SelectCode").length ? setTimeout("checkSelectCode()", 1E3) : $("#J_SelectCode")[0].click()
}

function showOrderInfo(a) {
    var c = $("#J_ItemStreet #addrBox");
    0 == c.length && (c = $("<div id='addrBox' style='border:1px solid blue;width:400px'></div>"), $("#J_ItemStreet").append(c), c.html(a.addr.linkman + "\uff0c" + a.addr.phone + "\uff0c" + a.addr.province + "\uff0c" + a.addr.city + "\uff0c" + a.addr.district + "\uff0c" + a.addr.street))
};