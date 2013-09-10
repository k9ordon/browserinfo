var detect = function() { return this; },
    p = detect.prototype;

p.useragent = function() {
    return navigator.userAgent;
}

p.browserName = function() {

}

p.browserVersion = function() {

}

p.screenResolution = function() {
    return { h: window.innerHeight, w: window.innerWidth }
}