function FallDown(){
    this.container = document.querySelector(".container");
}
FallDown.prototype.init = function(){
    this.createElement();
}
FallDown.prototype.createElement = function(){
    var count = 10;
    var left = 0;
    for(var i = 0; i < count; i++){
        var random = Math.floor(Math.random()*20+2);
        var delay =  Math.floor(Math.random()*40);
        left += random;
        var ele = document.createElement("div");
        this.container.appendChild(ele);
        ele.style.left = left + "%";
        ele.style.top = (random+2) + "%";
        ele.style.animationDelay = (delay/10) + "s";
    }
}

var fallDown = new FallDown();
fallDown.init();