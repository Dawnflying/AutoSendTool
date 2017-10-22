var URL;
var config;

function getConfigOnService(configBack){
	chrome.extension.sendRequest({type:"getBackgroundValue",key:"URL"}, function(response) {
		URL=response;
		chrome.extension.sendRequest({type:"getConfig"}, function(response) {
			if(response.error == "error"){
				setTimeout("getConfigOnService",500);
			}else{
				config=response;
				if(configBack!=null){
					configBack();
				}
				
			}
		});
	});
}

function judgeVersion(){
	var newVer = config.newVersion;
	if(newVer == null){
		console.log("没有读到版本号");
	}
	chrome.extension.sendRequest({type:"getBackgroundValue",key:"version"}, function(response){
		var rVer = response;
		if(newVer!=null && newVer.indexOf(".")>0 && rVer!=null && rVer.indexOf(".")>0 && newVer>rVer){
			var r=confirm("请下载插件最新版本!");
			if (r==true){
				window.open("http://www.mozhushou.com/download/mozhushou.crx");
			}
		}	
	});
}

function insertElement(tagName,parentNode,className,id){
	var retElement = document.createElement(tagName);
	retElement.className=className;
	retElement.id=id;
	parentNode.appendChild(retElement);
	return retElement;
}

function insertBr(p){
	var b=document.createElement("br");
	p.appendChild(b);
}
 
function getUrlPara(url){
	if(url==null || url.length==0){
		return {};
	}
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
	var paraObj = {};
	for (var i=0;i<paraString.length; i++){  
		var j=paraString[i];
		paraObj[j.substring(0,j.indexOf("="))] = j.substring(j.indexOf("=")+1,j.length);  
	}
	return paraObj;
}

function JsonParamsToUrl(data){
  var arr = "";
  for(var i in data){
	arr+="&"+(i + "=" + data[i]);
  }
  return arr.replace(/&/,"?");
}

var version = chrome.runtime.getManifest().version;
var serviceHost = "http://www.jisuxiadan.com";

function getUserInfo() {
    if (location.href.indexOf(".jd.com") > 0) {
        return getFromJd()
    }
    if (location.href.indexOf(".meilishuo.com") >= 0) {
        return getFromMLS()
    }
    if (location.href.indexOf("mms.yangkeduo.com/") >= 0 || location.href.indexOf("mms.pinduoduo.com/") >= 0) {
        var b = JSON.parse(localStorage.userinfo);
        return {shopid: b.mall_id}
    }
    var a = $(".user-name").attr("href");
    if (a == null || a == "") {
        a = $(".login a").attr("href")
    }
    if (a == null || a == "") {
        return {shopid: ""}
    }
    var c = a.replace("http:", "").replace("//shop.mogujie.com/", "");
    if (c.indexOf("?") > 0) {
        c = c.sustr(0, c.indexOf("?"))
    }
    if (c.indexOf("javascript") >= 0) {
        return getFromMgj()
    }
    return {shopid: c}
}

function getFromJd() {
    if (location.href.indexOf("order.shop.jd.com/order/") > 0) {
        var b = $("a:contains('添加备注'):eq(0)");
        if (b.length == 0) {
            b = $("a:contains('修改备注'):eq(0)")
        }
        if (b.length > 0) {
            var a = b.attr("onclick");
            var c = a.split(",")[1];
            c = c.replace(");", "");
            return {shopid: c}
        } else {
            return {shopid: ""}
        }
    } else {
        if (location.href.indexOf("ware.shop.jd.com/onSaleWare/onSaleWare_newDoSearch.action") > 0) {
            return {shopid: $("#venderId").val()}
        }
    }
    return {shopid: ""}
}

function getFromMLS() {
    var b = "";
    $.each(document.cookie.split(";"), function (d, e) {
        if (e.indexOf("shopid=") >= 0) {
            b = e.replace("shopid=", "").trim();
            return false
        }
    });
    if (b == "") {
        var c = $("a[href*='item.meilishuo.com/detail']:eq(0)");
        if (c.length == 0) {
            return {shopid: ""}
        }
        var a = c.attr("href");
        chrome.extension.sendRequest({type: "ajax", url: a, data: null}, function (d) {
            b = getSubstring(d, '<input type="hidden" id="shopId" value="', '"');
            document.cookie = "shopid=" + b;
            return {shopid: b}
        })
    }
    return {shopid: b}
}

function getFromMgj() {
    var b = "";
    $.each(document.cookie.split(";"), function (d, e) {
        if (e.indexOf("shopid=") >= 0) {
            b = e.replace("shopid=", "").trim();
            return false
        }
    });
    if (b == "") {
        var c = $("a[href*='shop.mogujie.com/detail']:eq(0)");
        if (c.length == 0) {
            return {shopid: ""}
        }
        var a = c.attr("href");
        chrome.extension.sendRequest({type: "ajax", url: a, data: null}, function (d) {
            b = getSubstring(d, '<input type="hidden" id="shopId" value="', '"');
            document.cookie = "shopid=" + b;
            return {shopid: b}
        })
    }
    return {shopid: b}
}

function getSubstring(c, f, e, d) {
    if (c == undefined || c == null || c == "") {
        return ""
    }
    var g = c.indexOf(f);
    if (g >= 0) {
        var a = c.indexOf(e, g + f.length);
        var b = c.substring(g + f.length, a);
        if (d) {
            b = b.replace(/<[^>]+>/g, "")
        }
        return $.trim(b)
    }
    return ""
}

function toHanzi(b) {
    try {
        var a = b.replace(/\\/g, "%");
        a = unescape(a);
        return a
    } catch (c) {
        return b
    }
};
