exports.ua=((e) => {
    var result = {},
        ostype = { 'Android': 'android', 'Symbian': 'symbian', 'BlackBerry': 'blackberry', 'hpwOS': 'webos', 'Windows Phone OS': 'wp', 'Firefox OS': 'ffos', 'iPhone OS': 'iphone', 'Linux': 'linux', 'Windows NT': 'windows', 'Macintosh': 'mac', 'iPad; CPU OS': 'ipad', 'Mac OS X': 'osx', 'Ubuntu': 'ubuntu', 'Mobile': 'mobile', 'YXLiveVideoApp': 'yizhiboapp', 'YiZhiBo': 'yizhibo', 'weibo__': 'weibo', 'Weibo': 'weibo', 'weibo': 'weibo', 'Chrome': 'chrome', 'AppleWebkit': 'webkit', 'AppleWebKit': 'webkit', 'Safari': 'safari', 'Mozilla': 'mozilla', 'Opera': 'opera', 'Firefox': 'firefox', 'MQQBrowser': 'qqbrowser', 'QQ': 'qq', 'Qzone': 'qzone', 'Maxthon': 'maxthon', 'UCWEB': 'ucweb', 'SogouMobileBrowser': 'sogou', 'UCBrowser': 'uc', 'SE': 'se', '360SE': '360se', 'IEMobile': 'iem', 'MSIE': 'ie', 'TencentTraveler': 'tt', 'MxBrowser': 'mx', 'BAIDUBrowser': 'baidu', 'baidubrowser': 'baidu', 'MicroMessenger': 'wx', 'LieBaoFast': 'liebao' },
        regstr = '(' + (Object.keys(ostype).map(function(el) {
            result[ostype[el]] = false;
            return el;
        }).join('|')) + ')[\\s\\/]*([\\d\\_\\.]*)',
        UA = e || window.navigator.userAgent, ////e || 
        regmatch = UA.match(new RegExp(regstr, 'g')) || [];
    regmatch.forEach(function(re) {
        re = re.match(new RegExp(regstr));
        var version = [0];
        if (re && re[1] && ostype[re[1]]) {
            if (re[2]) {
                version = re[2].split(/[_\.]/).map(function(e) {
                    return parseInt(e) || 0;
                });
            }
            result[ostype[re[1]]] = !0;
            result[ostype[re[1]] + 'Version'] = version;
        }
    });
    if (result.iphone || result.ipad) {
        result.ios = result.iphone || result.ipad;
        result.iosVersion = result.iphoneVersion || result.ipadVersion;
    } else {
        result.ios = false;
    }
    return result;
})();
