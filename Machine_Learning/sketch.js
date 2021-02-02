let mobilenet;
let vid;
let label = '';

const modelReady = () => {
    //console.log('Model is ready')
    mobilenet.predict(gotResults)
}

const gotResults = (error, results) => {
    if (error) {
        console.log(error)
    }
    else {
        //console.log(results);
        label = results[0].className;
        mobilenet.predict(gotResults)
    }
}

function setup() {
    createCanvas(640, 550);
    vid = createCapture(VIDEO);
    vid.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', vid, modelReady);
}

function draw() {
    background(0);
    image(vid, 0, 0);
    fill(255);
    textSize(64);
    text(label, 10, height - 15)
}