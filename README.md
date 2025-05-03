Proyecto: Selector de elementos óptimos

Este proyecto fue realizado como parte de una prueba técnica para un cargo de analista desarrollador frontend. Es una aplicación desarrollada en React que permite seleccionar una combinación óptima de elementos según un peso máximo y un mínimo de calorías requeridas.


Tecnologías usadas

React
Script
TailwindCSS (para los estilos)


Estructura del proyecto

App.jsx: componente principal donde se encuentran los estados, inputs y el cálculo de la solución óptima.
utils/optimizer.js: aquí se encuentra la lógica que resuelve cuáles elementos conviene seleccionar.

Cómo funciona
El usuario puede ingresar:
Un mínimo de calorías que quiere alcanzar.
Un peso máximo que puede cargar.

El programa valida que los valores ingresados sean positivos y no excedan lo disponible. Luego, al hacer clic en "Calcular", se muestra un listado de los elementos seleccionados que cumplen con las condiciones ingresadas.

Cómo correr el proyecto

Clonar el repositorio
Instalar dependencias con npm install
Correr el proyecto con npm run dev
