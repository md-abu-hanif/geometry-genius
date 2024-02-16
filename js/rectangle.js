function rectangleCalculate() {
    //get rectangle length input
    const rectangleLengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(rectangleLengthInput);
    console.log(length);
    // get rec. height input
    const rectangleHeightInput = document.getElementById('rectangle-height').value;
    const height = parseFloat(rectangleHeightInput);
    console.log(height);

    const area = length * height;
    console.log('rectangle area is',area);

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}