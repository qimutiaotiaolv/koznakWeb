/*
 *
 *lc 添加 签到加积分功能
 *
 *
 *
 *
 */
var usrTocken = "";
var getSignDate = function() {
	$.ajax({
        url:ApiUrl+"/index.php?act=member_sign&op=getMemberSignDate",
        dataType:"json",
        type:'post',
        data:{key:usrTocken},
        success:function(result){
        	var data = result.datas;
        	for(var d in data){
        		var sdate = data[d].sign_date.split('-')[2];
        		if( d == data.length-1 ){
        			var today = document.getElementById("taday").innerHTML;
        			if(today==data[d].sign_date.split('-')[2]){
        				document.getElementById("taday").setAttribute("class", "dayqiandao");
        			}else{
        				document.getElementById("day"+sdate).setAttribute("class", "dayqiandao");
        			}
        		}else{
        			document.getElementById("day"+sdate).setAttribute("class", "dayqiandao");
        		}
        	}
        }
    })     
}
    
var getDateday = function(){
     var datatime = new Date();
         //获取当前月份
        var datatime_month = datatime.getMonth() + 1;
         //获取当前月份
        var datatime_umonth = datatime.getMonth();
         //获取当前年份
        var datatime_year = datatime.getFullYear();
         //当月天数
        var datatime_mday;
         //上月天数
        var datatime_uday;
         //获取当前星期
        var datatime_days = datatime.getDay();
         //获取当前日期
        var datatime_data = datatime.getDate();

        var datatime_mumber = datatime_days - datatime_data % 7;
        if (datatime_mumber < 0) {
            datatime_mumber = 7 + datatime_mumber;
        } else {}

         //将ID为qiandao_day的容器中的文本改为datatime.getDate();
        document.getElementById('qiandao_day').innerHTML = datatime.getDate();
         //根据月份的十进制数字转换成对应英文
        switch (datatime_month) {
        case 1:
            document.getElementById('qiandao_moth').innerHTML = 'January';
            break;
        case 2:
            document.getElementById('qiandao_moth').innerHTML = 'February';
            break;
        case 3:
            document.getElementById('qiandao_moth').innerHTML = 'March';
            break;
        case 4:
            document.getElementById('qiandao_moth').innerHTML = 'April';
            break;
        case 5:
            document.getElementById('qiandao_moth').innerHTML = 'May';
            break;
        case 6:
            document.getElementById('qiandao_moth').innerHTML = 'June';
            break;
        case 7:
            document.getElementById('qiandao_moth').innerHTML = 'July';
            break;
        case 8:
            document.getElementById('qiandao_moth').innerHTML = 'August';
            break;
        case 9:
            document.getElementById('qiandao_moth').innerHTML = 'September';
            break;
        case 10:
            document.getElementById('qiandao_moth').innerHTML = 'October';
            break;
        case 11:
            document.getElementById('qiandao_moth').innerHTML = 'November';
            break;
        case 12:
            document.getElementById('qiandao_moth').innerHTML = 'December';
            break;
            define: break;
        };
         //将年份改为当前年份
        document.getElementById('qiandao_year').innerHTML = datatime_year;

         //计算当月天数
        if (datatime_month == 2) {
            datatime_mday = datatime_year % 4 == 0 ? 29 : 28;

        } else if (datatime_month == 1 || datatime_month == 3 || datatime_month == 5 || datatime_month == 7 || datatime_month == 8 || datatime_month == 10 || datatime_month == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            datatime_mday = 31;
        } else {
            //其他月份，天数为：30.
            datatime_mday = 30;
        }

         //计算上月天数
         if (datatime_umonth == 2) {
            datatime_uday = datatime_year % 4 == 0 ? 29 : 28;

        } else if (datatime_umonth == 1 || datatime_umonth == 3 || datatime_umonth == 5 || datatime_umonth == 7 || datatime_umonth == 8 || datatime_umonth == 10 || datatime_umonth == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            datatime_uday = 31;
        } else {
            //其他月份，天数为：30.
            datatime_uday = 30;
        }

        var num = datatime_mumber + datatime_mday;
        if(num%7>0){num=num/7+1; num=num*7-1;}else{}
        var nnnn=num%7;
                                  // alert(num);
         //开始天数；
        var mm = datatime_uday - datatime_mumber;/* 此处不用加1 应为是从星期天开始的*/
        var jishu = 1;
         //添加日期
        for (i = 0; i < num; i++) /*此处 i赋值0，而不是1*/{
            //添加li标签
            var qiandao_day_d = document.createElement('li');
            var inputId = document.getElementById('datatime_day');
            inputId.insertBefore(qiandao_day_d, inputId.children[num]);//之前第二个参数为inputId.children，不是Node对象，运行会报错。
            if(mm<10){
            	mm = "0"+mm;
            }
            if (i <= datatime_mumber) {
                qiandao_day_d.setAttribute("class", "lastmonth");
                qiandao_day_d.setAttribute("id", "last"+mm);
            } else if (i<= datatime_mumber + datatime_mday) {
                if(mm==datatime_data){
                    qiandao_day_d.setAttribute("class", "taday");
                    qiandao_day_d.setAttribute("id", "taday");
                }else{
                qiandao_day_d.setAttribute("class", "daymonth");
                qiandao_day_d.setAttribute("id", "day"+mm);
            }
            } else {
                qiandao_day_d.setAttribute("class", "nextmonth");
                qiandao_day_d.setAttribute("id", "next"+mm);
            }
                        qiandao_day_d.innerHTML = mm;
            if (i == datatime_mumber) {
                mm = 0;
            } else if(i==datatime_mumber + datatime_mday) {mm=0;}
            mm++;
        }
}

