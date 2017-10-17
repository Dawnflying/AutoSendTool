var version = "1.6.0";
// var serviceHost = "http://www..feixiongzhushou.com:8088";
var serviceHost = "http://localhost:8089";
chrome.extension.onRequest.addListener(function (a, b, c) {
    if ("getUserNick" == a.type) return a = getUserInfo(), c(a)
});

function getUserInfo() {
    if (0 < location.href.indexOf(".jd.com")) return getUserFromJd();
    if (0 <= location.href.indexOf(".meilishuo.com")) return getUserFromMeilishuo();
    if (0 <= location.href.indexOf("mms.yangkeduo.com/") || 0 <= location.href.indexOf("mms.pinduoduo.com/")) return {shopid: JSON.parse(localStorage.userinfo).mall_id};
    var a = $(".user-name").attr("href");
    if (null == a || "" == a) a = $(".login a").attr("href");
    if (null == a || "" == a) return {shopid: ""};
    a = a.replace("http:", "").replace("//shop.mogujie.com/", "");
    0 < a.indexOf("?") &&
    (a = a.sustr(0, a.indexOf("?")));
    return {shopid: a}
}

function getUserFromJd() {
    if (0 < location.href.indexOf("order.shop.jd.com/order/")) {
        var a = $("a:contains('\u6dfb\u52a0\u5907\u6ce8'):eq(0)");
        0 == a.length && (a = $("a:contains('\u4fee\u6539\u5907\u6ce8'):eq(0)"));
        if (0 < a.length) return a = a.attr("onclick").split(",")[1], a = a.replace(");", ""), {shopid: a}
    } else if (0 < location.href.indexOf("ware.shop.jd.com/onSaleWare/onSaleWare_newDoSearch.action")) return {shopid: $("#venderId").val()};
    return {shopid: ""}
}

function getUserFromMeilishuo() {
    var a = "";
    $.each(document.cookie.split(";"), function (b, d) {
        if (0 <= d.indexOf("shopid=")) return a = d.replace("shopid=", "").trim(), !1
    });
    if ("" == a) {
        var b = $("a[href*='item.meilishuo.com/detail']:eq(0)");
        if (0 == b.length) return {shopid: ""};
        b = b.attr("href");
        chrome.extension.sendRequest({type: "ajax", url: b, data: null}, function (b) {
            a = getSubstring(b, '<input type="hidden" id="shopId" value="', '"');
            document.cookie = "shopid=" + a;
            return {shopid: a}
        })
    }
    return {shopid: a}
}

function getSubstring(a, b, c, d) {
    if (void 0 == a || null == a || "" == a) return "";
    var e = a.indexOf(b);
    return 0 <= e ? (c = a.indexOf(c, e + b.length), a = a.substring(e + b.length, c), d && (a = a.replace(/<[^>]+>/g, "")), $.trim(a)) : ""
}

var hexcase = 0, b64pad = "", chrsz = 8;

function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}

function b64_md5(a) {
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}

function str_md5(a) {
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}

function hex_hmac_md5(a, b) {
    return binl2hex(core_hmac_md5(a, b))
}

function b64_hmac_md5(a, b) {
    return binl2b64(core_hmac_md5(a, b))
}

function str_hmac_md5(a, b) {
    return binl2str(core_hmac_md5(a, b))
}

