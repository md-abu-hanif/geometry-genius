function pentagonCalculate (){
    const pentagonBase = getInput('pentagon-base');
    const pentagonHeight = getInput('pentagon-height');
    const area = 0.5 * pentagonBase * pentagonHeight;

    setInnerText('pentagon-area', area);
}
