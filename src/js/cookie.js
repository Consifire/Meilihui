			//添加cookie
			function setCookie(name,value,expires,path,domain,secure){
				var cookieTxet=name+"="+value;//decodeURIComponent(name)+“=”+decodeURIComponent(value)
				
				 var oDate=new Date();
				 oDate.setDate(oDate.getDate()+expires);
				
					cookieTxet+=";expires="+oDate;
			
				if (path) {
					cookieTxet+=";path="+path;
				}
				if (domain) {
					cookieTxet+=";domain="+domain;
				}
				if (secure) {
					cookieTxet+=";secure="+secure;
				}
				document.cookie=cookieTxet;
				return document.cookie;
			}
			//获取cookied的value值 
			function getCookie(name){
				var str=document.cookie;
				var arr=str.split("; ");//";"后面记得加空格,否则只能取到第一个，获取cookie数组时，默认为；加空格连接
				for(var i=0;i<arr.length;i++){
					var arr2=arr[i].split("=");
					if (arr2[0]==name) {
						return arr2[1];
					}
				}
				return "";
			}
			
			//清除cookie
			function removeCookie(name){
				var d=new Date();
				document.cookie=decodeURIComponent(name)+"=;expires="+d;
				return document.cookie;
			}
			