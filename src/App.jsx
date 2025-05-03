import { useState } from 'react';
import { getOptimalItems } from "./utils/optimizer";

function App() {
  // Este array representa los elementos disponibles con su peso y calorías
  const items = [
    { id: "E1", weight: 5, calories: 3 },
    { id: "E2", weight: 3, calories: 5 },
    { id: "E3", weight: 5, calories: 2 },
    { id: "E4", weight: 1, calories: 8 },
    { id: "E5", weight: 2, calories: 2 },
  ];

  // Calculamos el total de calorías y peso disponible sumando todos los elementos
  const totalCalories = items.reduce((sum, i) => sum + i.calories, 0);
  const totalWeight = items.reduce((sum, i) => sum + i.weight, 0);

  // Estados para los inputs del usuario y el resultado final
  const [minCalories, setMinCalories] = useState(15); // lo mínimo que debe sumar en calorías
  const [maxWeight, setMaxWeight] = useState(10); // lo máximo que puede sumar en peso
  const [result, setResult] = useState([]); // acá se guarda la solución óptima
  const [errorMsg, setErrorMsg] = useState(""); // para mostrar errores si hay


  // Esta función controla el cambio en el input de calorías mínimas
  const handleMinCaloriesChange = (e) => {
    const raw = e.target.value;
    const value = parseInt(raw);
    setMinCalories(raw); // actualizamos el estado aunque sea string para permitir borrar

    // validaciones: si se pasa del total o si es negativo
    if (raw === "" || isNaN(value)) {
      setErrorMsg("");
      return;
    }

    if (value > totalCalories) {
      setErrorMsg(`Las calorías mínimas no pueden superar las disponibles (${totalCalories}).`);
    } else if (value < 0) {
      setErrorMsg("Las calorías mínimas no pueden ser negativas.");
    } else {
      setErrorMsg(""); // si todo bien, quitamos el error
    }
  };

  // Similar a lo anterior pero para el peso máximo
  const handleMaxWeightChange = (e) => {
    const raw = e.target.value;
    const value = parseInt(raw);
    setMaxWeight(raw);

    if (raw === "" || isNaN(value)) {
      setErrorMsg("");
      return;
    }

    if (value > totalWeight) {
      setErrorMsg(`El peso máximo no puede superar el disponible (${totalWeight}).`);
    } else if (value < 0) {
      setErrorMsg("El peso máximo no puede ser negativo.");
    } else {
      setErrorMsg("");
    }
  };
  
  // Esta función se llama cuando se hace clic en el botón de calcular
  const handleCalculate = () => {
    const cal = parseInt(minCalories);
    const wt = parseInt(maxWeight);

    // Validamos que los valores sean válidos antes de calcular
    if (
      !isNaN(cal) &&
      !isNaN(wt) &&
      cal >= 0 &&
      wt >= 0 &&
      cal <= totalCalories &&
      wt <= totalWeight
    ) {
      // Llamamos a la función que hace la lógica para obtener el resultado óptimo
      const optimal = getOptimalItems(items, cal, wt);
      setResult(optimal);
    } else {
      setErrorMsg("Ingrese valores válidos para calorías y peso.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Selector de elementos óptimos</h1>

      {/* Mostramos los datos máximos para que el usuario los tenga de referencia */}
      <div className="mb-4 text-sm text-gray-600">
        <p><strong>Calorías disponibles:</strong> {totalCalories}</p>
        <p><strong>Peso disponible:</strong> {totalWeight}</p>
      </div>

      {/* Si hay un error lo mostramos en rojo */}
      {errorMsg && (
        <div className="mb-4 text-red-600 font-medium">
          {errorMsg}
        </div>
      )}

      {/* Input de calorías */}
      <div className="mb-4">
        <label className="block">Calorías mínimas:</label>
        <input
          type="number"
          value={minCalories}
          onChange={handleMinCaloriesChange}
          className="border px-2 py-1 w-full"
        />
      </div>

      {/* Input de peso */}
      <div className="mb-4">
        <label className="block">Peso máximo:</label>
        <input
          type="number"
          value={maxWeight}
          onChange={handleMaxWeightChange}
          className="border px-2 py-1 w-full"
        />
      </div>

      {/* Botón de calcular que solo se habilita si no hay error */}
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
        disabled={!!errorMsg}
      >
        Calcular
      </button>

      {/* Sección para mostrar los resultados */}
      <h2 className="text-xl font-semibold mb-2">Resultado:</h2>
      <ul className="list-disc list-inside">
        {result.map((item) => (
          <li key={item.id}>{item.id} - Peso: {item.weight}, Calorías: {item.calories}</li>
        ))}
      </ul>

      <div className="mt-4">
        <p><strong>Peso total:</strong> {result.reduce((sum, i) => sum + i.weight, 0)}</p>
        <p><strong>Calorías totales:</strong> {result.reduce((sum, i) => sum + i.calories, 0)}</p>
      </div>
    </div>
  )
}

export default App
