function calculateArea(){
    const radius=prompt('enter the radius of the circle');
    const area = Math.PI * Math.pow(radius,2);
    alert(`The area of the circle is ${area.toFixed(2)} square units.`);
}
// calculateArea();

function findSquareRoot(){
    const number=prompt('enter the number');
    const sqrtNum= Math.sqrt(number);
    alert(`The square root of ${number} is ${sqrtNum}`);
}
// findSquareRoot();

function cosAngle(){
    const angle=prompt('enter the angle');
    const angleInRadians = angle * (Math.PI / 180);
    const cosineAngle = Math.cos(angleInRadians);
    alert(`The cosine of ${angle} degrees is ${cosineAngle.toFixed(4)}`);
}
cosAngle();