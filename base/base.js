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