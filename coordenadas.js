function convertToRectangular() {
    // Obtiene los valores de los campos de entrada
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    // Llama a la función con los parámetros obtenidos
    convertToRectangularWithParams(r, theta);
}

function convertToPolar() {
    // Obtiene los valores de los campos de entrada
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    // Llama a la función con los parámetros obtenidos
    convertToPolarWithParams(x, y);
}

// Función para convertir coordenadas polares a rectangulares con parámetros
function convertToRectangularWithParams(r, theta) {
    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('result').innerText = 'Por favor, introduce valores válidos.';
        return;
    }

    // Convertir ángulo de grados a radianes
    const thetaRad = theta * (Math.PI / 180);

    // Fórmulas para la conversión
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);

    document.getElementById('result').innerText = `Coordenadas Rectangulares: X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}

// Función para convertir coordenadas rectangulares a polares con parámetros
function convertToPolarWithParams(x, y) {
    if (isNaN(x) || isNaN(y)) {
        document.getElementById('result').innerText = 'Por favor, introduce valores válidos.';
        return;
    }

    // Fórmulas para la conversión
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    document.getElementById('result').innerText = `Coordenadas Polares: Radio (r) = ${r.toFixed(2)}, Ángulo (θ) = ${theta.toFixed(2)}°`;
}