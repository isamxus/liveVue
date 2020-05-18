/*********************公共工具方法***********************/
import QS from 'qs';
/***
*时间格式化
***/
Date.prototype.Format = function(format, timeCheck) {
    if(timeCheck !== false && this.getTime() < 1) return '';
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'ms': this.getMilliseconds()
    };
    if(/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return format;
}


/***
*深克隆对象
***/
const objectCopyHandler = obj => {
   return JSON.parse(JSON.stringify(obj));
};


/***
*请求参数处理
***/
const ParamsHandler = params => {
	let now = new Date().getTime();
	let result = {
        RequestStamp: now,
        PostTime: now,
        Platform: 'PC Admin(Web)',
        CustomApp: 'PC Admin(Web)',
        Mac: 'unknown',
        Token: JSON.parse(window.localStorage.getItem('Token'))
    };
    return params ? QS.stringify(Object.assign(result, objectCopyHandler(params))) : QS.stringify(result);
}

const Utils = {
	ParamsHandler,
    objectCopyHandler
}

export default Utils;