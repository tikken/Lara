(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{39:function(e,t,r){"use strict";var o=r(31),n=r.n(o),i=r(5),a={cartStep:1,paymentProvider:!1,signatureHash:!1,gridCatalog:!1,lastTwoYearsInfo:!1,informationPosts:!1,productsLoaded:!1,closeListener:!1,customerIndex:!1,cardPayment:!1,orderPaid:!1,aboutData:!1,orders:!1,user:!1,cart:!1,showAditionalForms:!1,readyToGo:!1,filteredProducts:[],searchProducts:[],viewedProducts:[],modelFilters:[],brandFilters:[],typeFilters:[],products:[],urikValidation:{},singleProduct:{},uriksData:{},order:{},usersFIO:"",catalogPerPage:16,selfDelivery:null,deliveryType:!1,deliveryAdress:!1,deliveryAllowed:!1,lastDeliveryAdress:!1,prevDelAdrAccepted:null,stockDeliveryPickup:!1,blockDeliveryHelper:!1,pickUpPoint:!1,ofertaPolicy:null,notParams:{status:"success",pos:"top-center",timeout:3e3}},c={user:function(e){return e.user},searchProducts:function(e){return e.searchProducts},filteredProducts:function(e){return e.filteredProducts},allProducts:function(e){return e.products},deliveryType:function(e){return e.deliveryType},urikValidation:function(e){return e.urikValidation},orders:function(e){return e.orders},pickUpPoint:function(e){return e.pickUpPoint},orderPaid:function(e){return e.orderPaid},paymentProvider:function(e){return e.paymentProvider},aboutData:function(e){return e.aboutData},lastTwoYearsInfo:function(e){return e.lastTwoYearsInfo},gridCatalog:function(e){return e.gridCatalog},catalogPerPage:function(e){return e.catalogPerPage},cart:function(e){return e.cart},informationPosts:function(e){return e.informationPosts},customerIndex:function(e){return e.customerIndex},stockDeliveryPickup:function(e){return e.stockDeliveryPickup},lastDeliveryAdress:function(e){return e.lastDeliveryAdress},deliveryAdress:function(e){return e.deliveryAdress},showAditionalForms:function(e){return e.showAditionalForms},readyToGo:function(e){return e.readyToGo},deliveryAllowed:function(e){return e.deliveryAllowed},blockDeliveryHelper:function(e){return e.blockDeliveryHelper},prevDelAdrAccepted:function(e){return e.prevDelAdrAccepted},ofertaPolicy:function(e){return e.ofertaPolicy},cartStep:function(e){return e.cartStep},viewedProducts:function(e){return e.viewedProducts}},s=r(8),u=r.n(s),l={SET_OFERTA_POLICY_STATE:function(e,t){e.commit("setOfertaPolicyState",t)},SET_DELIVERY_ADRESS:function(e,t){e.commit("setDeliveryAdress",t)},PROCEED_WITH_LAST_DELIVERY_ADRESS:function(e,t){e.commit("proceedWithLastDeliveryAdress",t)},CREATE_MAGIC_BTN:function(e,t){e.commit("createMagicBtn",t)},SET_READY_TO_GO:function(e,t){e.commit("setReadyToGo",t)},SET_ADDITIONAL_FORMS:function(e,t){e.commit("setAdditionalForms",t)},VALIDATE_POST_DELIVERY_FORM:function(e){e.commit("validatePostDeliveryForm")},GET_LAST_DELIVERY_ADRESS:function(e){e.commit("getLastDeliveryAdress")},BLOCK_FORM_INPUTS:function(e,t){e.commit("blockFormInputs",t)},REFRESH_CUTOMER_DATA:function(e,t){e.commit("refreshCutomerData",t)},CHECK_DELIVERY_ADRESS:function(e,t){e.commit("checkDeliveryAdress",t)},CHECK_DELIVERY_PICKUPS:function(e,t){e.commit("checkDeliveryPickups",t)},GET_ALL_INFORMATION_POSTS:function(e){e.commit("getAllInformationPosts")},SHOW_DELIVERY_TYPE_HELPER:function(e){e.commit("showDeliveryTypeHelper")},SEND_GOOGLE_ANALYTICS:function(e,t){e.commit("sendGoogleAnalytics",t)},CATALOG_LOAD_MORE:function(e){e.commit("catalogLoadMore")},SWITCH_CATALOG_LAYOUT:function(e){e.commit("switchCatalogLayout")},UNIT_PAY:function(e){e.commit("unitPay")},CREATE_SIGNATURE_HASH:function(e,t){e.commit("createSignatureHash",t)},GET_VIEWED_PRODUCTS:function(e){e.commit("getViewedProducts")},SET_PRODUCT_VIEWED:function(e,t){e.commit("setProductViewed",t)},GET_TWO_YEARS_INFO_BY_SELECT:function(e,t){e.commit("getTwoYearsInfoBySelect",t)},GET_ABOUTS_YEARS:function(e){e.commit("getAboutYears")},GET_SINGLE_ORDER_INFO:function(e,t){e.commit("getSingleOrderInfo",t)},FINISH_CONTRACT:function(e){e.commit("finishContract")},FINISH_ORDER_PROCESS:function(e){e.commit("finishOrderProcess")},SET_PICKUP_POINT:function(e,t){e.commit("setPickUpPoint",t)},VALIDATE_DELIVERY_ADRESS:function(e,t){e.commit("validateDeliveryAdress",t)},GET_ALL_PRODUCTS:function(e){e.commit("getAllProducts")},GET_ORDERS_INFO:function(e){e.commit("getOrdersInfo")},SCROLL_TO_TOP:function(e){e.commit("scrollToTop")},PAY_WITH_CARD:function(e,t){e.commit("payWithCard",t)},SET_PAYMENT_PROVIDER:function(e,t){e.commit("setPaymentProvider",t)},CREATE_ORDER:function(e){e.commit("createOrder")},SET_URIKS_INFO:function(e,t){e.commit("setUriksInfo",t)},SAVE_URIKS_DATA:function(e,t){e.commit("saveUriksData",t)},VALIDATE_RS:function(e,t){e.commit("RSValidation",t)},SET_DELIVERY_INDEX:function(e,t){e.commit("setDeliveryIndex",t)},REMOVE_DELIVERY_TYPE_ERROR:function(e){e.commit("removeDeliveryTypeError")},DELIVERY_TYPE_ERROR:function(e){e.commit("deliveryTypeError")},APPLY_DELIVERY_ADRESS:function(e,t){e.commit("applyDeliveryAdress",t)},PRICE_FILTER:function(e,t){e.commit("applyPriceFilter",t)},SET_DELIVERY_TYPE:function(e,t){e.commit("setDeliveryType",t)},CHECK_CART_STATE:function(e){e.commit("checkCartState")},CHANGE_PROGRESS_STEP:function(e,t){e.commit("changeProgressStep",t)},SET_CUSTOMER_FIO:function(e,t){e.commit("setCustomerFio",t)},GET_USERS_INFO:function(e){e.commit("getUserInfo")},ADD_PRODUCT_TO_CART:function(e,t){var r=t.id,o=t.amount;e.commit("addProductToCart",{id:r,amount:o})},GET_PRODUCT_BY_ID:function(e,t){e.commit("getProductById",t)},SWITCH_PRODUCTS_LOADER:function(e){e.commit("setProductsLoaded")},FILTER_PRODUCTS:function(e,t){e.commit("filterProductByQuery",t)},FILTER_PRODUCTS_BY_BRAND:function(e,t){e.commit("filterProductsByBrand",t)},FILTER_PRODUCTS_BY_MODEL:function(e,t){e.commit("filterProductsByModel",t)},FILTER_PRODUCTS_BY_PRINTERTYPE:function(e,t){e.commit("filterProductsByPrinterType",t)},COLLECT_FILTERS:function(e){e.commit("getProductTypeFilters"),e.commit("getProductModelBrandFilters")},GET_MODEL_BRAND_FILTERS:function(e){e.commit("getProductModelBrandFilters")},SHOW_NOTIFICATION:function(e,t,r){e.commit("showNotification",t,r)},fixCartStatus:function(e,t){var r=t.data,o=r.totalQuantity,n=r.totalPrice;u()("[data-cartIcon]").attr("src","/images/menu/cart.svg"),u()("[data-cartamountval]").text(o),u()("[data-cartpriceval]").text(n)}},d=r(43),f=r.n(d),m=r(103),y=r.n(m),p=r(67),h=r(49),v=r(52);function T(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g={createMagicBtn:function(e,t){t&&(t.classList.remove("disabled_btn"),new v.a(t))},showNotification:function(e,t,r){e.notParams.status=r,e.notParams.message=t,new h.a(e.notParams).show()},blockFormInputs:function(e,t){var r=t.querySelectorAll("input");r&&r.forEach((function(e){e.value="",e.setAttribute("disabled","")}))},sendGoogleAnalytics:function(e,t){var r=t.category,o=t.eventAction,n=t.eventLabel,i=t.eventValue;window.ga("send","event",r,o,n,i),console.warn("ga event",r,o,n,i)},changeProgressStep:function(e,t){e.cartStep=t},getAllProducts:function(e){var t=this;return 0===e.products.length&&y.a.get("/catalogCartridge").then((function(t){t.data.forEach((function(e){var t=JSON.parse(e.params),r=JSON.parse(e.cape),o={};r.map((function(e){Object.keys(e).forEach((function(t){var r=e[t];o[t]=r.trim()}))})),e.price=Math.ceil(e.price),e.params=t,e.cape=o})),e.products=t.data,e.filteredProducts=e.products})).then((function(){t.dispatch("COLLECT_FILTERS"),t.dispatch("SWITCH_PRODUCTS_LOADER")})).catch((function(e){console.log(e)})),e.products},getFilteredProducts:function(e,t){u.a.ajax({method:"get",url:"/search",data:{payload:t},success:function(t){e.searchProducts=t},error:function(e){console.warn(e)}}),e.closeListener=!0},addProductToCart:function(e,t){var r=t.id,o=t.amount,n=this,i="/products/addToCartAjaxGet/".concat(r);u.a.ajaxSetup({headers:{"X-CSRF-TOKEN":window.token}}),u.a.ajax({method:"get",url:"".concat(i),data:{id:r,amount:o},success:function(e){n.dispatch("fixCartStatus",{data:e})},error:function(e){console.warn(e)}});var a={category:"catalog",eventAction:"click",eventLabel:"add product to cart",eventValue:"".concat(r," - ").concat(o)};this.dispatch("SEND_GOOGLE_ANALYTICS",a)},getProductModelFilters:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.products.filter((function(e){var r=e.params;for(var o in t)if(void 0===r[o]||r[o]!=t[o])return!1;return!0}));e.modelFilters=T(new Set(r.map((function(e){return e.params.art}))))},getProductTypeFilters:function(e){e.typeFilters=T(new Set(e.products.map((function(e){return e.params.printertype}))))},filterProductsByModel:function(e,t){var r=[];e.products.forEach((function(e){JSON.stringify(Object.values(e.cape)).indexOf(t.model)>=0&&r.push(e)})),r.length>0&&(e.filteredProducts=r)},filterProductByQuery:function(e,t){t.printertype&&this.dispatch("FILTER_PRODUCTS_BY_PRINTERTYPE",t),t.brand&&this.dispatch("FILTER_PRODUCTS_BY_BRAND",t),t.model&&this.dispatch("FILTER_PRODUCTS_BY_MODEL",t),0===Object.keys(t).length&&(e.filteredProducts=e.products),this.dispatch("GET_MODEL_BRAND_FILTERS")},getProductById:function(e,t){var r=e.products.filter((function(e){return e.id===t}));e.singleProduct=r[0]},getProductModelBrandFilters:function(e){var t=[],r=[];e.filteredProducts.map((function(e){var o=e.cape,n=Object.keys(o),i=Object.values(o);n.forEach((function(e){return t.push(e)})),i.forEach((function(e){return r.push(e)}))})),e.brandFilters=T(new Set(t)),e.modelFilters=T(new Set(r))},filterProductsByPrinterType:function(e,t){var r=[];e.products.forEach((function(e){e.params.printertype.indexOf(t.printertype)>=0&&r.push(e)})),e.filteredProducts=r},filterProductsByBrand:function(e,t){var r=[];e.products.forEach((function(e){JSON.stringify(Object.keys(e.cape)).indexOf(t.brand)>=0&&r.push(e)})),r.length>0&&(e.filteredProducts=r)},setProductsLoaded:function(e){e.productsLoaded=!0},getViewedProducts:function(e){fetch("/getViewed",{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(t){e.viewedProducts=t})).catch((function(e){console.log(e)}))},setProductViewed:function(e,t){var r=t.pid;fetch("/setViewed/".concat(r),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:r})}).then((function(e){return e.json()}));var o={category:"catalog modal",eventAction:"click",eventLabel:"catalog modal opened",eventValue:r};this.dispatch("SEND_GOOGLE_ANALYTICS",o)},setOfertaPolicyState:function(e,t){e.ofertaPolicy=t},setDeliveryAdress:function(e,t){e.deliveryAdress=null,e.deliveryAdress=t},setReadyToGo:function(e,t){e.readyToGo=null,e.readyToGo=t,console.log("setReadyToGo",t),e.readyToGo&&(e.blockDeliveryHelper=!0)},setAdditionalForms:function(e,t){e.showAditionalForms=null,setTimeout((function(){return e.showAditionalForms=t}),50)},proceedWithLastDeliveryAdress:function(e,t){e.deliveryAdress=t,e.prevDelAdrAccepted=!0},getLastDeliveryAdress:function(e){e.lastDeliveryAdress||u.a.ajax({method:"GET",url:"/getLastDeliveryAdress",success:function(t){if(""!=t){var r=JSON.parse(t.order_info);r&&(e.lastDeliveryAdress=r)}else e.lastDeliveryAdress=null},error:function(e){console.warn(e)}})},checkDeliveryAdress:function(e,t){var r=t.city,o=t.street,n=t.house,i=t.body,a=t.building,c=this;fetch("/checkAdressInDadata",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({city:r,street:o,house:n,body:i,building:a})}).then((function(e){return e.json()})).then((function(t){e.deliveryType="post",e.deliveryAllowed="post",e.deliveryAdress=t.result,t.result.indexOf("Москва")>=0&&(e.deliveryType="any",e.deliveryAllowed="any")})).then((function(){c.dispatch("SHOW_DELIVERY_TYPE_HELPER")}))},setDeliveryIndex:function(e,t){var r=this;e.customerIndex=null,e.deliveryType=null,e.deliveryAllowed=null,fetch("/setIndex",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.customerIndex=t,e.deliveryType="post",e.deliveryAllowed="post",console.warn(t),t.suggestedOffice[0]&&(e.deliveryAdress=t.suggestedOffice[0].unrestricted_value+", ".concat(t.suggestedOffice[0].value),t.suggestedOffice[0].unrestricted_value.indexOf("Москва")>=0&&(e.deliveryType="any",e.deliveryAllowed="any"))})).then((function(){r.dispatch("SHOW_DELIVERY_TYPE_HELPER")})).catch((function(e){console.error("setDeliveryIndex",e)}))},applyDeliveryAdress:function(e,t){e.deliveryAdress=null,u.a.ajax({method:"POST",url:"/setAdress",data:t,success:function(t){e.deliveryAdress=t},error:function(e){console.warn(e)}})},checkDeliveryPickups:function(e,t){var r=t.name,o=t.adr;e.stockDeliveryPickup=null,e.stockDeliveryPickup={name:r,adr:o},fetch("/setStockPickUpPoint",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({name:r,adr:o})}).then((function(e){return e.json()})).then((function(t){e.pickUpPoint=t})).catch((function(e){console.log(e)}))},removeDeliveryTypeError:function(){document.querySelector("#delivery_type").classList.remove("deliveryTypeError")},deliveryTypeError:function(e){document.querySelector("#delivery_type").classList.add("deliveryTypeError"),e.deliveryType="error"},getAllInformationPosts:function(e){fetch("/getAllInformationPosts",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.informationPosts=t}))},showDeliveryTypeHelper:function(){document.querySelector("[data-delivery-type_helper]").classList.add("no_opacity")},catalogLoadMore:function(e){e.catalogPerPage=e.catalogPerPage+e.catalogPerPage},switchCatalogLayout:function(e){e.gridCatalog=!e.gridCatalog,e.catalogPerPage=e.gridCatalog?6:16},unitPay:function(e){var t={account:e.user.id?e.user.id:"unregistered",currency:"RUB",desc:"Описание платежа",sum:e.cart.totalPrice,domainName:"unitpay.ru",signature:e.signatureHash,publicKey:"315491-97428"},r=new UnitPay;return r.createWidget(t),r.success((function(t){e.orderPaid=!0,console.log("Успешный платеж")})),r.error((function(e,t){console.log(e)})),!1},createSignatureHash:function(e){var t=this;fetch("/createSignatureHash",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({account:e.user.id?e.user.id:"unregistered",currency:"RUB",desc:"Описание платежа",sum:e.cart.totalPrice})}).then((function(e){return e.json()})).then((function(r){e.signatureHash=r.hash,t.dispatch("UNIT_PAY")})).catch((function(e){console.log(e)}))},getTwoYearsInfoBySelect:function(e,t){fetch("/getTwoYearsInfoBySelect",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({year:t})}).then((function(e){return e.json()})).then((function(t){e.lastTwoYearsInfo=t}))},getAboutYears:function(e){fetch("/getAboutYears",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.aboutData=t}))},getOrdersInfo:function(e){e.orders&&u.a.ajax({method:"GET",url:"/getOrdersInfo",success:function(t){"object"===E(t)?e.orders=t:e.orders=!1},error:function(e){console.warn(e)}})},getSingleOrderInfo:function(e,t){return u.a.ajax({method:"GET",url:"/getSingleOrderInfo/".concat(t),success:function(r){e.orders.last_order=r.order,e.orders.last_order.id=t,e.orders.last_order.total=r.total,document.querySelector(".order_totalPrice").innerText=r.total},error:function(e){console.warn(e)}}),e.orders.last_order},finishContract:function(){console.log("send contract via email")},checkPaymentError:function(){var e=document.querySelector("[data-payment-error]"),t=document.querySelector("[data-payment-head]"),r=document.querySelector(".payment_wrap-head");t.classList.add("mb10"),r.classList.add("mb30"),e.classList.remove("as-none")},finishOrderProcess:function(e){e.cart=null,e.customerIndex=null,e.deliveryAdress=null,e.deliveryAllowed=null,e.deliveryType=null,e.paymentProvider=null,e.showAditionalForms=null,e.signatureHash=null,e.stockDeliveryPickup=null,e.cartStep=0,p.a.push("/success")},setPickUpPoint:function(e,t){e.pickUpPoint=t},validateDeliveryAdress:function(e,t){var r=window.app.validator.formValidate([],u()(t));return e.deliveryAdress=r,e.deliveryAdress},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},payWithCard:function(e,t){var r={status:!1,errors:[]};"NaN"===parseInt(t.month)&&r.errors.push("Месяц не выбран"),"NaN"===parseInt(t.year)&&r.errors.push("Год не выбран"),""===t.card_num&&r.errors.push("Неправильный номер карты"),""===t.cvv&&r.errors.push("Незаполнен cvv"),""===t.card_name&&r.errors.push("Незаполнено имя карты"),0===r.errors.length&&(r.status=!0);var o=new cp.Checkout("test_api_00000000000000000000001",document.getElementById("paymentFormSample"));r&&function(){var t=o.createCryptogramPacket();if(t.success)e.orderPaid=!0;else for(var r in t.messages)alert(t.messages[r])}()},setPaymentProvider:function(e,t){e.paymentProvider=null,setTimeout((function(){return e.paymentProvider=t}),50);var r=document.querySelector(".payment_wrap"),o=r.querySelectorAll(".checkbox"),n=r.querySelector("[ data-checkNal]"),i=r.querySelector("[data-checkCard]");function a(e){var t=e.querySelector(".checkbox"),r=e.querySelector("img");t.setAttribute("checked",!0),r.classList.remove("invisible")}return o.forEach((function(e){e.querySelector("img").classList.add("invisible"),e.setAttribute("checked",!1)})),t.indexOf("Mastercard")>=0?(e.cardPayment=!0,a(i)):(e.cardPayment=!1,a(n)),u.a.ajax({method:"GET",url:"/setPaymentProvider",data:{provider:t},success:function(e){},error:function(e){console.warn(e)}}),e.paymentProvider},createOrder:function(e){u.a.ajax({method:"GET",url:"/createOrder",success:function(t){e.order=t},error:function(e){console.warn(e)}})},saveUriksData:function(e,t){e.uriksData=t},RSValidation:function(e,t){var r=t.rs,o=t.bik,n=!1,i={};if("number"==typeof r?r=r.toString():"string"!=typeof r&&(r=""),r.length)if(/[^0-9]/.test(r))i.code=2,i.message="Р/С может состоять только из цифр";else if(20!==r.length)i.code=3,i.message="Р/С может состоять только из 20 цифр";else{var a=[7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1],c=o.toString().slice(-3)+r,s=0;for(var u in a)s+=a[u]*(c[u]%10);s%10==0?n=!0:(i.code=4,i.message="Неправильное контрольное число")}else i.code=1,i.message="Р/С пуст";var l={result:n,error:i};return e.urikValidation=l,this.dispatch("SAVE_URIKS_DATA",t),l},applyPriceFilter:function(e,t){e.filteredProducts=f.a.orderBy(e.filteredProducts,["price"],[t])},setDeliveryType:function(e,t){return e.deliveryType=null,e.deliveryType=t,this.dispatch("REMOVE_DELIVERY_TYPE_ERROR"),e.deliveryType},checkCartState:function(e){return y.a.get("/checkCartState").then((function(t){e.cart=t.data})),e.cart},refreshCutomerData:function(e,t){fetch("/home/collectProfileData",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":window.token},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){})).catch((function(e){return console.error("collectProfileData",e)}))},setUriksInfo:function(e,t){e.usersInfo||u.a.ajax({method:"get",url:"/setUrikInfo",data:t,success:function(t){e.usersInfo=t},error:function(e){console.warn(e)}})},setCustomerFio:function(e,t){var r=t.firstname,o=t.lastname,n=t.tel,i=t.save;u.a.ajax({method:"get",url:"/setCustomerFio",data:{firstname:r,lastname:o,tel:n,save:i},success:function(t){e.usersInfo=t},error:function(e){console.warn(e)}})},getUserInfo:function(e){if(!e.user)return y.a.get("/getUserInfo").then((function(t){e.user=t.data})),e.user},setCloseListener:function(e,t){e.closeListener=t}},_=r(168);n.a.use(i.a);var S=new i.a.Store({state:a,getters:c,actions:l,mutations:g,plugins:[Object(_.a)()]});t.a=S},49:function(e,t,r){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){var e,t,r;function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.params=e}return e=n,(t=[{key:"checkPosition",value:function(){var e=document.querySelector(".topFixedMenu"),t=document.querySelector(".uk-notification");e&&(t.style.top="50px"),window.addEventListener("scroll",(function(){var e=document.querySelector(".uk-notification");window.pageYOffset>=60?e&&(e.style.top="50px"):e&&(e.style.top="56px")}))}},{key:"show",value:function(){var e={message:status.message,status:"primary",pos:"top-center",timeout:5e3};this.params&&(e=this.params),UIkit.notification(e),this.checkPosition()}},{key:"hide",value:function(){UIkit.notification.closeAll()}}])&&o(e.prototype,t),r&&o(e,r),n}();t.a=n},596:function(e,t,r){"use strict";r.r(t);var o=r(8),n=r.n(o);var i=r(49),a=r(39);function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.querySelector("#passReset"),this.passResetForm=document.querySelector("#passResetForm"),this.store=a.a;var t=this;n()(".form_type-item").on("click",(function(e){t._pickFaceType(e)})),this._setListeners(),this._showHidePassword(),this.testIfUserFromPasswordResetEmail(),this.passReset()}var t,r,o;return t=e,(r=[{key:"passResetHandler",value:function(){var e=this,t=this.passResetForm.querySelectorAll("input"),r=this.passResetForm.querySelector("[data-passresetbtn]"),o={status:"success",pos:"top-center",timeout:3e3};r.addEventListener("click",(function(){var r={},a=e;t.forEach((function(e){var t=e.getAttribute("name"),o=e.value;r[t]=o})),r.email=e.email,r.new_password===r.new_password_confirm?n.a.ajax({method:"POST",url:"/StoreNewPasswordEmail",data:r,success:function(e){o.message="Пароль успешно изменен.",o.status="success",new i.a(o).show(),UIkit.modal(a.passResetForm).hide()},error:function(e){o.message="Что-то пошло не так, попробуйте еще раз.",o.status="danger",new i.a(o).show()}}):(o.message="Пароли должны совпадать.",o.status="danger",new i.a(o).show())}))}},{key:"checkTokenExpireDate",value:function(){var e,t,r,o=this;e=(r=window.location.href).split("?")[1].split("=")[1],t=r.split("?")[2].split("=")[1],this.email=t,n.a.ajax({method:"post",url:"/checkTokenExpireDate",data:{token:e,email:t},success:function(e){200===e.status?o.passResetHandler():(UIkit.modal(o.passResetForm).hide(),new i.a({message:"Ссылка просрочена, попробуйте заново.",status:"danger",pos:"top-center",timeout:2e3}).show())},error:function(e){console.error("pass reset ajax error",e)}})}},{key:"openChangePassModal",value:function(){UIkit.modal(this.passResetForm).show(),this.checkTokenExpireDate()}},{key:"testIfUserFromPasswordResetEmail",value:function(){window.location.href.indexOf("token")>=0&&this.openChangePassModal()}},{key:"passReset",value:function(){var e=document.querySelector("#emailHasBeenSent"),t=this.modal.querySelector("[data-resetPassEmail]"),r=this.modal.querySelector(".form_group"),o=this;t.addEventListener("click",(function(t){var i=o.modal.querySelector("input").value;!function(e){return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)}(i)?r.classList.add("form_group-error"):n.a.ajax({method:"POST",url:"/sendPasswordResetEmail",data:{email:i},success:function(t){"200"==t.status&&(UIkit.modal(o.modal).hide(),UIkit.modal(e).show())},error:function(e){console.error("pass reset ajax error")}})}))}},{key:"_showHidePassword",value:function(){document.querySelectorAll(".password_field").forEach((function(e){var t=e.querySelector(".password_field-label"),r=e.querySelector(".password_input"),o=!1;t.addEventListener("click",(function(){o?(r.setAttribute("type","password"),o=!1):(r.setAttribute("type","text"),o=!0)}))}))}},{key:"_setError",value:function(e,t){var r,o=JSON.stringify(e);(r="register"===t?document.querySelector("[data-register]"):document.querySelector("[data-auth]")).classList.add("invalid"),o.indexOf("required")>=0?r.innerText="Проверьте пароль.":o.indexOf("email")>=0?r.innerText="Проверьте почту.":o.indexOf("invalid")>=0?r.innerText="Проверьте правильность введенных данных.":o.indexOf("taken")>=0?r.innerText="Почтовый ящик уже зарегистрирован.":o.indexOf("least")>=0&&(r.innerText="Пароль должен быть не короче 8 символов.")}},{key:"_pickFaceType",value:function(e){var t=document.querySelectorAll(".form_type-item"),r=e.currentTarget,o=r.querySelector(".form_type-itemText_inner").innerText;t.forEach((function(e){e.classList.remove("activeFormItem");var t,r=document.querySelector('[name="face"]');t="Физ. лицо"===o?"fizik":"urik",o&&r.setAttribute("value",t)})),r.classList.toggle("activeFormItem")}},{key:"_agreementCheck",value:function(){var e=document.querySelector("[data-register]"),t=document.querySelector(".agreement"),r=t.querySelector(".checkbox-wrap_arrow"),o=t.querySelector("span");return r.classList.contains("invisible")?(o.classList.add("invalid"),e.innerText="Вам необходимо принять пользовательское соглашение.",!1):(o.classList.remove("invalid"),e.innerText="Зарегистрируйте свой аккаунт используя любой способ.",!0)}},{key:"_validator",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(""==t||this._agreementCheck())&&this._ajaxCall(e);try{window.app.validator.formValidate([],n()(e))}catch(e){this._setError(e.message,t)}}},{key:"_sendGAevent",value:function(e){window.ga("send","event","auth",e)}},{key:"showUnverifiedPopup",value:function(){document.location.reload()}},{key:"_ajaxCall",value:function(e){var t=e.getAttribute("action"),r=e.getAttribute("method"),o=e.querySelectorAll("input"),i=this,a={};o.forEach((function(e){var t=e.getAttribute("name"),r=n()(e).val();a[t]=r})),n.a.ajax({method:r,url:"".concat(t),data:a,success:function(){var e=window.location.host,t=window.location.protocol;window.location.href=t+"//"+e+"/home"},error:function(e){console.warn(e,"login action"),403!==e.status?e.responseText.indexOf("taken")>0||e.responseText.indexOf("least")>0?i._setError(e.responseText,"register"):i._setError(e.responseText,"login"):i.showUnverifiedPopup()}})}},{key:"_setListeners",value:function(){var e=document.querySelector("[data-loginform]"),t=document.querySelector("[data-registerform]"),r=e.querySelector(".yellow_btn"),o=t.querySelector(".yellow_btn"),n=this;[r,o].forEach((function(r){r.addEventListener("click",(function(r){r.preventDefault(),r.target.dataset.loginform&&(n._validator(e),n._sendGAevent("login")),r.target.dataset.registerform&&(n._validator(t,"register"),n._sendGAevent("register"))}))}))}}])&&c(t.prototype,r),o&&c(t,o),e}();t.default=s}}]);