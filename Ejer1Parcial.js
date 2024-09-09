//Josue Ernesto Velasquez Cruz 

// 1. Crear un array con al menos 4 elementos, cada uno representando una categoría de gasto y su valor.
let gastosMensuales = [
    { categoria: 'Vivienda', valor: 500 },
    { categoria: 'Alimentos', valor: 300 },
    { categoria: 'Transporte', valor: 100 },
    { categoria: 'Entretenimiento', valor: 150 }
];

// 2. Definir una variable para el ingreso mensual total de la familia.
let ingresoMensual = 1200;

// 3. Calcular el gasto total de los gastos sumando cada categoría.
let totalGastos = 0;
for (let i = 0; i < gastosMensuales.length; i++) {
    totalGastos += gastosMensuales[i].valor;
}

// 4. Utilizar sentencias if, else if y else para calcular el estado del presupuesto.
if (totalGastos < ingresoMensual) {
    let ahorro = ingresoMensual - totalGastos;
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ahorro}`);
} else if (totalGastos === ingresoMensual) {
    console.log('El presupuesto está equilibrado y no tienes ahorros');
} else {
    let deficit = totalGastos - ingresoMensual;
    console.log(`El presupuesto está excedido. Te faltan $${deficit} para cubrir los gastos.`);
}