function core_md5(a, b) {
    a[b >> 5] |= 128 << b % 32;
    a[(b + 64 >>> 9 << 4) + 14] = b;
    b = 1732584193;
    for (var c = -271733879, d = -1732584194, e = 271733878, f = 0; f < a.length; f += 16) {
        var g = b, h = c, k = d, l = e;
        b = md5_ff(b, c, d, e, a[f + 0], 7, -680876936);
        e = md5_ff(e, b, c, d, a[f + 1], 12, -389564586);
        d = md5_ff(d, e, b, c, a[f + 2], 17, 606105819);
        c = md5_ff(c, d, e, b, a[f + 3], 22, -1044525330);
        b = md5_ff(b, c, d, e, a[f + 4], 7, -176418897);
        e = md5_ff(e, b, c, d, a[f + 5], 12, 1200080426);
        d = md5_ff(d, e, b, c, a[f + 6], 17, -1473231341);
        c = md5_ff(c, d, e, b, a[f + 7], 22, -45705983);
        b = md5_ff(b, c, d, e, a[f + 8], 7,
            1770035416);
        e = md5_ff(e, b, c, d, a[f + 9], 12, -1958414417);
        d = md5_ff(d, e, b, c, a[f + 10], 17, -42063);
        c = md5_ff(c, d, e, b, a[f + 11], 22, -1990404162);
        b = md5_ff(b, c, d, e, a[f + 12], 7, 1804603682);
        e = md5_ff(e, b, c, d, a[f + 13], 12, -40341101);
        d = md5_ff(d, e, b, c, a[f + 14], 17, -1502002290);
        c = md5_ff(c, d, e, b, a[f + 15], 22, 1236535329);
        b = md5_gg(b, c, d, e, a[f + 1], 5, -165796510);
        e = md5_gg(e, b, c, d, a[f + 6], 9, -1069501632);
        d = md5_gg(d, e, b, c, a[f + 11], 14, 643717713);
        c = md5_gg(c, d, e, b, a[f + 0], 20, -373897302);
        b = md5_gg(b, c, d, e, a[f + 5], 5, -701558691);
        e = md5_gg(e, b, c, d, a[f +
        10], 9, 38016083);
        d = md5_gg(d, e, b, c, a[f + 15], 14, -660478335);
        c = md5_gg(c, d, e, b, a[f + 4], 20, -405537848);
        b = md5_gg(b, c, d, e, a[f + 9], 5, 568446438);
        e = md5_gg(e, b, c, d, a[f + 14], 9, -1019803690);
        d = md5_gg(d, e, b, c, a[f + 3], 14, -187363961);
        c = md5_gg(c, d, e, b, a[f + 8], 20, 1163531501);
        b = md5_gg(b, c, d, e, a[f + 13], 5, -1444681467);
        e = md5_gg(e, b, c, d, a[f + 2], 9, -51403784);
        d = md5_gg(d, e, b, c, a[f + 7], 14, 1735328473);
        c = md5_gg(c, d, e, b, a[f + 12], 20, -1926607734);
        b = md5_hh(b, c, d, e, a[f + 5], 4, -378558);
        e = md5_hh(e, b, c, d, a[f + 8], 11, -2022574463);
        d = md5_hh(d, e, b, c, a[f +
        11], 16, 1839030562);
        c = md5_hh(c, d, e, b, a[f + 14], 23, -35309556);
        b = md5_hh(b, c, d, e, a[f + 1], 4, -1530992060);
        e = md5_hh(e, b, c, d, a[f + 4], 11, 1272893353);
        d = md5_hh(d, e, b, c, a[f + 7], 16, -155497632);
        c = md5_hh(c, d, e, b, a[f + 10], 23, -1094730640);
        b = md5_hh(b, c, d, e, a[f + 13], 4, 681279174);
        e = md5_hh(e, b, c, d, a[f + 0], 11, -358537222);
        d = md5_hh(d, e, b, c, a[f + 3], 16, -722521979);
        c = md5_hh(c, d, e, b, a[f + 6], 23, 76029189);
        b = md5_hh(b, c, d, e, a[f + 9], 4, -640364487);
        e = md5_hh(e, b, c, d, a[f + 12], 11, -421815835);
        d = md5_hh(d, e, b, c, a[f + 15], 16, 530742520);
        c = md5_hh(c, d, e,
            b, a[f + 2], 23, -995338651);
        b = md5_ii(b, c, d, e, a[f + 0], 6, -198630844);
        e = md5_ii(e, b, c, d, a[f + 7], 10, 1126891415);
        d = md5_ii(d, e, b, c, a[f + 14], 15, -1416354905);
        c = md5_ii(c, d, e, b, a[f + 5], 21, -57434055);
        b = md5_ii(b, c, d, e, a[f + 12], 6, 1700485571);
        e = md5_ii(e, b, c, d, a[f + 3], 10, -1894986606);
        d = md5_ii(d, e, b, c, a[f + 10], 15, -1051523);
        c = md5_ii(c, d, e, b, a[f + 1], 21, -2054922799);
        b = md5_ii(b, c, d, e, a[f + 8], 6, 1873313359);
        e = md5_ii(e, b, c, d, a[f + 15], 10, -30611744);
        d = md5_ii(d, e, b, c, a[f + 6], 15, -1560198380);
        c = md5_ii(c, d, e, b, a[f + 13], 21, 1309151649);
        b = md5_ii(b,
            c, d, e, a[f + 4], 6, -145523070);
        e = md5_ii(e, b, c, d, a[f + 11], 10, -1120210379);
        d = md5_ii(d, e, b, c, a[f + 2], 15, 718787259);
        c = md5_ii(c, d, e, b, a[f + 9], 21, -343485551);
        b = safe_add(b, g);
        c = safe_add(c, h);
        d = safe_add(d, k);
        e = safe_add(e, l)
    }
    return [b, c, d, e]
}