var tips = function(){
    $("#desimg").click(function(){
            $("#blackbg").show();
        })
    $("#confirmation").click(function(){
        $("#blackbg").hide();
    })

}


function showAlert(dialogID,msg){
    var $dialog = $('#'+dialogID);
    $dialog.modal({backdrop: 'modal'});
    var modalTitle = $('#modal-title');
    $(modalTitle).text(msg);
}

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

$("#qiandao_button_b").click(function(){
    showAlert("alertModal","签到了");
    if($("#taday").hasClass("dayqiandao")){
        //alert("今天已经签到了");
        showAlert("alertModal","签到了");
    }else{
        $("#taday").addClass("dayqiandao");
        $("#taday").removeClass("taday");
        $.ajax({
            url:ApiUrl+"/index.php?act=member_sign&op=addPointAndAddSign",
            type:'post',
            data:{key:usrTocken},
            success:function(result){
                $("#addjf_tip").fadeIn("slow");
                $("#addjf_tip").fadeOut(3000);
                responseCallback(result);      //对app的响应
            }
        })
    }
})


connectWebViewJavascriptBridge(function(bridge) {
    //alert("here");

    bridge.registerHandler('jsFunc_signin', function(tocken, responseCallback) {
        //alert("收到app传来的tocken:"+tocken);
        usrTocken = tocken;
        getSignDate();
        getDateday();
        //tips();


        $("#qiandao_button_b").click(function(){
            if($("#taday").hasClass("dayqiandao")){
                //alert("今天已经签到了");
                showAlert("alertModal","签到了");
            }else{
                $("#taday").addClass("dayqiandao");
                $("#taday").removeClass("taday");
                $.ajax({
                    url:ApiUrl+"/index.php?act=member_sign&op=addPointAndAddSign",
                    type:'post',
                    data:{key:usrTocken},
                    success:function(result){
                        $("#addjf_tip").fadeIn("slow");
                        $("#addjf_tip").fadeOut(3000);
                        responseCallback(result);      //对app的响应
                    }
                })
            }
        })

    })
});
function getRem(){
    return    $(window).width()/ 12.0;
}
////初测jsFunc1供swift调用
//connectWebViewJavascriptBridge(function(bridge) {
//    bridge.registerHandler('jsFunc1', function(data, responseCallback) {
//        alert("收到来自app的数据:"+data);
//        var responseData = { 'Javascript Says':'我是js' }
//        responseCallback(responseData)
//    })
//})
//
//
////调用swift函数
//connectWebViewJavascriptBridge(function(bridge) {
//    bridge.callHandler('swiftFunc1', {'我是': 'javascript'}, function(response) {
//        alert("收到swift的响应:"+response);
//    });
//})
//
//
////向swift发送数据
//connectWebViewJavascriptBridge(function(bridge) {
//    bridge.send("这是js通过send发送的一条数据", function(responseData) {
//        alert("收到来自swift的响应数据:"+responseData);
//    });
//
//})


//################## end of init WebViewJavascriptBridge############





