function triangleCalculate() {
    // get triangle base input 
    const triangleBaseInput = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseInput);
    console.log(base);

    // get the triangle height input

    const triangleHeightInput = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightInput);
    console.log(height);
    // triangle are calculate
    const area = 0.5 * base * height;
    console.log('triangle are is',area);

    // show area-- Area: __ cm...

    const triangleAreaMain = document.getElementById('triangle-area');
    triangleAreaMain.innerText = area;
}
