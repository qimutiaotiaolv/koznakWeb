/**
*
*  加载语言包
*  
*  注意 语言包文件 应放在 js/language/{语言类型}/ 目录下 并且目录结构 应该与 模板页面目录结构相同 
*  
*  例如 首页 index.html 的 语言包路径为  js/language/{语言类型}/index.js
*  
*  例如 搜索页 tmpl/search.html 的 语言包路径 为 js/language/{语言类型}/tmpl/search.js
*  
*  zzh   2015-11-1 13:52:56
*
*/

var loadLanguage = function(){
	//导入公共语言包
	var language_type = "zh_uy";
	var url_common =WapSiteUrl +"/js/language/"+language_type+'/common.js';
	//var url_common =  "../js/language/"+language_type+"/common.js";
	document.write('<script type="text/javascript" src="'+url_common+'"></script>');
	var arr = window.location.href.split('?');
	var url_cur = arr[0];
	var file = '';
	var filePath = url_cur.substr(url_cur.length-(url_cur.length-WapSiteUrl.length));
	if(filePath.charAt(filePath.length-1) == '/'){
		filePath +='index.js';
	}else{
		var arr_filePath = filePath.split('.');
		var exName = arr_filePath[arr_filePath.length-1];
		filePath=filePath.substr(0,filePath.length - exName.length)+'js';
	}
	
	//var url = WapSiteUrl +"/js/language/"+language_type+filePath;
	////var url = "../js/language/"+language_type+filePath;
	//document.write('<script type="text/javascript" src="'+url+'"></script>');
}
/*
 * 根据key向页面输出语言包参数
 * 
 * zzh  2015-11-1 13:54:19
 * */
var write = function(key){
	//解决将代码 当做文本 输出的 问题   zzh   2015-11-5 18:09:38  
	document.all[document.all.length-1].text='';
	document.write(language_array[key]);
}

/*
 * 根据key返回对应的语言文本
 * 
 * zzh  2015-11-1 13:54:19
 * */
var language = function(key){
	return language_array[key];
}

/*
 * 根据元素ID 设置 元素的属性值
 * element_id 元素值
 * 
 * attr 属性名
 * 
 * value 属性值
 * 
 * zzh  2015-11-6 16:08:33
 * */
var write_attr = function(element_id,attr,value){
	//解决将代码 当做文本 输出的 问题   zzh   2015-11-5 18:09:38  
	document.all[document.all.length-1].text='';
	var a = document.getElementById(element_id);
	if(a){
		a.setAttribute(attr,language(value));
	}
}

/*
*
*自动加载语言包
*
*zzh  2015-11-1 13:55:02
*/
loadLanguage();