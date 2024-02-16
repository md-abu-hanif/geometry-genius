function ellipseCalculate (){
    const ellipseBase = getInput('ellipse-base');
    const ellipseHeight = getInput('ellipse-height');
    const area = 3.14 * ellipseBase * ellipseHeight;

    setInnerText('ellipse-area', area);
}