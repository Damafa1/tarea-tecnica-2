// 1. Contar caracteres del nombre de un empleado
function longitud(empleado) {
   let nombre = empleado.nombre;
   let lon = 0;
   for (let i = 0; i < nombre.length; i++) {
     lon++;
   }
   return lon;
}
let empleado = { nombre: "Ana", edad: 25 };
console.log("El nombre", empleado.nombre, "tiene", longitud(empleado), "caracteres.");

// 2. Contar apariciones de una vocal en el nombre de un producto
function contadorVocal(producto, vocal) {
   let nombre = producto.nombre;
   let cv = 0;
   for (let i = 0; i < nombre.length; i++) {
      if (nombre[i].toLowerCase() == vocal.toLowerCase()) {
         cv++;
      }
   }
   return cv;
}
let prod = { nombre: "Programador", precio: 100 };
let cv = contadorVocal(prod, "o");
console.log("La vocal 'o' aparece", cv, "veces en", prod.nombre);

// 3. Invertir el nombre de una persona
function reverse(persona) {
   let nombre = persona.nombre;
   let invertido = "";
   for (let i = nombre.length - 1; i >= 0; i--) {
      invertido = invertido + nombre[i];
   }
   return invertido;
}
let persona = { nombre: "Carlos", edad: 30 };
console.log("Nombre invertido:", reverse(persona));

// 4. Comparar longitudes de nombres entre dos empleados
function compararLongitudes(e1, e2) {
   let len1 = longitud(e1);
   let len2 = longitud(e2);
   if (len1 > len2) {
      console.log("El empleado con el nombre más largo es", e1.nombre, "(", len1, "letras )");
   } else {
      console.log("El empleado con el nombre más largo es", e2.nombre, "(", len2, "letras )");
   }
}
compararLongitudes({ nombre: "María", edad: 28 }, { nombre: "Guillermo", edad: 35 });

// 5. Obtener iniciales del cargo de un empleado
function iniciales(empleado) {
   let palabras = empleado.cargo.split(" ");
   let ini = "";
   for (let i = 0; i < palabras.length; i++) {
      ini = ini + palabras[i][0].toUpperCase() + ".";
   }
   return ini;
}
let emp = { cargo: "Director General Académico" };
console.log(emp.cargo, "→", iniciales(emp));
// 1. Contar caracteres en nombres de varios empleados
let empleados = [
   { nombre: "Ana", edad: 22 },
   { nombre: "Santiago", edad: 30 },
   { nombre: "Rosa", edad: 27 }
];
for (let i = 0; i < empleados.length; i++) {
   let emp = empleados[i];
   console.log(emp.nombre, "→", longitud(emp), "caracteres");
}

// 2. Contar vocales en nombres de empleados
empleados = [
   { nombre: "Andrea" },
   { nombre: "Marcos" },
   { nombre: "Lucía" }
];
let vocal = "a";
for (let i = 0; i < empleados.length; i++) {
   let emp = empleados[i];
   let cant = contadorVocal(emp, vocal);
   console.log(emp.nombre, "→", cant, "veces '" + vocal + "'");
}

// 3. Invertir los nombres de empleados
empleados = [
   { nombre: "Luis" },
   { nombre: "Carmen" },
   { nombre: "Pedro" }
];
for (let i = 0; i < empleados.length; i++) {
   let emp = empleados[i];
   console.log(emp.nombre, "→", reverse(emp));
}

// 4. Comparar longitudes de ciudades de residencia
empleados = [
   { nombre: "Carlos", ciudad: "Milagro" },
   { nombre: "Andrea", ciudad: "Guayaquil" },
   { nombre: "José", ciudad: "Quito" }
];
let mayor = empleados[0];
for (let i = 1; i < empleados.length; i++) {
   if (empleados[i].ciudad.length > mayor.ciudad.length) {
      mayor = empleados[i];
   }
}
console.log("La ciudad con más letras es", mayor.ciudad, "(", mayor.ciudad.length, "letras )");

// 5. Obtener iniciales de cargos de varios empleados
empleados = [
   { cargo: "Director General Académico" },
   { cargo: "Jefe de Laboratorio" },
   { cargo: "Asistente Administrativo" }
];
for (let i = 0; i < empleados.length; i++) {
   console.log(empleados[i].cargo, "→", iniciales(empleados[i]));
}
// 1. Promedio de calificaciones mayores a 70
empleados = [
   { nombre: "Ana", nota: 65 },
   { nombre: "Luis", nota: 80 },
   { nombre: "Carla", nota: 90 },
   { nombre: "José", nota: 50 },
   { nombre: "Marta", nota: 75 }
];
let suma = 0, cont = 0;
for (let i = 0; i < empleados.length; i++) {
   if (empleados[i].nota >= 70) {
      suma += empleados[i].nota;
      cont++;
   }
}
console.log("Promedio de notas ≥ 70:", (suma / cont).toFixed(2));

// 2. Contar empleados con edad negativa o inválida
empleados = [
   { nombre: "Ana", edad: 22 },
   { nombre: "Luis", edad: -5 },
   { nombre: "Carla", edad: 0 }
];
let invalidos = 0;
for (let i = 0; i < empleados.length; i++) {
   if (empleados[i].edad <= 0) invalidos++;
}
console.log("Cantidad de edades inválidas:", invalidos);

// 3. Promedio de edad: mayores vs menores de edad
empleados = [
   { nombre: "Ana", edad: 17 },
   { nombre: "Luis", edad: 20 },
   { nombre: "Carla", edad: 35 },
   { nombre: "José", edad: 15 },
   { nombre: "Marta", edad: 18 }
];
let cmay = 0, cmen = 0, acumay = 0, acumen = 0;
for (let i = 0; i < empleados.length; i++) {
   if (empleados[i].edad >= 18) {
      cmay++;
      acumay += empleados[i].edad;
   } else {
      cmen++;
      acumen += empleados[i].edad;
   }
}
console.log("Promedio de mayores:", (acumay / cmay).toFixed(2));
console.log("Promedio de menores:", (acumen / cmen).toFixed(2));

// 4. Mostrar la tabla de multiplicar del salario
let empleadoSalario = { nombre: "Luis", salario: 300 };
console.log("Tabla del salario (" + empleadoSalario.salario + "):");
for (let i = 1; i <= 10; i++) {
   console.log(empleadoSalario.salario * i);
}

// 5. Promedio de salarios pares e impares
empleados = [
   { nombre: "Ana", salario: 450 },
   { nombre: "Luis", salario: 500 },
   { nombre: "Carla", salario: 625 },
   { nombre: "José", salario: 800 },
   { nombre: "Marta", salario: 705 }
];
let spar = 0, simpar = 0, cpar = 0, cimpar = 0;
for (let i = 0; i < empleados.length; i++) {
   if (empleados[i].salario % 2 == 0) {
      spar += empleados[i].salario;
      cpar++;
   } else {
      simpar += empleados[i].salario;
      cimpar++;
   }
}
console.log("Promedio de salarios pares:", (spar / cpar).toFixed(2));
console.log("Promedio de salarios impares:", (simpar / cimpar).toFixed(2));
