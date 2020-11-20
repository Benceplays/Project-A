function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function loadCSS(cssId) {
    if (!document.getElementById(cssId))
    {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        //link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssId;
        link.media = 'all';
        head.appendChild(link);
    }
}

function loadstyle() {
    console.log(detectMob());
    console.log(screen.width);
    console.log(navigator.userAgent);
    document.getElementById("mob").innerHTML = detectMob();
    document.getElementById("width").innerHTML = screen.width;
    if (detectMob()) {
        loadCSS("mob.css");
    } else {
        loadCSS("style.css");
    }
    /*
     <body onload="loadstyle();">
     <div id="mob"></div>
     <div id="width"></div>
     
     */
}