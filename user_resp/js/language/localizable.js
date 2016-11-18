/**
 * Created by yangyanxiang on 16/2/22.
 */



/*
* 初始化i18n
*lizableFilesArray: 本地化文件名数组，例如需要在秒杀页和评论页用到本地化翻译，首先在language/zn中新建seckill-cn.json 与 comment-cn.json文件(汉语翻译)
* 在language/zh_uy中新建seckill-un.json 与 comment-un.json文件(维语翻译)。则参数lizableFilesArray的值为['seckill','comment']。
*
*langType："cn"表示中文 "un"表示维语
*
* 调用示例: 如果要把这两个页面翻译成维语，则需要在html的$(document).ready()中调用initWidthLocalizableJSFiles(['seckill','comment'],'un');
*
* */
function initWidthLocalizableJSFiles(lizableFile,langType,loadSuccessFunc){
    //从CDN引入i18next-jquery.min.js文件
    //var i18nJSCDNUrl = "http://cdn.bootcss.com/jquery-i18next/0.0.14/i18next-jquery.min.js"
    //var i18nJSPath = "<script src=" + i18nJSCDNUrl + "><\/script>";
    //document.write(i18nJSPath);
    var prefix = "";
    if (langType == "cn"){
        prefix = "../js/language/zh/";
    }else if (langType == "un"){
        prefix = "../js/language/zh_uy/";
    }
    var suffix = "";
    if (langType == "cn"){
        suffix = "-cn.json";
    }else if (langType == "un"){
        suffix = "-un.json";
    }
    var resourcePath = prefix + lizableFile + suffix;

    var option = { resGetPath:resourcePath,lowerCaseLng:true };
    i18n.init(option,function(t){
        $('body').i18n();
        loadSuccessFunc(t);
    });
}


function reloadAllLocalString(){
    $('body').i18n();
}
