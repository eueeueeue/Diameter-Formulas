/*=========================================
            CALCULATOR
=========================================*/

const display = document.getElementById("display");

/* Add numbers/operators */

function append(value) {

    display.value += value;

}

/* Clear display */

function clearDisplay() {

    display.value = "";

}

/* Delete last character */

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

/* Calculate answer */

function calculate() {

    try {

        let expression = display.value.replace(/%/g, "/100");

        display.value = eval(expression);

    }

    catch {

        display.value = "Error";

        setTimeout(() => {

            display.value = "";

        }, 1500);

    }

}

/*=========================================
        KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!display) return;

    if(
        (key >= "0" && key <= "9") ||
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ){

        append(key);

    }

    else if(key === "Enter"){

        event.preventDefault();

        calculate();

    }

    else if(key === "Backspace"){

        deleteLast();

    }

    else if(key === "Escape"){

        clearDisplay();

    }

});
/*==================================================
                PERIMETER
==================================================*/

function squarePerimeter() {
    let s = parseFloat(document.getElementById("squarePerimeter").value);

    if (isNaN(s) || s <= 0) {
        document.getElementById("squarePerimeterResult").innerHTML = "Enter a valid side length.";
        return;
    }

    document.getElementById("squarePerimeterResult").innerHTML =
        "Perimeter = " + (4 * s).toFixed(2);
}

