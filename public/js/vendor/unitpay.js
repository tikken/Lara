function loadCss(e,t){if(!document.getElementById(e)){var a=document.getElementsByTagName("head")[0],i=document.createElement("link");i.id=e,i.rel="stylesheet",i.type="text/css",i.href=t,i.media="all",a.appendChild(i)}}function isMobilePhone(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=this.length-1;e>=0;e--)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])};var head=document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",head.appendChild(style),style.innerHTML=".up-widget {z-index: 9997;height: 100%;width: 100%;position: fixed;left: 0;top: 0;animation: fadein 0.15s; -webkit-animation: fadein 0.15s; -moz-animation: fadein 0.15s;-ms-animation: fadein 0.15s;-o-animation: fadein 0.15s;background: rgba(0, 0, 0, 0.6);}.widget-frame {height: 100%;width: 100%;position: fixed;z-index: 9999;border: 0 none; left: 0px; top: 0px;}.thumbnail-preview {position: absolute;top: 6%;left: 50%;z-index: 2;margin-top: 160px;margin-left: -32px;}@keyframes loader {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}@-webkit-keyframes loader {0% { -webkit-transform: rotate(0deg); }100% { -webkit-transform: rotate(360deg); }}@-moz-keyframes loader {0% { -moz-transform: rotate(0deg); }100% { -moz-transform: rotate(360deg); }}@-ms-keyframes loader {0% { -ms-transform: rotate(0deg); }100% { -ms-transform: rotate(360deg); }}@-o-keyframes loader {0% { -o-transform: rotate(0deg); }100% { -o-transform: rotate(360deg); }}@keyframes fadein {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}@-webkit-keyframes fadein {0% { -webkit-transform: rotate(0deg); }100% { -webkit-transform: rotate(360deg); }}@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadein {from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein {from{opacity:0;}to{opacity:1;}}@-ms-keyframes fadein {from{opacity:0;}to{opacity:1;}}@-o-keyframes fadein {from{opacity:0;}to{opacity:1;}}";var UnitPay=function(e){this.success=function(e){UnitPay.success=e},this.error=function(e){UnitPay.error=e};var t=document.createElement("div");t.className="up-widget";var a=document.createElement("div");a.className="thumbnail-preview",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="white"><circle id="circle1" transform="translate(8 0)" cx="0" cy="32" r="0"><animate attributeName="r" values="0; 8; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" /></circle><circle transform="translate(24 0)" cx="0" cy="32" r="0"><animate attributeName="r" values="0; 8; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" /></circle><circle transform="translate(40 0)" cx="0" cy="32" r="0"><animate attributeName="r" values="0; 8; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" /></circle></svg>',t.appendChild(a),this.createWidget=function(e){var a=null;e.publicId&&(a=e.publicId),e.publicKey&&(a=e.publicKey);let i="https://widget.unitpay.ru/pay/@PUBLIC_ID@";i=i.replace("@PUBLIC_ID@",a)+"?";var r=document.createElement("iframe"),o="card";if(r.name="widget_frame",r.className="widget-frame",r.src=i,r.style.visibility="hidden",r.setAttribute("onload","this.style.visibility='visible';"),e.cashItems&&"[object Array]"==Object.prototype.toString.call(e.cashItems)&&(e.cashItems=UnitPay.base64.encode(JSON.stringify(e.cashItems))),"sms"!==e.paymentType&&"applepay"!==e.paymentType||delete e.paymentType,e.paymentType&&(o=e.paymentType,r.src=r.src.replace("?","/"+e.paymentType+"?"),delete e.paymentType),"true"!==e.hideMenu&&"true"!==e.hideOtherMethods||(e.hideMenu="true"),isMobilePhone()){var n="https://unitpay.ru/pay/@PUBLIC_ID@/@BILLING_CODE@";return n=(n=n.replace("@PUBLIC_ID@",a)).replace("@BILLING_CODE@",o)+"?",e.hideMenu="string"==typeof e.hideMenu?e.hideMenu:"true",n+=UnitPay.buildQuery(e),void(window.location.href=n)}e.animate="false",r.src+=UnitPay.buildQuery(e),t.appendChild(r),document.body.appendChild(t)},void 0!==e&&this.createWidget(e)};UnitPay.base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,a,i,r,o,n,s,c="",m=0;for(e=this._utf8_encode(e);m<e.length;)r=(t=e.charCodeAt(m++))>>2,o=(3&t)<<4|(a=e.charCodeAt(m++))>>4,n=(15&a)<<2|(i=e.charCodeAt(m++))>>6,s=63&i,isNaN(a)?n=s=64:isNaN(i)&&(s=64),c=c+this._keyStr.charAt(r)+this._keyStr.charAt(o)+this._keyStr.charAt(n)+this._keyStr.charAt(s);return c},decode:function(e){var t,a,i,r,o,n,s="",c=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)t=this._keyStr.indexOf(e.charAt(c++))<<2|(r=this._keyStr.indexOf(e.charAt(c++)))>>4,a=(15&r)<<4|(o=this._keyStr.indexOf(e.charAt(c++)))>>2,i=(3&o)<<6|(n=this._keyStr.indexOf(e.charAt(c++))),s+=String.fromCharCode(t),64!=o&&(s+=String.fromCharCode(a)),64!=n&&(s+=String.fromCharCode(i));return s=this._utf8_decode(s)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",a=0;a<e.length;a++){var i=e.charCodeAt(a);i<128?t+=String.fromCharCode(i):i>127&&i<2048?(t+=String.fromCharCode(i>>6|192),t+=String.fromCharCode(63&i|128)):(t+=String.fromCharCode(i>>12|224),t+=String.fromCharCode(i>>6&63|128),t+=String.fromCharCode(63&i|128))}return t},_utf8_decode:function(e){for(var t="",a=0,i=c1=c2=0;a<e.length;)(i=e.charCodeAt(a))<128?(t+=String.fromCharCode(i),a++):i>191&&i<224?(c2=e.charCodeAt(a+1),t+=String.fromCharCode((31&i)<<6|63&c2),a+=2):(c2=e.charCodeAt(a+1),c3=e.charCodeAt(a+2),t+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),a+=3);return t}},UnitPay.buildQuery=function(e,t){var a,i=[];for(a in e)if(e.hasOwnProperty(a)){var r=t?t+"["+a+"]":a,o=e[a];i.push(null!==o&&"object"==typeof o?UnitPay.buildQuery(o,r):encodeURIComponent(r)+"="+encodeURIComponent(o))}return i.join("&")},UnitPay.success=function(e){},UnitPay.error=function(e,t){},window.onmessage=function(e){var t=null;try{t=JSON.parse(e.data)}catch(e){}if(t){if("close"==t.action){var a=document.body.getElementsByClassName("up-widget");document.body.getElementsByClassName("thumbnail-preview").remove();setTimeout(function(){for(;a[0];)a[0].parentNode.removeChild(a[0])},200)}if("success"==t.action&&UnitPay.success(t.params),"error"==t.action&&UnitPay.error(t.message,t.params),"doPayment"==t.action){a=document.body.getElementsByClassName("widget_frame");for(var i=0;i<a.length;i++)a[i].style.background="white"}if("openReceipt"==t.action)for(a=document.body.getElementsByClassName("widget_frame"),i=0;i<a.length;i++)a[i].style.background="transparent"}};
