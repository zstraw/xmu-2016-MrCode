/**
 * 获取用户媒体设备
 * */

//返回是否是PC
function isPhone() {
    var userAgentInfo = navigator.userAgent;
//    var Agents = ["Android", "iPhone",
//                "SymbianOS", "Windows Phone",
//                "iPad", "iPod"];
    var Agents = ["Android", "iPhone",
                  "SymbianOS", "Windows Phone",
                  "iPod"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}