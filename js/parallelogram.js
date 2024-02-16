function parallelogramCalculate() {
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-height');

    // console.log(base * height);
    const area = base * height;
    console.log(area);

    setInnerText('parallelogram-area', area);
}

function getInput(caughtInputFiled) {
    const inputFiled = document.getElementById(caughtInputFiled).value;
    const inputValue = parseFloat(inputFiled);
    return inputValue;
}

function setInnerText(element, area) {
    const setElement = document.getElementById(element);
    setElement.innerText = area;
}