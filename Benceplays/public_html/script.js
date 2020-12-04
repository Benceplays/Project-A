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

function loadStyle() {
    console.log(detectMob());
    console.log(screen.width);
    console.log(navigator.userAgent);
    //document.getElementById("mob").innerHTML = detectMob();
    //document.getElementById("width").innerHTML = screen.width;
}