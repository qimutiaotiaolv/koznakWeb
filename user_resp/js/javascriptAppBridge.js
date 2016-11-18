/**
 * Created by yangyanxiang on 16/1/19.
 */

//##################init WebViewJavascriptBridge############
function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {callback(WebViewJavascriptBridge);}, false);
    }
}

connectWebViewJavascriptBridge(function(bridge) {
    bridge.init(function(message, responseCallback) {
        //message 是app通过send()发送的数据
        //responseCallback(responseData)是对app端的响应
        //responseCallback(responseData)
    })
});

/*
* javascript调用app方法
* */

/*
* app跳转到商品详情，会调用app中注册的'appFunc_Jump2GoodsDetail'方法
* param:
*       goodsID: 商品ID
* */
function callAppFunc_Jump2GoodsDetail(goodsID){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2GoodsDetail', goodsID, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 *是否影藏app的导航栏,会调用app中的'appFunc_IsHideNavBar'方法
 *param:
 *      isHidden:
 *             true隐藏
 *             false显示
 * */
function callAppFunc_IsHiddenNavagationBar(isHidden){
    connectWebViewJavascriptBridge(function(bridge) {

        bridge.callHandler('appFunc_IsHideNavBar', isHidden, function(response) {
            //alert("收到App的响应:"+response);
        });

        //if(isHidden){
        //    bridge.callHandler('appFunc_IsHideNavBar_True', isHidden, function(response) {
        //        //alert("收到App的响应:"+response);
        //    });
        //}else{
        //    bridge.callHandler('appFunc_IsHideNavBar_False', isHidden, function(response) {
        //        //alert("收到App的响应:"+response);
        //    });
        //}

    });
}



/*
* 导航栏的返回按钮点击事件，会调用app中注册的'appFunc_Back'方法
* */
function callAppFunc_BackBtnCallback(){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Back', 'back', function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
* 跳转到分类, 会调用app中注册的'appFunc_Jump2Classify'
* classifyID: 三级分类ID
* */
function callAppFunc_Jump2Classify(classifyID){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2Classify', classifyID, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}


/*
 * 跳转到商品列表, 会调用app中注册的'appFunc_Jump2GoodsList'
 * goodsListID: 商品列表ID
 * */
function callAppFunc_Jump2GoodsList(goodsListID){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2GoodsList', goodsListID, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}


/*
* 跳转到专题，会调用app中注册的'appFunc_Jump2Special'
* specialID: 专题ID
* */
function callAppfunc_Jump2Special(specialID){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2Special', specialID, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}


/*
* 跳转到登陆页面,会调用app中注册的'appFunc_Jump2Login'
*
* */
function callAppFunc_Jump2Login(classifyID){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2Login', classifyID, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 * 传给appweb页面导航高度，会调用app中注册的'appFunc_ChangeWebNavHeight'方法
 * */
function callAppFunc_ChangeWebNavHeight(navHeight){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_ChangeWebNavHeight', navHeight, function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 * 隐藏键盘
 * */
function callAppFunc_HiddenKeyboard(){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_HiddenKeyboard',  function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 * 跳转到购物车
 * */
function callAppFunc_Jump2BuyCart(){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_Jump2BuyCart',  function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 * 开始加载动画
 * */
function callAppFunc_StartLoadingAnimation(){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_StartLoadingAnimation',  function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}

/*
 * 结束加载动画
 * */
function callAppFunc_StopLoadingAnimation(){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('appFunc_StopLoadingAnimation',  function(response) {
            //alert("收到App的响应:"+response);
        });
    });
}



/*
* javascript注册了方法 'jsFunc_ReceiveParam' 供app调用
* param:
*       processJsFunc:
*               javascript的方法，app会传入data，processJsFunc用来接收这个data去处理
*
*       app中传入参数data：目前只有两种(标准json格式)
*       第一种：传入tocken,data={"type":"tocken","value":"实际的tocken"};
*       第二种：传入id,data={"type":"id","value":"传入的groupBuyID"}；
*       第三种: 传页面状态，data={"type":"viewStatus","value":"viewWillAppear"}；data={"type":"viewStatus","value":"viewWillDisappear"}；
*       viewWillAppear： 页面即将显示
*       viewWillDisappear: 页面即将消失
*       在app中传入jsFunc_ReceiveParam的参数必须使用以上格式。
* */
function receiveJsFunc_processOfAppSendedParam(processJsFunc){
    connectWebViewJavascriptBridge(function(bridge) {
        bridge.registerHandler('jsFunc_ReceiveParam', function(data, responseCallback) {
            //处理app传来的data
            processJsFunc(data);
            var responseData = { 'state':'sucess' }
            responseCallback(responseData)
        })
    })
}



