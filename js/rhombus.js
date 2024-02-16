function rhombusCalculate() {
    const rhombusBase = getInput('rhombus-base');
    const rhombusHeight = getInput('rhombus-base');
    const area = 0.5 * rhombusBase * rhombusHeight;

    setInnerText('rhombus-area', area);
}