function md5_cmn(a, b, c, d, e, f) {
    return safe_add(bit_rol(safe_add(safe_add(b, a), safe_add(d, f)), e), c)
}

function md5_ff(a, b, c, d, e, f, g) {
    return md5_cmn(b & c | ~b & d, a, b, e, f, g)
}

function md5_gg(a, b, c, d, e, f, g) {
    return md5_cmn(b & d | c & ~d, a, b, e, f, g)
}

function md5_hh(a, b, c, d, e, f, g) {
    return md5_cmn(b ^ c ^ d, a, b, e, f, g)
}

function md5_ii(a, b, c, d, e, f, g) {
    return md5_cmn(c ^ (b | ~d), a, b, e, f, g)
}

function core_hmac_md5(a, b) {
    var c = str2binl(a);
    16 < c.length && (c = core_md5(c, a.length * chrsz));
    var d = Array(16);
    a = Array(16);
    for (var e = 0; 16 > e; e++) d[e] = c[e] ^ 909522486, a[e] = c[e] ^ 1549556828;
    b = core_md5(d.concat(str2binl(b)), 512 + b.length * chrsz);
    return core_md5(a.concat(b), 640)
}

function safe_add(a, b) {
    var c = (a & 65535) + (b & 65535);
    return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
}

function bit_rol(a, b) {
    return a << b | a >>> 32 - b
}

function str2binl(a) {
    for (var b = [], c = (1 << chrsz) - 1, d = 0; d < a.length * chrsz; d += chrsz) b[d >> 5] |= (a.charCodeAt(d / chrsz) & c) << d % 32;
    return b
}

function binl2str(a) {
    for (var b = "", c = (1 << chrsz) - 1, d = 0; d < 32 * a.length; d += chrsz) b += String.fromCharCode(a[d >> 5] >>> d % 32 & c);
    return b
}

function binl2hex(a) {
    for (var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", c = "", d = 0; d < 4 * a.length; d++) c += b.charAt(a[d >> 2] >> d % 4 * 8 + 4 & 15) + b.charAt(a[d >> 2] >> d % 4 * 8 & 15);
    return c
}

function binl2b64(a) {
    for (var b = "", c = 0; c < 4 * a.length; c += 3) for (var d = (a[c >> 2] >> c % 4 * 8 & 255) << 16 | (a[c + 1 >> 2] >> (c + 1) % 4 * 8 & 255) << 8 | a[c + 2 >> 2] >> (c + 2) % 4 * 8 & 255, e = 0; 4 > e; e++) b = 8 * c + 6 * e > 32 * a.length ? b + b64pad : b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >> 6 * (3 - e) & 63);
    return b
};