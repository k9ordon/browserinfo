var app = function() {
        this.init();
        return this;
    },
    p = app.prototype;

p.init = function() {
    console.log('app init');
    this.events();

    this.basicDetections();

    return this;
}

p.events = function() {
    //this.$el.addEventListener('click', );
}

p.basicDetections = function() {
    document.querySelector('#browserAgent div').innerHTML = _d.useragent();

    var reso = _d.screenResolution();
    document.querySelector('#screenResolution div').innerHTML = reso.h + ' x ' + reso.w;
}