function rectanglePerimeter() {
    let l = parseFloat(document.getElementById("rectangleLengthP").value);
    let w = parseFloat(document.getElementById("rectangleWidthP").value);

    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
        document.getElementById("rectanglePerimeterResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("rectanglePerimeterResult").innerHTML =
        "Perimeter = " + (2 * (l + w)).toFixed(2);
}

function trianglePerimeter() {
    let a = parseFloat(document.getElementById("triangleA").value);
    let b = parseFloat(document.getElementById("triangleB").value);
    let c = parseFloat(document.getElementById("triangleC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("trianglePerimeterResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("trianglePerimeterResult").innerHTML =
        "Perimeter = " + (a + b + c).toFixed(2);
}

/*==================================================
                    AREA
==================================================*/

function squareArea() {
    let s = parseFloat(document.getElementById("squareArea").value);

    if (isNaN(s) || s <= 0) {
        document.getElementById("squareAreaResult").innerHTML = "Enter a valid side length.";
        return;
    }

    document.getElementById("squareAreaResult").innerHTML =
        "Area = " + (s * s).toFixed(2);
}

function rectangleArea() {
    let l = parseFloat(document.getElementById("rectangleLengthA").value);
    let w = parseFloat(document.getElementById("rectangleWidthA").value);

    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
        document.getElementById("rectangleAreaResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("rectangleAreaResult").innerHTML =
        "Area = " + (l * w).toFixed(2);
}

function triangleArea() {
    let b = parseFloat(document.getElementById("triangleBase").value);
    let h = parseFloat(document.getElementById("triangleHeight").value);

    if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
        document.getElementById("triangleAreaResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("triangleAreaResult").innerHTML =
        "Area = " + (0.5 * b * h).toFixed(2);
}

function circleArea() {
    let r = parseFloat(document.getElementById("circleRadiusArea").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("circleAreaResult").innerHTML = "Enter a valid radius.";
        return;
    }

    document.getElementById("circleAreaResult").innerHTML =
        "Area = " + (Math.PI * r * r).toFixed(2);
}

function trapezoidArea() {
    let a = parseFloat(document.getElementById("trapBase1").value);
    let b = parseFloat(document.getElementById("trapBase2").value);
    let h = parseFloat(document.getElementById("trapHeight").value);

    if (isNaN(a) || isNaN(b) || isNaN(h) || a <= 0 || b <= 0 || h <= 0) {
        document.getElementById("trapezoidAreaResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("trapezoidAreaResult").innerHTML =
        "Area = " + (((a + b) * h) / 2).toFixed(2);
}

/*==================================================
                CIRCLE TOOLS
==================================================*/

function calculateDiameter() {
    let r = parseFloat(document.getElementById("diameterRadius").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("diameterResult").innerHTML = "Enter a valid radius.";
        return;
    }

    document.getElementById("diameterResult").innerHTML =
        "Diameter = " + (2 * r).toFixed(2);
}

function calculateRadius() {
    let d = parseFloat(document.getElementById("radiusDiameter").value);

    if (isNaN(d) || d <= 0) {
        document.getElementById("radiusResult").innerHTML = "Enter a valid diameter.";
        return;
    }

    document.getElementById("radiusResult").innerHTML =
        "Radius = " + (d / 2).toFixed(2);
}

function calculateCircumference() {
    let r = parseFloat(document.getElementById("circRadius").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("circumferenceResult").innerHTML = "Enter a valid radius.";
        return;
    }

    document.getElementById("circumferenceResult").innerHTML =
        "Circumference = " + (2 * Math.PI * r).toFixed(2);
}

/*==================================================
                    VOLUME
==================================================*/

function calculateCube() {
    let s = parseFloat(document.getElementById("cubeSide").value);

    if (isNaN(s) || s <= 0) {
        document.getElementById("cubeResult").innerHTML = "Enter a valid side.";
        return;
    }

    document.getElementById("cubeResult").innerHTML =
        "Volume = " + Math.pow(s, 3).toFixed(2);
}

function calculatePrism() {
    let l = parseFloat(document.getElementById("prismLength").value);
    let w = parseFloat(document.getElementById("prismWidth").value);
    let h = parseFloat(document.getElementById("prismHeight").value);

    if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
        document.getElementById("prismResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("prismResult").innerHTML =
        "Volume = " + (l * w * h).toFixed(2);
}

function calculateCylinder() {
    let r = parseFloat(document.getElementById("cylinderRadius").value);
    let h = parseFloat(document.getElementById("cylinderHeight").value);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
        document.getElementById("cylinderResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("cylinderResult").innerHTML =
        "Volume = " + (Math.PI * r * r * h).toFixed(2);
}

function calculateSphere() {
    let r = parseFloat(document.getElementById("sphereRadius").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("sphereResult").innerHTML = "Enter a valid radius.";
        return;
    }

    document.getElementById("sphereResult").innerHTML =
        "Volume = " + ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(2);
}

function calculateCone() {
    let r = parseFloat(document.getElementById("coneRadius").value);
    let h = parseFloat(document.getElementById("coneHeight").value);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
        document.getElementById("coneResult").innerHTML = "Enter valid values.";
        return;
    }

    document.getElementById("coneResult").innerHTML =
        "Volume = " + ((1 / 3) * Math.PI * r * r * h).toFixed(2);
}

/*==================================================
                CIRCLE TOOLS
==================================================*/

// Diameter = 2 × Radius
function calculateDiameter() {

    let radius = parseFloat(document.getElementById("diameterRadius").value);

    if (isNaN(radius) || radius <= 0) {

        document.getElementById("diameterResult").innerHTML = "Please enter a valid radius.";

        return;

    }

    let diameter = radius * 2;

    document.getElementById("diameterResult").innerHTML =
        "Diameter = " + diameter.toFixed(2);

}

// Radius = Diameter ÷ 2
function calculateRadius() {

    let diameter = parseFloat(document.getElementById("radiusDiameter").value);

    if (isNaN(diameter) || diameter <= 0) {

        document.getElementById("radiusResult").innerHTML = "Please enter a valid diameter.";

        return;

    }

    let radius = diameter / 2;

    document.getElementById("radiusResult").innerHTML =
        "Radius = " + radius.toFixed(2);

}

// Circumference = 2πr
function calculateCircumference() {

    let radius = parseFloat(document.getElementById("circRadius").value);

    if (isNaN(radius) || radius <= 0) {

        document.getElementById("circumferenceResult").innerHTML = "Please enter a valid radius.";

        return;

    }

    let circumference = 2 * Math.PI * radius;

    document.getElementById("circumferenceResult").innerHTML =
        "Circumference = " + circumference.toFixed(2);

}

/*==================================================
                    VOLUME
==================================================*/

// Cube
function calculateCube() {

    let side = parseFloat(document.getElementById("cubeSide").value);

    if (isNaN(side) || side <= 0) {

        document.getElementById("cubeResult").innerHTML = "Please enter a valid side length.";

        return;

    }

    let volume = Math.pow(side, 3);

    document.getElementById("cubeResult").innerHTML =
        "Volume = " + volume.toFixed(2);

}

// Rectangular Prism
function calculatePrism() {

    let length = parseFloat(document.getElementById("prismLength").value);

    let width = parseFloat(document.getElementById("prismWidth").value);

    let height = parseFloat(document.getElementById("prismHeight").value);

    if (isNaN(length) || isNaN(width) || isNaN(height) ||
        length <= 0 || width <= 0 || height <= 0) {

        document.getElementById("prismResult").innerHTML = "Please enter valid values.";

        return;

    }

    let volume = length * width * height;

    document.getElementById("prismResult").innerHTML =
        "Volume = " + volume.toFixed(2);

}

// Cylinder
function calculateCylinder() {

    let radius = parseFloat(document.getElementById("cylinderRadius").value);

    let height = parseFloat(document.getElementById("cylinderHeight").value);

    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {

        document.getElementById("cylinderResult").innerHTML = "Please enter valid values.";

        return;

    }

    let volume = Math.PI * radius * radius * height;

    document.getElementById("cylinderResult").innerHTML =
        "Volume = " + volume.toFixed(2);

}

// Sphere
function calculateSphere() {

    let radius = parseFloat(document.getElementById("sphereRadius").value);

    if (isNaN(radius) || radius <= 0) {

        document.getElementById("sphereResult").innerHTML = "Please enter a valid radius.";

        return;

    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("sphereResult").innerHTML =
        "Volume = " + volume.toFixed(2);

}

// Cone
function calculateCone() {

    let radius = parseFloat(document.getElementById("coneRadius").value);

    let height = parseFloat(document.getElementById("coneHeight").value);

    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {

        document.getElementById("coneResult").innerHTML = "Please enter valid values.";

        return;

    }

    let volume = (1 / 3) * Math.PI * radius * radius * height;

    document.getElementById("coneResult").innerHTML =
        "Volume = " + volume.toFixed(2);

}
