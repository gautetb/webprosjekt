$(function () {
    $('#incFont').click(function () {
        curSize = parseInt($('tekstboks5').css('font-size')) + 2; 
  if (curSize <= 24)
            $('tekstboks5').css('font-size', curSize);
    });
    $('#decFont').click(function () {
        curSize = parseInt($('tekstboks5').css('font-size')) - 2;
        if (curSize >= 16)
            $('tekstboks5').css('font-size', curSize);
    });
});

var counter = 0;
$(function () {
    $("#button1").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext1").removeClass("d-none");
            $("span.dotting1").addClass("d-none");
            $("span.more1").addClass("d-none");
            $("span.less1").removeClass("d-none");
        }
        else {
            $("span.dtext1").addClass("d-none");
            $("span.dotting1").removeClass("d-none");
            $("span.less1").addClass("d-none");
            $("span.more1").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button2").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext2").removeClass("d-none");
            $("span.dotting2").addClass("d-none");
            $("span.more2").addClass("d-none");
            $("span.less2").removeClass("d-none");
        }
        else {
            $("span.dtext2").addClass("d-none");
            $("span.dotting2").removeClass("d-none");
            $("span.less2").addClass("d-none");
            $("span.more2").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button3").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext3").removeClass("d-none");
            $("span.dotting3").addClass("d-none");
            $("span.more3").addClass("d-none");
            $("span.less3").removeClass("d-none");
        }
        else {
            $("span.dtext3").addClass("d-none");
            $("span.dotting3").removeClass("d-none");
            $("span.less3").addClass("d-none");
            $("span.more3").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button4").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext4").removeClass("d-none");
            $("span.dotting4").addClass("d-none");
            $("span.more4").addClass("d-none");
            $("span.less4").removeClass("d-none");
        }
        else {
            $("span.dtext4").addClass("d-none");
            $("span.dotting4").removeClass("d-none");
            $("span.less4").addClass("d-none");
            $("span.more4").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.documentElement.scrollTop > 100) { 
        $("button.scroll-to-top").removeClass("scrollknapp");
        $("scroll-to-top").addClass("d-inline");
    } else {
        $("button.scroll-to-top").removeClass("d-inline");
        $("button.scroll-to-top").addClass("d-none");
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}


var a = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (a == 0) {
        document.body.style.backgroundColor = "#f5f8fa";
        document.getElementById("oransj").style.color = "#fff";
        document.getElementById("overskrift1").style.color = "#212529";
        document.getElementById("overskrift2").style.color = "#212529";
        document.getElementById("overskrift3").style.color = "#212529";
        document.getElementById("overskrift4").style.color = "#212529";
        document.getElementById("meny").style.backgroundColor = "#3097D1";
        document.getElementById("scroll").style.backgroundColor = "#3097D1";
        document.getElementById("foot").style.color = "#212529";
        document.getElementById("bildekilde").style.color = "#212529";
        
        
        a = 1;        
    }
    else {
        document.body.style.backgroundColor = "#343a40";
        document.getElementById("oransj").style.color = "#ffc107";
        document.getElementById("overskrift1").style.color = "#ffc107";
        document.getElementById("overskrift2").style.color = "#ffc107";
        document.getElementById("overskrift3").style.color = "#ffc107";
        document.getElementById("overskrift4").style.color = "#ffc107";
        document.getElementById("meny").style.backgroundColor = "#343a40";
        document.getElementById("scroll").style.backgroundColor = "#ffc107";
        document.getElementById("foot").style.color = "white";
        document.getElementById("bildekilde").style.color = "white";
        a = 0;
    }
}

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
  }

var g = 10;
function setFont () {
    if (g < 12) {
    document.getElementById("tekst4").style.fontSize = "10px"; }
}

var f = 16;
function setFo () { 
    var property = document.getElementById(btn);   
    if (f == 16) {
        document.getElementById("tekst4").style.fontSize = "18px";
        f = 18;
    } else if (f == 18) {
        document.getElementById("tekst4").style.fontSize = "20px";
        f = 20;
    } else if (f == 20) {
        document.getElementById("tekst4").style.fontSize = "22px";
        f = 22;
    } else if (f == 22) {
        document.getElementById("tekst4").style.fontSize = "24px";
        f = 24;
    } 
    
}