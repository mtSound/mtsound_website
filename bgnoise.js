// noisey circles

/*
  Johan Karlsson (DonKarlssonSan) 2018
*/

let ctx;
let ctxBio;
let w, h;
let m;
let mx, my;
let wBio, hBio;
let mBio;
let mxBio, myBio;
let simplex;
let simplexBio;
let now;
let nowBio;
let rect;
let rectBio;
let bioStyle = document.getElementById("body-content-bio");

function setup() {
    ctx = hdrLogoCnv.getContext("2d");
    reset();
    window.addEventListener("resize", reset);
    sidebar.addEventListener("mousemove", mousemove);
}

function reset() {
    simplex = new SimplexNoise();

    rect = hdrLogoCnv.getBoundingClientRect();
    w = hdrLogoCnv.width;
    h = hdrLogoCnv.height;
    m = Math.min(w, h);
    mx = w / 2;
    my = h / 2;
}

function mousemove(event) {
    mx = clamp(event.clientX, rect.width) + 1;
    my = ((event.clientY + 1) * 0.25) + (rect.height / 4);
}

function draw(timestamp) {
    now = timestamp;
    requestAnimationFrame(draw);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    let col = 255;
    let rgbColour;
    let lineWidth = 1.5;
    for (let i = 1; i < m / 2; i += 3) {
        rgbColour = `rgb(${col},${col},${col})`
        ctx.strokeStyle = rgbColour; // circle colour
        ctx.lineWidth = lineWidth;
        drawCircle(i);
        col -= 25; // increment colour to achieve fade in from centre
        lineWidth -= 0.1;
    }
}

function drawCircle(r) {
    ctx.beginPath();
    let point, x, y;
    let deltaAngle = Math.PI * 2 / 400;
    for (let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
        point = calcPoint(angle, r);
        x = point[0];
        y = point[1];
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
}

function calcPoint(angle, r) {
    let noiseFactor = mx / w * 25;
    let zoom = my / h * 200;
    let x = Math.cos(angle) * r + w / 2;
    let y = Math.sin(angle) * r + h / 2;
    n = (simplex.noise3D(x / zoom, y / zoom, now / 2000)) * noiseFactor;
    x = Math.cos(angle) * (r + n) + w / 2;
    y = Math.sin(angle) * (r + n) + h / 2;
    return [x, y];
}



// bio bg anim

function setupBio() {
    ctxBio = bgCanv.getContext("2d");
    resetBio();
    window.addEventListener("resize", resetBio);
    body.addEventListener("mousemove", mousemoveBio);

}

function resetBio() {
    simplexBio = new SimplexNoise();
    rectBio = bgCanv.getBoundingClientRect();
    wBio = bgCanv.width;
    hBio = bgCanv.height;
    mBio = Math.min(wBio, hBio);
    mxBio = wBio / 2;
    myBio = hBio / 2;
}

function mousemoveBio(event) {
    mxBio = clamp(event.clientX, rectBio.width) + 1;
    myBio = ((event.clientY + 1) * 0.25) + (rectBio.height / 4);
}

function drawBio(timestamp) {
    nowBio = timestamp;
    if (bioNoise) {
        requestAnimationFrame(drawBio);
    };
    let col = 255;
    let rgbColour;
    let lineWidth = 1;
    ctxBio.fillStyle = "#ffffff";
    ctxBio.fillRect(0, 0, wBio, hBio);
    for (let i = 50; i < mBio + 100; i += 5) {
        ctxBio.lineWidth = lineWidth;
        rgbColour = `rgb(${col},${col},${col})`
        ctxBio.strokeStyle = rgbColour; // circle colour
        drawCircleBio(i);
        col -= 1; // increment colour to achieve fade in from centre
    }
}

function drawCircleBio(r) {
    ctxBio.beginPath();
    let point, x, y;
    let deltaAngle = Math.PI * 2 / 400;
    for (let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
        point = calcPointBio(angle, r);
        x = point[0];
        y = point[1];
        ctxBio.lineTo(x, y);
    }
    ctxBio.closePath();
    ctxBio.stroke();
}

function calcPointBio(angle, r) {
    let noiseFactor = mxBio / wBio * 10;
    let zoom = myBio / hBio * 200;
    let x = Math.cos(angle) * r + wBio / 2;
    let y = Math.sin(angle) * r + hBio / 2;
    n = (simplex.noise3D(x / zoom, y / zoom, nowBio / 2000)) * noiseFactor;
    x = Math.cos(angle) * (r + n) + wBio / 2;
    y = Math.sin(angle) * (r + n) + hBio / 2;
    return [x, y];
}

function clamp(val, max) {
    return val > max ? max : val < 0 ? 0 : val;
}



